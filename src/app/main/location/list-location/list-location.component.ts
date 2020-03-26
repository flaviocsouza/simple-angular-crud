import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/location.service'
import { Location } from '../shared/location.model'

@Component({
  selector: 'app-locations',
  templateUrl: './list-location.component.html',
  styles: []
})
export class ListLocationComponent implements OnInit {

  public locationList:Location[];
  
  constructor( private service:LocationService) { }

  ngOnInit(): void {
    this.service.ListLocations().subscribe(
      data => this.locationList = data, 
      err => console.log(err)
    );

  }

}
