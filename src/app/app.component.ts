import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title: string = 'Lista Studenti Migliori';
  // students: string[] = ['de pippis', 'pluto', 'paperina', 'minnie', 'paperone', 'topolino', 'gastone'];

  students2: any[] = [
    {
      name: 'pippo',
      grade: 10
    },
    {
      name: 'pluto',
      grade: 6
    },
    {
      name: 'paperina',
      grade: 7
    },
    {
      name: 'minnie',
      grade: 4
    },
    {
      name: 'paperone',
      grade: 3
    }
  ]

  constructor() {

  }

  ngOnInit() {
    // const container  = document.getElementById('app-container');
    // const h1 = document.createElement('h1');
    // const node = document.createTextNode(this.title);

    // h1.appendChild(node);
    // container?.appendChild(h1);

    // const ul = document.createElement('ul');

    // for (const item of this.students) {
    //   const li = document.createElement('li');
    //   const node = document.createTextNode(item);
    //   li.appendChild(node);
    //   ul.appendChild(li);
    // }
    // container?.appendChild(ul);
  }

}
