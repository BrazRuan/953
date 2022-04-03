const fakeAPI = () => new Promise((resolve, reject) =>{
	setTimeout(() =>{
		resolve('resposta para requisição');
	},3000);
})

fakeAPI();

