class KutyaNev {
    constructor(id, nev) {
        this.id = id;
        this.nev = nev;
    }
}
class KutyaFajta {
    constructor(id, nev, eredetinev) {
        this.id = id;
        this.nev = nev;
        this.eredetinev = eredetinev;
    }
}
class Kutya {
    constructor(id, nevid, fajid, kor, datum){
        this.id = id;
        this.nevid = nevid;
        this.fajid = fajid;
        this.kor = kor;
        this.datum = datum;
    }
}
const kutyaNevek = [];
function init(){
    console.log("cs");
    fetch("KutyaNevek.csv").then(x => x.text()).then(szoveg => {
        const sorok = szoveg.split("\r\n");
        sorok.shift();
        sorok.forEach(e => {
            const vag = e.split(";");
            kutyaNevek.push(new kutyaNev(parseInt(vag[0]), vag[1]));
        });
    });

}