class ItensService {
    constructor() {
    this.list = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' }
    ];
    }
   
    getList(){
    return [...this.list];
    }
   
    addNewItem(){
    const newList = [...this.list, { title: `Item ${this.list.length + 1}` }];
    this.list = newList;
    }
}
   
export default ItensService;