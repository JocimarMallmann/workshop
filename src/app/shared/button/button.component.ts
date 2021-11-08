import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IButton } from './button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() button: IButton = {};
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickEvent() {
    this.onClick.emit();
  }

}
