export class Temperatura {

    constructor (cel,fa){
        this.cel = cel;
        this.fa = fa;
    }

    celtofa(){
        return (this.cel * 9/5) + 32;
    }
    
    fatocel(){
        return (this.fa - 32) * 5/9;
    }
}