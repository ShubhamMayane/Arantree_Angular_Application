import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './commonComponents/navbar/navbar.component';
import { FooterComponent } from './commonComponents/footer/footer.component';
import { HomeModule } from './home/home.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { ServicesModule } from './services/services.module';
import { BannerComponent } from './commonComponents/banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutusModule,
    ServicesModule,
    ReactiveFormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
