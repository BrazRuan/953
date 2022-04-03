import Estadio from "./estadio.js";
import Torcedor from "./torcedor.js";


document.getElementById("entrar").addEventListener('click',entrarEstadio);
const maracana = new Estadio('Maracanã',10,['Flamengo','Vasco'] )
function entrarEstadio(){ 
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const time = document.getElementById("time").value;

    const torcedorDom = new Torcedor(nome,idade,time);//instanceia um novo torcedor
    console.log(torcedorDom);
    document.getElementById('totalTorcedores').innerHTML = maracana.entrada(torcedorDom); //adiciona o novo torcedor ao quantitativo do estádio
 }