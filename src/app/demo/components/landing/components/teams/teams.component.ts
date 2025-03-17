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
  selectedNodes: any = []
  hrsOfLearning = false;
  teamMembers = false;
  clients = false;
  projects = false;
  orgData = [
    {
      expanded: true,
      label: 'CEO',
        children: [
            {
                expanded: true,
                label: 'Advisory Team',
                children: [
                    {
                        expanded: true,
                        label: 'Head - Delivery',
                        children: [
                          {
                            expanded: true,
                            label: 'Project Management',
                            children: [
                              {
                                expanded: true,
                                label: 'Instructional Design',
                                children: [
                                  {
                                    expanded: true,
                                    label: 'Media Development',
                                    children: [
                                      {
                                        expanded: true,
                                        label: 'Technology',
                                        children: [
                                          {
                                            expanded: true,
                                            label: 'Quality',
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                    },
                    {
                        expanded: true,
                        label: 'Head - Business',
                        children: [
                          {
                            expanded: true,
                            label: 'Business Development',
                            children: [
                              {
                                expanded: true,
                                label: 'Marketing',
                                children: [
                                  {
                                    expanded: true,
                                    label: 'Sales',
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                    },
                    {
                        expanded: true,
                        label: 'Head - Finance',
                        children: [
                          {
                            expanded: true,
                            label: 'Finance',
                            children: [
                              {
                                expanded: true,
                                label: 'Accounting',
                              }
                            ]
                          }
                        ]
                    },
                    {
                        expanded: true,
                        label: 'Head - Human Resource',
                        children: [
                          {
                            expanded: true,
                            label: 'Recruitment',
                            children: [
                              {
                                expanded: true,
                                label: 'Talent Management',
                              }
                            ]
                          }
                        ]
                    }
                ]
            },
           
        ]
    }
];
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

  expandData(i) {
    if (i === 0) {
      if (this.hrsOfLearning) {
        this.hrsOfLearning = false;
      } else {
        this.hrsOfLearning = true;
      }
    } else if (i === 1) {
      if (this.teamMembers) {
        this.teamMembers = false;
      } else {
        this.teamMembers = true;
      }
    } else if (i === 2) {
      if (this.clients) {
        this.clients = false;
      } else {
        this.clients = true;
      }
    } else {
      if (this.projects) {
        this.projects = false;
      } else {
        this.projects = true;
      }
    }
  }

}