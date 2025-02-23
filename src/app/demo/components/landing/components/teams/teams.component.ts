import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  standalone: false,
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  doRightPopup = false;
  constructor(public router: Router) { }
  navToLinkedIn(key: number) {
    let link: string
    switch (key) {
      case 1:
        link = "https://www.linkedin.com/in/ravikumar-konakere-64377911/";
        break;
      case 2: 
        link = "";
        break;
      case 3: 
        link = "https://www.linkedin.com/in/sowmya-arun5982";
        break;
      case 4: 
        link = "https://www.linkedin.com/in/misha-wadhwa-sardana-080861189";
        break; 
      default:
        break;
    }
    document.location.href = link;

  }


  scrollToAnchor(location: string, wait: number): void {
    const element = document.querySelector('#' + location)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
      }, wait)
    }
  }

}