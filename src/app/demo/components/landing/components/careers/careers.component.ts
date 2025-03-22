import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: false,
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})

export class CareersComponent {
  desc1 = `We are looking for SMEs for our gaming project on Unity and Unreal both. Interested candidates should be willing to give content regarding various topics related to Unity for which we will be creating a book and additional learning material. The candidates should have: \n
  Minimum experience of 1-2 years with good domain knowledge in Unity and Unreal, publishing games on apps, AR VR on Unreal, Multiplayer Games on Unreal, corss-platform game development. \n
  Familiarity with both basic and advanced topics of Unity and Unreal. \n
  Good written English skills. \n
  Availability on all working days, not just weekends. \n
  The following software tools installed on laptops/desktops:
  \t 1. Unity 2022.3.30f1
  \t 2. Unity Editor
  \t 3. Unity Profiler
  \t 4. Debugging and Profiling tools
  \t 5. Visual Studio 2022
  \t 6. GIT version control system
  \t 7. Unreal Game Engine
  \t 8. NVIDIA GeForce GTX 470 or AMD Radeon HD 6870 or equivalent DX11 GPU
  \t 8. Graphics API: DirectX 11, DirectX 12 (Windows only), or Vulkan \n 
  If interested, please respond with your resume and screenshots of the specified Unity version, Unreal GUI, and VS 2022. \n`
  qual1 = `\u2022 Master’s Degree in a related field – Science, CS, Biometric Systems\n
  \u2022 10 years of related experience\n
  \u2022 Has Biometric Processing domain and expert technical knowledge. `
  benefits1 = `\u2022 Flexible Work Hours \n
  \u2022 Part Time \n
  \u2022 Work From Home`;

  desc2 = `We are looking for freelance Instructional Designers (IDs) with proficient, practical knowledge of creating and managing Levels 1-3 e-learning courses. While content analysis and storyboarding are the primary requirements, experience in using an authoring tool to create SCORM-compliant output would be preferrable. The candidate should: \n
  \u2022 Have strong analytical, logical, visualization, and content mapping skills. \n
  \u2022 Have at least 3-4 years of experience as an ID. \n
  \u2022 Have strong knowledge of ID principles and models. \n
  \u2022 Be willing to contribute to e-learning projects related to any computer technical and non-technical domain. \n
  \u2022 Be able to contribute 3-4 hours during the daytime on each working day. \n
  \u2022 Be proficient in English and MS Office. \n
  \u2022 Be able to coordinate / communicate with the team from time to time. \n
  \u2022 Be able to manage a team, if required. \n
  \u2022 Be able to use AI, if required. \n
  \u2022 Be willing to work from home as a freelancer. \n`
  email!: FormControl;
  firstName!: FormControl;
  lastName!: FormControl;
  position!: FormControl;
  phoneNumber!: FormControl;
  // file!: FormControl;
  applyForm!: FormGroup;
  category: any;
  categoryList = [
    {name: 'Management', value: 'Management'},
    {name: 'Marketing', value: 'Marketing'},
    {name: 'Technical Review', value: 'Tech Review'},
    {name: 'Subject Matter Expert', value: 'Subject Matter Expert'},
    {name: 'Non-Tech Review', value: 'Non-Tech Review'},
    {name: 'Senior Manager', value: 'Senior Manager'},
    {name: 'Other', value: 'Other'},
  ];
  type: any;
  typeList = [
    {name: 'Full Time', value: true},
    {name: 'Part Time', value: false},
  ];
  count = 0;
  testimonial = [
    {name: 'Juhi Srivastava', rating: 5, content: `Great place to work!
    Always encouraging and supportive team members.
    Happy, friendly and professional working environment.
    Lot of learning opportunities and wide scope of handling diverse projects.`},
    {name: 'Archana Bharadwaj', rating: 5, content: 'Great and very supportive team to work with. Happy to be a part of LCT👍'},
    {name: 'Ayush Gupta', rating: 5, content: 'Friendly environment, Good to work'}
];
  products: any = [
    {
     position: 'SME - Unreal Gaming',
     posted: '8th Mar, 2025',
     description: this.desc1,
     fullTime: false,
     workFromHome: true,
     qualification: '\t-',
     benefits: this.benefits1,
     collapse: false
    },
    // {
    //   position: 'Instructional Designer (ID)',
    //   posted: '8th Mar, 2025',
    //   description: this.desc2,
    //   fullTime: true,
    //   workFromHome: true,
    //   qualification: '\t-',
    //   benefits: this.benefits1,
    //   collapse: false
    //  }
    
  ];
  visible = false;
  visiblePosition = false;
  currentItem: any;
  uploadedFiles: any[] = [];
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {

    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.phoneNumber = new FormControl('', [Validators.required]);
    this.position = new FormControl('', [Validators.required]);
    // this.file = new FormControl('', [])
    this.applyForm = new FormGroup({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      position: this.position,
      // file: this.file
    });
  }
  

  filterByCategory(dv: any) {
    dv.filter(this.category, 'contains')
  }

  clearFilter(dv: any) {
    dv.filter('');
    this.category = null;
  }

  changeTestimonialForward() {
    if (this.count === 2) {
      this.count = 0;
    } else {
      this.count +=1
    }    
  }

  changeTestimonialReverse() {
    if (this.count === 0) {
      this.count = 2;
    } else {
      this.count -=1;
    }
  }

  setPosition(position: string) {
    this.applyForm.controls['position'].setValue(position);
    this.visible = true
  }

  clearForm() {
    this.applyForm.reset();
  }

  submitForm() {
    console.log(this.applyForm)
  }

  constructEmail(item: any) {
    let mailToLink = "mailto:''?subject=Job Description - " + encodeURIComponent(item.position) + "body=Check Out the careers page in Learning Curve Technologies at www.learningcurvetechnologies.com for more information.";
    window.location.href = mailToLink;
  }

  scrollToAnchor(location: string, wait: number): void {
    const element = document.querySelector('#' + location)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
      }, wait)
    }
  }

  copyLink(item: any) {
    let customText = 'Position: ' + item.position + ' Description: ' + item.description;
    navigator.clipboard.writeText(customText);
  } 
}
