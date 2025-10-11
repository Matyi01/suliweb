const size = 12;
const board = document.getElementById("board");
const stepsDisplay = document.getElementById("steps");
const statusDisplay = document.getElementById("status");
const startBtn = document.getElementById("startBtn");
const modeSelect = document.getElementById("modeSelect");

let grid, steps, foundParts, totalParts, maxSteps, mode, gameOver;

const ships = [
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
    [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
    [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }],
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 1 }],
    [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }]
];

startBtn.addEventListener("click", startGame);

function startGame() {
    mode = modeSelect.value;
    board.innerHTML = "";
    statusDisplay.textContent = "";
    grid = Array.from({ length: size }, () => Array(size).fill(0));
    steps = 0;
    foundParts = 0;
    gameOver = false;
    maxSteps = (mode === "time") ? 20 : Infinity;
    generateShips();
    drawBoard();
    totalParts = grid.flat().filter(v => v === 1).length;
    updateSteps();
}

function updateSteps() { stepsDisplay.textContent = `${steps} / ${maxSteps === Infinity ? "∞" : maxSteps}`; }

function rotateShip(ship, rotation) { return ship.map(p => { let { x, y } = p; for (let i = 0; i < rotation; i++) [x, y] = [y, -x]; return { x, y }; }); }
function normalize(ship) { const minX = Math.min(...ship.map(p => p.x)), minY = Math.min(...ship.map(p => p.y)); return ship.map(p => ({ x: p.x - minX, y: p.y - minY })); }
function inBounds(x, y) { return x >= 0 && y >= 0 && x < size && y < size; }

function canPlace(ship, x0, y0) {
    for (const part of ship) {
        const x = x0 + part.x, y = y0 + part.y;
        if (!inBounds(x, y)) return false;
        for (let dy = -1; dy <= 1; dy++)
            for (let dx = -1; dx <= 1; dx++)
                if (inBounds(x + dx, y + dy) && grid[y + dy][x + dx] === 1) return false;
    }
    return true;
}

function placeShip(ship) {
    let placed = false, attempts = 0;
    while (!placed && attempts < 1000) {
        attempts++;
        const rot = Math.floor(Math.random() * 4);
        const rotated = normalize(rotateShip(ship, rot));
        const maxX = size - Math.max(...rotated.map(p => p.x)) - 1;
        const maxY = size - Math.max(...rotated.map(p => p.y)) - 1;
        const x0 = Math.floor(Math.random() * (maxX + 1));
        const y0 = Math.floor(Math.random() * (maxY + 1));
        if (canPlace(rotated, x0, y0)) {
            for (const part of rotated) grid[y0 + part.y][x0 + part.x] = 1;
            placed = true;
        }
    }
}

function generateShips() { ships.forEach(placeShip); }

function drawBoard() {
    board.innerHTML = "";
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.addEventListener("click", handleClick);
            board.appendChild(cell);
        }
    }
}

function handleClick(e) {
    if (gameOver) return;
    const cell = e.target;
    const x = +cell.dataset.x, y = +cell.dataset.y;
    if (cell.classList.contains("hit") || cell.classList.contains("miss")) return;

    steps++;
    if (mode === "time" && steps > maxSteps) {
        statusDisplay.textContent = "⏱️ Elfogytak a lépéseid!";
        gameOver = true;
        updateSteps();
        return;
    }
    updateSteps();

    if (grid[y][x] === 1) {
        cell.classList.add("hit");
        cell.textContent = "🚀";
        grid[y][x] = 2;
        foundParts++;
        checkShipComplete();
        if (foundParts === totalParts) {
            statusDisplay.textContent = "🎯 Minden űrhajót megtaláltál!";
            gameOver = true;
        }
    } else {
        const dist = bfsNearestShip(x, y);
        cell.classList.add("miss");
        if (dist === null) {
            cell.textContent = "-";
            cell.style.background = "#555";
            cell.style.color = "#eee";
        } else {
            cell.textContent = dist;
            // színezés távolság szerint
            if (dist <= 2) { cell.style.background = "#0f0"; cell.style.color = "#000"; }
            else if (dist <= 4) { cell.style.background = "#ff0"; cell.style.color = "#000"; }
            else { cell.style.background = "#f00"; cell.style.color = "#fff"; }
        }
    }
}

// ------------------------ BFS alapú, pontos távolság ------------------------
function bfsNearestShip(x, y) {
    if (grid[y][x] === 1) return 0;

    const visited = Array.from({ length: size }, () => Array(size).fill(false));
    const queue = [{ x, y, dist: 0 }];
    visited[y][x] = true;

    const dirs = [{ dx: 0, dy: -1 }, { dx: 0, dy: 1 }, { dx: -1, dy: 0 }, { dx: 1, dy: 0 }];

    while (queue.length > 0) {
        const { x: cx, y: cy, dist } = queue.shift();
        for (const { dx, dy } of dirs) {
            const nx = cx + dx, ny = cy + dy;
            if (nx >= 0 && ny >= 0 && nx < size && ny < size && !visited[ny][nx]) {
                if (grid[ny][nx] === 1) return dist + 1;
                visited[ny][nx] = true;
                queue.push({ x: nx, y: ny, dist: dist + 1 });
            }
        }
    }
    return null;
}

// ------------------------ Time Attack bónusz ------------------------
function checkShipComplete() {
    if (mode !== "time") return;
    if (foundParts % 5 === 0) {
        maxSteps += 5;
        updateSteps();
        statusDisplay.textContent = "💫 Bónusz! +5 lépés kaptál!";
    }
}
