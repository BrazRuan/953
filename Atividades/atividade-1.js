const itens = [
    {nome: "Arroz 1Kg", valor:5.90},
    {nome: "feijão Preto 1Kg", valor: 8.90},
    {nome: "Farinha 1Kg", valor: 1.50},
    {nome: "Leite 1L", valor: 4.50},
    {nome:"Fubá", valor: 2.10}
]
    const desconto = (percentual,itens) =>{
        itens.map(item => {
            let valor_desconto =item.valor*(1-(percentual/100));
            valor_desconto = valor_desconto.toFixed(2);
            item.valor = parseFloat(valor_desconto);
        })
        return itens;
        console.log('cesta_desconto',desconto(10,itens));
    }

    const totalizar = function(itens){
        return itens.reduce(function(acc,obj){
            return acc+obj.valor;
        },0);
    }

    var total = totalizar(itens);
    console.log('total ', parseFloat(total.toFixed(2)));

    const filtrar_itens = function(valor, nome){
        return itens.filter(function(el){
            return el.valor >=valor || (nome && el.nome.indexOf(nome)> -1);
        });
    }
    var itens_filtrados = filtrar_itens(5.00,'Fubá');
    console.log('itens filtrados ',itens_filtrados);

    const buscar_item = (nome) =>{
        return itens.find(item =>{
        return item.nome.indexOf("a")>-1;
        });
    }
    var item_buscado = buscar_item("Fubá");
    console.log('item buscado', item_buscado)

    const desconto_condicional = (valor_elegível, percentua_desconto) =>{
        const itens_filtrados = filtrar_itens(valor_elegível);
        return desconto(percentua_desconto,itens_filtrados);
    }
    const produtos_com_desconto = desconto_condicional(5.00,20);
    console.log('desconto condicional', produtos_com_desconto);
    