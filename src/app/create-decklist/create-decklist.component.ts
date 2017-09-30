import { Component, OnInit } from '@angular/core';
import { Cards } from './cardlist';

@Component({
  selector: 'app-create-decklist',
  templateUrl: './create-decklist.component.html',
  styleUrls: ['./create-decklist.component.css']
})
export class CreateDecklistComponent implements OnInit {
  
  decklist = [];
  
  card = '';

  validator = true;

  constructor(public _cards: Cards) {
  }

  ngOnInit() {
  }



  grabCard(){
  	// console.log(this._cards.CardCollection);
  	if(String(this.card).toLowerCase() in this._cards.CardCollection){
  		this.decklist.push(String(this.card));
      this.validator = true;
  	}else{
  		this.validator = false;
  	}
  }
}