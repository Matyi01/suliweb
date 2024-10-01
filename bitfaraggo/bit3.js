function startTime() 
        {
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
            setTimeout(startTime, 1000);
        }

function checkTime(i) 
        {
            if (i < 10)
            {
                i = "0" + i
            };
            return i;
        }


let szam= 0;

function valtozas()
{

    
    if(szam==0)
    {
        var image = document.createElement("img");
        image.setAttribute('src', 'ady.jpg');
        image.setAttribute('id', 'kep');
        image.setAttribute( "display","block")
        image.setAttribute( "margin-left","auto")
        image.setAttribute( "margin-right","auto")
        image.setAttribute('height', '600px');
        image.setAttribute('width', '50px');
        document.body.appendChild(image);
        image.src= "ady.jpg";
        szam++;
        image.scrollIntoView();
    }
    else if(szam==1)
    {
        document.getElementById("kep").src=kep.src.replace("ady.jpg","kep1.jpg")
        szam++;
        document.getElementById("kep").scrollIntoView();
    }
    else if(szam==2)
    {
        document.getElementById("kep").src=kep.src.replace("kep1.jpg","kep2.jpg")
        szam++;
        document.getElementById("kep").scrollIntoView();
    }
    else if(szam==3)
    {
        document.getElementById("kep").src=kep.src.replace("kep2.jpg","kep3.jpg")
        szam++;
        document.getElementById("kep").scrollIntoView();
    }
    else if(szam==4)
    {
        document.getElementById("kep").src=kep.src.replace("kep3.jpg","kep4.jpg")
        szam++;
        document.getElementById("kep").scrollIntoView();
    }
    else if(szam==5)
    {
        document.getElementById("kep").src=kep.src.replace("kep4.jpg","kep5.jpg")
        szam++;
        document.getElementById("kep").scrollIntoView();
    }
    else if(szam==6)
    {
        document.getElementById("kep").src=kep.src.replace("kep5.jpg","kep6.jpg")
        szam++;
        document.getElementById("kep").scrollIntoView();
    }
    else if(szam==7)
    {
        document.getElementById("kep").src=kep.src.replace("kep6.jpg","ady.jpg")
        szam=1;
        document.getElementById("kep").scrollIntoView();
    }
}
let kattint=0;
function nyomasMate()
{
    let a=document.getElementById("bemutat")
    if(kattint==0)
    {
        a.innerHTML="Konyhási Máté vagyok, nem szeretem a humán tantárgyakat, szeretek a Snowrunner nevű játékkal játszani";
        kattint++;
    }
    else if(kattint==1)
    {
        a.innerHTML="";
        kattint=0;
    }
}
function nyomasMatyi()
{
    let a=document.getElementById("bemutat")
    if(kattint==0)
    {
        a.innerHTML="Holczer Mátyás vagyok, szeretek programozni, és szeretek a Snowrunner nevű játékkal játszani";
        kattint++;
    }
    else if(kattint==1)
    {
        a.innerHTML="";
        kattint=0;
    }
}
function nyomasAkos()
{
    let a=document.getElementById("bemutat")
    if(kattint==0)
    {
        a.innerHTML="Keszericze Ákos vagyok, szeretek kosarazni, és a barátaimmal lenni és a Snowrunner nevű játékkal játszani";
        kattint++;
    }
    else if(kattint==1)
    {
        a.innerHTML="";
        kattint=0;
    }
}
function nyomasPepa()
{
    let a=document.getElementById("bemutat")
    if(kattint==0)
    {
        a.innerHTML="";
        kattint++;
    }
    else if(kattint==1)
    {
        a.innerHTML="";
        kattint=0;
    }
}
function nyomasAdy()
{
    window.open("https://ady-nagyatad.hu/")
}