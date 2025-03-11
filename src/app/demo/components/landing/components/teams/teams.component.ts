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
  // orgData: any[] = [
  //   {
  //       label: 'CEO',
  //       expanded: true,
  //       data: {
  //         image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
  //         name: 'Amy Elsner',
  //         title: 'CEO'
  //       },
  //       children: [
  //           {
  //               label: 'Advisory Team',
  //               expanded: true,
  //               children: [
  //                   {
  //                       label: 'Head - Delivery',
  //                       expanded: true,
  //                       children: [
  //                         {
  //                             label: 'Project Management',
  //                             expanded: true,
  //                             children: [
  //                               {
  //                                 label: 'Instructional Design',
  //                                 expanded: true,
  //                                 children: [
  //                                   {
  //                                     label: 'Media Development',
  //                                     expanded: true,
  //                                     children: [
  //                                       {
  //                                         label: 'Technology',
  //                                         expanded: true,
  //                                         children: [
  //                                           {
  //                                             label: 'Quality',
  //                                             expanded: true,
  //                                           }
  //                                         ]
  //                                       }
  //                                     ]    
  //                                   }
  //                                 ]
  //                               }
  //                             ]
  //                         }
  //                       ]
  //                   },
  //                   {
  //                       label: 'Head - Business',
  //                       expanded: true,
  //                       children: [
  //                         {
  //                             label: 'Business Development',
  //                             expanded: true,
  //                             children: [
  //                               {
  //                                 label: 'Marketing',
  //                                 expanded: true,
  //                                 children: [
  //                                   {
  //                                     label: 'Sales',
  //                                     expanded: true,
  //                                   }
  //                                 ]
  //                               }
  //                             ]
  //                         }
  //                       ]
  //                   },
  //                   {
  //                     label: 'Head - Finance',
  //                     expanded: true,
  //                     children: [
  //                       {
  //                           label: 'Finance',
  //                           expanded: true,
  //                           children: [
  //                             {
  //                               label: 'Marketing',
  //                               expanded: true
  //                             }
  //                           ]
  //                       }
  //                     ]
  //                 },
  //                 {
  //                   label: 'Head - Human Resource',
  //                   expanded: true,
  //                   children: [
  //                     {
  //                         label: 'Recruitment',
  //                         expanded: true,
  //                         children: [
  //                           {
  //                             label: 'Project Management',
  //                             expanded: true
  //                           }
  //                         ]
  //                     }
  //                   ]
  //               },
  //               ]
  //           }
  //       ]
  //   }
  // ];
  orgData = [
    {
        expanded: true,
        type: 'person',
        data: {
            image: 'assets/demo/images/avatar/ravi.png',
            name: 'Ravi Kumar Konakere',
            title: 'CEO'
        },
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

}