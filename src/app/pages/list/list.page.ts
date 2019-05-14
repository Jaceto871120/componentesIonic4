import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios: any;

  constructor( private dataService: DataService, private toastController: ToastController ) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();
  }

  async presentToast( message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }

  favorite(user) {
    // console.log('favorite', user);
    this.presentToast('Guardo en favoritos.');
    this.lista.closeSlidingItems();
  }

  share(user) {
    // console.log('share', user);
    this.presentToast('Compartio.');
    this.lista.closeSlidingItems();
  }

  borrar(user) {
    // console.log('borrar', user);
    this.presentToast('Borro el usuario.');
    this.lista.closeSlidingItems();
  }

}
