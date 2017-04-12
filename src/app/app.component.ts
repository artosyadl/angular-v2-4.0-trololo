import { Component, OnInit} from '@angular/core';
import {DataService} from './bord.service';
import {DataTaskService} from './task.service';
import {Bord} from './bord';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [DataService, DataTaskService]
})

export class AppComponent implements OnInit{

  items: Bord[] = [];
  task: Task[] = [];
  editingCard: any;

  constructor(
    private dataService: DataService,
    private dataTaskService: DataTaskService,
  ){}

  listCard(id){
      return this.task.filter(function (el) {
        return el.bord_id == id
      });
  }
  addCard(name: string, id: number){
    this.dataTaskService.addData(Date.now(), name, id);
  }
  removeCard(card){
    this.dataTaskService.removeData(card);
  }
  editCard(card){
    let newCourse = Object.assign({}, card);

    card.isEditing = true;
    this.editingCard = newCourse;
  }
  updateCard(name, card){
    this.editingCard = null;

    this.dataTaskService.updateDataById(name, card.id);
    card.isEditing = false;
  }


  addItem(name: string){
    this.dataService.addData(Date.now(), name);
  }
  removeItem(item){
    this.dataService.removeData(item);
  }
  ngOnInit(){
    this.items = this.dataService.getData();
    this.task = this.dataTaskService.getData();
  }

}
