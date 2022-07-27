import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { LogoComponent } from './logo/logo.component';
import { SocialComponent } from './social/social.component';
import { ListItemsComponent } from './list-items/list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    CardExampleComponent,
    CardLayoutComponent,
    CardFooterComponent,
    LogoComponent,
    SocialComponent,
    ListItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
