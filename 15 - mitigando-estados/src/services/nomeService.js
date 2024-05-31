class NomeService {
    constructor() {
        console.log('nomeService sendo chamado...');
        this.data = {
            name: '...',
            age: 0
        }
    }

    getData(){
        return this.data;
    }

    changeName(){
        this.data.name = 'Micilini Roll';
    }

    changeAge(){
        const random = Math.floor(Math.random() * (109 - 1) ) + 1;
        this.data.age = random;
    }
}

export default NomeService;