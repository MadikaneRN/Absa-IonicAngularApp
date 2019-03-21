import { Component } from '@angular/core';
import { PhoneBookService } from './../phone-book.service';
import { ToastController } from '@ionic/angular';
import { PhoneBook} from './../phone-book.entity';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  name: any;
  number: any;
  

  constructor(public toastController: ToastController, public phoneBookService: PhoneBookService) {

    this.name ="";
    this.number = "";
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  saveContact() {

    if(String(this.name).trim().length == 0) {
      this.presentToast('Name is required');
      return false;
    }
    else if(String(this.number).trim().length == 0) {
      this.presentToast('Phone number is required');
      return false;
    }

    let phoneBook: PhoneBook = new PhoneBook();
    phoneBook.name = this.name;
    phoneBook.phoneNumber = this.number;

    this.phoneBookService.createContact(phoneBook).then(response =>{
      console.log(response);
        this.presentToast('Phone number has been saved');
    }).catch(error => {
      this.presentToast('!oops could not save');
    })

      

  }
}
