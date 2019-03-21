import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PhoneBook} from './phone-book.entity';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  constructor(public http: HttpClient) { }


  getContacts() {
    return new Promise((resolve, error) => {
      this.http.get("https://ntsikelelom.herokuapp.com/entries/").subscribe(data => {
        resolve(data);
      })
    })
  }

  createContact(phoneBook: PhoneBook) {
    return new Promise((resolve, error) => {
        this.http.post('https://ntsikelelom.herokuapp.com//entry/create', phoneBook, {
          headers: { 'Content-Type': 'application/json' }
        }).subscribe(response => {
            resolve(response);
          }, erro => {
            error(erro);
          }
        )
    });
  }

}
