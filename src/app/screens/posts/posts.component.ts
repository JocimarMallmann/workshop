import { Component, OnInit } from '@angular/core';
import { IButton } from 'src/app/shared/button/button.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  button1: IButton = {
    labelButton: 'Botão 1',
    buttonIconRight: 'home',
    color: 'primary'
  }
  button2: IButton = {
    labelButton: 'Botão 2',
    buttonIconLeft: 'home',
    color: 'secondary'
  }

  constructor() { }

  ngOnInit(): void {
  }

  btn(event: any) {
    alert('oi ' + event)
  }

}
