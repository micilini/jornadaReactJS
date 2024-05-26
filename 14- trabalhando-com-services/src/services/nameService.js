class NameService {
    constructor() {
        this.name = 'John Doe';
    }

    getName(){
        return [...this.name];
    }

    changeName(){
        this.name = 'Stackoverflow';
    }
}

export default NameService;