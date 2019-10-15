import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  message;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private push: Push,
    private router: Router,
    public alertController: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.push.hasPermission().then((isEnabled)=>{
      //   return true;
      // })
      // to check if we have permission
      this.push.hasPermission()
        .then((res: any) => {
          if (res.isEnabled) {
            console.log('We have permission to send push notifications');
          } else {
            console.log('We do not have permission to send push notifications');
          }

        });
      const options: PushOptions = {
        android: {
          senderID: "783637155815",
          forceShow: true,
          sound: true,
          iconColor:'pink',

        },
        ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
        },
        windows: {},
        browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        }
      }

      const pushObject: PushObject = this.push.init(options);


      pushObject.on('notification').subscribe((notification: any) => {
        console.log(notification.additionalData);
        this.message = {
          landing_page: notification.additionalData.landing_page,
          price: notification.additionalData.price,
        }
        this.presentAlert();
        // if (notification.wasTapped) {
        //   console.log('Received in background');
        //   this.router.navigate([notification.additionalData.landing_page, notification.additionalData.price]);
        // } else {
        //   console.log('Received in foreground');
        //   this.router.navigate([notification.additionalData.landing_page, notification.additionalData.price]);
        // }
      });

      pushObject.on('notification').toPromise()
        .then((notification) => {
          console.log(notification);
        })
        .catch(error => console.log(error))
      // pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

      pushObject.on('registration').subscribe((registration: any) => {
        console.log('Device registered', registration);
      });

      pushObject.on('error').subscribe((error) => {
        console.error('Error with Push plugin', error)
      });

    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'FCM incoming!',
      subHeader: 'Message from PostMan',
      message: JSON.stringify(this.message),
      // message:`
      //   the price is ${JSON.stringify({
      //     landing_page: this.message.landing_page,
      //     price: this.message.price
      //   })} dollars
      // `,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.pushMessage();
          }
        }
      ]
    });
    await alert.present();
  }
  async pushMessage() {
    return await this.router.navigate([this.message.landing_page, this.message.price]);
  }

}
