export default class Torcedor{
    constructor(nome,idade,time){
        this.nome = nome;
        this.idade = idade;
        this.time = time;
        Torcedor.contador++;
    }
    //contador = 0;
    grito(){
        return 'Vai ' + this.time + "!!";
    }
    escolherTime(){
        if(this.time != undefined) return this.time;    
        this.time = 'América';
        return this.time;
    }
}
