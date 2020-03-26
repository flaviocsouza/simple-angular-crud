import { Routes } from '@angular/router'
import { HomeComponent } from './main/home/home.component'
import { ListUserComponent } from './main/user/list-user/list-user.component'
import { ListLocationComponent } from './main/location/list-location/list-location.component'


export const rootRouterConfig: Routes =[
    { path: '', redirectTo: '/home',  pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'list-user', component: ListUserComponent},
    { path: 'list-location', component: ListLocationComponent},
]