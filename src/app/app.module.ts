import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyADE7gnBXHkiHSEMDhvcwQ-FYaNEA3we_I",
      authDomain: "movie-98a82.firebaseapp.com",
      projectId: "movie-98a82",
      storageBucket: "movie-98a82.appspot.com",
      messagingSenderId: "527203366096",
      appId: "1:527203366096:web:1602d6c8505143e65cdad5"
    }),
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
