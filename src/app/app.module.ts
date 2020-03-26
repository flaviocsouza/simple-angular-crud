
import { NgModule } from '@angular/core';

//Imports
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { HttpClientModule } from '@angular/common/http'

//My Components
import { AppComponent } from './app.component';
import { MenuComponent } from './nav/menu/menu.component';
import { FooterComponent } from './nav/footer/footer.component';
import { ListUserComponent } from './main/user/list-user/list-user.component'
import { ListLocationComponent } from './main/location/list-location/list-location.component'
import { HomeComponent } from './main/home/home.component';

//Providers
import { APP_BASE_HREF } from '@angular/common';
import { UserService } from './main/user/shared/user.service';
import { LocationService } from './main/location/shared/location.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ListUserComponent,
    ListLocationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [
    UserService,
    LocationService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
