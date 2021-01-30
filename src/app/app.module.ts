import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CartService } from './cart.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, IonicModule.forRoot(), ],
  declarations: [ AppComponent, LoginComponent],
  bootstrap:    [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }
