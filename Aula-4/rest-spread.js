const Aluno = {
    nome: 'Pedro Sales',
    idade: 19,
    periodo: 7
    }
    
    //Rest
    const {nome, ... resto} = Aluno;
    console.log(nome);
    console.log(resto);
    
    //Spread
    const aluno = {...Aluno, periodo: "setimo", turno: "noite"};
    console.log(aluno_);