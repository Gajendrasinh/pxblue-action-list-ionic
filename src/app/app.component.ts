import { Component} from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  data: any[] = [];
  item: any = "";

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public actionSheetController: ActionSheetController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    for (let i = 1; i <= 10; i++) {
      this.data.push(this.createRandomItem());
    }

  }

  createItem(index: number) {
    return { id: index, name: `Item ${index}`, details: `item ${index} details` };
  }
  createRandomItem() {
    const int: number = parseInt((Math.random() * 100) + '', 10);
    return this.createItem(int);
  }

  onOpenMenu(menu: any): void {}

  onSelected(item: any) {
    this.item = item;
  }

  isSelected(item: any) {
    return this.item === item;
  }

  onAddItem() {
    this.data.push(this.createRandomItem());
  }

  onRemoveItem(item: any) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  onRemoveAll(){
    this.data = [];
  }

  async selectAction(item:any) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Edit Details',
        icon: 'create',
        handler: () => {
          
        }
      }, {
        text: 'Remove',
        icon: 'close-circle',
        handler: () => {
          this.onRemoveItem(item)
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          
        }
      }]
    });
    await actionSheet.present();
  }
}