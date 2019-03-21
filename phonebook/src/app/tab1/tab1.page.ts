import { Component } from '@angular/core';
import { PhoneBookService } from './../phone-book.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  numbers: any;
 public searchkey :string;
  data : any;

  constructor(public phoneBookService: PhoneBookService) {
    this.searchkey = "";
  }
  
  ionViewDidEnter() {

    this.phoneBookService.getContacts().then(responseData => {
      this.data = responseData;
      this.numbers = this.data;
    })

  }

  search(event)
  {
    var filteredArtists = [];

    this.searchkey = event.target.value;
    
    for(var k in this.data) {

      if(String(this.searchkey).trim().length == 0) 
        continue;

       if(this.data[k]['name'].toString().toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1) {
         filteredArtists.push(this.data[k]);
       }
    }

    if(filteredArtists.length > 0) {
      this.numbers = filteredArtists;
    }
    
    if(String(this.searchkey).trim().length == 0 || String(this.searchkey) == ""){
      this.ionViewDidEnter();

    }
 

  }


}
