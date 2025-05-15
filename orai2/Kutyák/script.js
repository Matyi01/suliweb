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
function init(){
    console.log("cs");
}