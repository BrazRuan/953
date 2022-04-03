//Objetivo - Criação de Classes e instanciamento de Objetos em JavaScript

function Estadio(nome, lotacao, time){
    this.nome = nome;
    this.lotacao = lotacao;
    this.times = time;
    this.torcedores = [];
}
Estadio.prototype.entrada = function(torcedor){
    if(this.torcedores.length == this.lotacao) return 'Estádio Lotado!';
    this.torcedores.push(torcedor);
    console.log(this.torcedores);
    return this.torcedores.length;
}

Estadio.prototype.getTorcedores = function(){
    return this.torcedores;
}
//criando a classe torcedor
//utilizado para criar atributos
function Torcedor(nome, idade, time){
    this.nome = nome;
    this.idade = idade;
    this.time = time;
    Torcedor.contador++;
}
//classe estática, para contar quantas classes criadas
Torcedor.contador = 0;

//criação dos métodos
Torcedor.prototype.grito = function(){
    return 'Vai ' + this.time; + '!!!';
}
Torcedor.prototype.escolherTime = function(){
    if(this.time != undefined) return this.time;
    else{
        this.time = 'América'
        return this.time;
    }        
}

//instanciando torcedores
// const torcedor1 = new Torcedor("Ruan", 23, "Flamengo");
// const torcedor2 = new Torcedor("Carlos", 43, "Vasco");
// const torcedor3 = new Torcedor("Lucas", 32, "Botafogo");
// const torcedor4 = new Torcedor("Lucas", 32, );

//instanciando Estádio
// const maracana = new Estadio('Maracana',5,['Flamengo','Vasco'])
// maracana.entrada(torcedor1);
// maracana.entrada(torcedor2);
// maracana.entrada(torcedor3);

// console.log(maracana);