import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  canSave = true;
  isSpecial = true;
  isUnchanged = true;

  isActive = true;
  nullCustomer = null;
  currentCustomer = {
    name: 'Laura'
  };

  item: Item // defined to demonstrate template context precedence 
  items: Item[];

  currnetItem: Item;


  //  trackBy change couthing 
  itemsNoTrackByCount  = 0;
  itemsWithTrackBycount = 0;
  itemsWithTrackBycountReset = 0;
  itemIdIncrement = 1;

  currentClasses: {};

  currentStyles: {}

  ngOnInit() {
    this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.itemsNoTrackByCount() = 0;
  }

  setUppercaseName(name: string) {
    this.currnetItem.name = name.toUpperCase();
  }

  setCurrentClasses() {
    // CSS 클래스는 컴포넌트 프로퍼티  가에 따라 추가 되거나 제거됨
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial
    };
  }

  setCurrentStyles() {
    // CSS 스타일은 컴폰넌트 프로퍼티 값에 따라 지정됩니다.
    this.currentStyles = {
      'font-style': this.canSave    ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',    
      'font-size': this.isSpecial      ? '24px' : '12px'
    };
  }

  isActiveToggle() {
    this.isActive = !this.isActive;
  }