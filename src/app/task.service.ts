import {Task} from './task';

export class DataTaskService{
  private data: Task[] = [
    { "id": 1, "name": "Task-1", "bord_id": 1, "isEditing": false },
    { "id": 2, "name": "Task-2", "bord_id": 1, "isEditing": false },
    { "id": 3, "name": "Task-3", "bord_id": 1, "isEditing": false },
    { "id": 4, "name": "Task-4", "bord_id": 2, "isEditing": false },
    { "id": 5, "name": "Task-5", "bord_id": 3, "isEditing": false }
  ];

  getData(): Task[] {
    return this.data;
  }
  addData(id: number, name: string, bord_id: number){
    this.data.push(new Task(id, name, bord_id, false));
  }
  removeData(cart){
    let index = this.data.indexOf(cart);
    this.data.splice(index, 1);
  }
  updateDataById(name: string, id: number){
    this.data.map((listTask) => {
      return listTask.id == id ? listTask.name = name : listTask;
    });
  }
}
