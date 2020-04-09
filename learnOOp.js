class Manusia { 
    constructor(obj = {}) {
        this.name = obj.name || "";
        this.age = obj.age || 1;

    }

    getNameAndAge(){
        return `${this.name} and ${this.age} years`
    }
}
const budi = new Manusia ({
    age : 18,
    name : "rahasia ilahi"
});

class Pekerjaan extends Manusia {
    constructor (opt = {} ) {
        super(opt);
        this.Pekerjaan = opt.Pekerjaan || '';
        this.bekerjaSejak = opt.bekerjaSejak || '';
    }
    render(){
        let kerja = "status tidak jelas"
        if(this.age >= 50 ){
            kerja = "ok terserah dia"
        }
        return`<h1>${this.name}</h1>
                <h1>${kerja}</h1>`;
    }
}



const pakde = new Pekerjaan ({
    name : "pakde karwo",
    age : 75,
    pekerjaan : "tukang jagal"
});

const bude = new Pekerjaan ({
    name : "Jeng Juminten",
    age : 18,
    pekerjaan : "programer"
})

console.log(pakde);
pakde.render();
bude.getNameAndAge();