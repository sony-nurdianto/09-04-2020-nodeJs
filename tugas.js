class Time {
    constructor(obj = "" ) {
        this.start = parseInt(obj.start) ;
        this.stop = parseInt(obj.stop);
        
        
    }

    
    
} 


class Time2 extends Time {
    constructor (opt = {}) {
        super(opt);
        this.selisih = parseInt(opt.stop) - parseInt(opt.start);
        
        
    }
    
}

const x = new Time2 ({
    start : new Date ().toLocaleString('id-ID' , {
        timeZone : "Asia/Jakarta",
        hour : 'numeric',
        minute : 'numeric',
        second : 'numeric'
    }),
    stop : new Date().toLocaleString('id-ID',{
        timeZone : "Asia/Shanghai",
        hour : 'numeric',
        minute : 'numeric',
        second : 'numeric',
    })
})

console.log(x);