import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  mb: string;
  dt: string;
  cst: number;
  tech = 'Android';
  mobs = [
    'Android',
    'Samsung',
    'Apple',
    'Black Berry',
    'Eriction',
    'HTC',
    'One Plus 5'
  ];

  emVr = new Promise(
    (res, rej) => setTimeout(() => res('Taken'), 1500)
  );
  constructor() { }

ngOnInit() {
  this.dt = new Date().toString();
  this.cst = 100;
}

kindlyAddNew(mob: string) {
  this.mobs.push(mob);

}
delete(i: number)
{
 this.mobs.splice(i,1);
}

}
