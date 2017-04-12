import {Bord} from './bord';

export class DataService{
  private data: Bord[] = [
    { "id": 1, "name": "Todo" },
    { "id": 2, "name": "Doing" },
    { "id": 3, "name": "Done" }
  ];

  getData(): Bord[] {
    return this.data;
  }
  addData(id: number, name: string){
    this.data.push(new Bord(id, name));
  }
  removeData(list){
    let index = this.data.indexOf(list);
    this.data.splice(index, 1);
  }
}
