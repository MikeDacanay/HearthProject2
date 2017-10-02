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
  validator2 = true;

  constructor(public _cards: Cards) {
  }

  ngOnInit() {
  }



  grabCard(){
  	// console.log(this._cards.CardCollection);
  	if(String(this.card).toLowerCase() in this._cards.CardCollection){
      let counter = 0;
      for(let i=0; i < this.decklist.length; i++){
        if(this.decklist[i] === this.card){
          counter+=2
        }     
      }
      if(counter<3){
        this.decklist.push(String(this.card));
        this.validator = true;
        this.validator2 = true;
      }else{
        this.validator2 = false;
      }
    }else{
      this.validator2 = true;
      this.validator = false;
    }
  }
}