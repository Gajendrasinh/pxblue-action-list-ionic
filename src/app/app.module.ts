import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { EmptyStateComponent } from './components/empty-state.component';
import { MatIconModule,  MatButtonModule} from "@angular/material/icon";

import {
  MatToolbarModule, MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, EmptyStateComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    BrowserAnimationsModule, 
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule, 
    MatListModule ,
    MatIconModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
