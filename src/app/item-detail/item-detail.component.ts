import { Component, Input } from '@angular/core'; //input 심볼을 로드합니다.

import { Item } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent {


  @Input() item: Item;
  
  constructor() { }//프로퍼티에 @Input() 데코레이터를 지정합니다.
}