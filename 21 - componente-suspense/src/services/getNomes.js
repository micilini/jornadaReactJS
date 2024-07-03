const getNomes = () => {
    return new Promise(async (resolve, reject) => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users3');
                
                if (!response.ok) {
                    throw new Error('Erro ao carregar os nomes');
                }
    
                const data = response.json();
                resolve(data);
            }catch(e){
                reject(e);
            }
    });
}

export default getNomes;