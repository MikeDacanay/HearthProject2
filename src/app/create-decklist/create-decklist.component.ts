import { Component, OnInit } from '@angular/core';
import { Cards } from './cardlist';

@Component({
  selector: 'app-create-decklist',
  templateUrl: './create-decklist.component.html',
  styleUrls: ['./create-decklist.component.css']
})
export class CreateDecklistComponent implements OnInit {
  
  decklist = [];

  constructor(public _cards: Cards) {
  }

  ngOnInit() {
  	this.grabCard('The Lich King');
  }



  grabCard(card){
  	// console.log(this._cards.CardCollection);
  	if(String(card) in this._cards.CardCollection){
  		console.log(card);
  	}else{
  		console.log('not here');
  	}
  }
}