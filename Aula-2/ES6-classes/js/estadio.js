//construtor de classes
export default class Estadio{
    constructor(nome, lotacao, time){
        this.nome = nome;
        this.lotacao = lotacao;
        this.time = time;
        this.torcedores = [];
    }
    entrada(torcedor){
        if(this.torcedores.length == this.lotacao) return 'Estádio Lotado!';
        this.torcedores.push(torcedor);
        return this.torcedores.length;
    }
    getTorcedores(){
        return this.torcedores;
    }
}