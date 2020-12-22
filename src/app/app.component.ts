import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
   constructor() {
     this.sourceList = [];
     let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

     window.fetch(satellitesUrl).then(function(response){
       response.json().then(function(data) {

        let fetchedSatellites = data.satellites;
        for (let i = 0; i < fetchedSatellites.length; i++) {
          let satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational)
          this.sourceList.push(satellite);
        }
        //todo loop over satellites n shit

       }.bind(this));
     }.bind(this));
    //     new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
    //     new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
    //     new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
    //     new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
    //     new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
    // ];
 }
} 

