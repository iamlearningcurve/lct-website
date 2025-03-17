import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @Output() submitOutput = new EventEmitter();
  @Output() submitOutput2 = new EventEmitter();
  selectedState: any = null;
  step = 0;
  hero1 = "background-image: url('assets/demo/images/landing/hero-3.jpg')";
  hero2 = "background-image: url('assets/demo/images/landing/pic1.png'); background-position: center";
  hero3 = "background-image: url('assets/demo/images/landing/pic2.png'); background-position: center";
  img_home = 'assets/demo/images/landing/2-p.png';
  point = 2;
  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];
  items = [{ label: 'Briefing', icon: 'pi pi-user'}, { label: 'Analysis' , icon: 'pi pi-bolt'}, { label: 'Design' , icon: 'pi pi-palette'}, { label: 'Development' , icon: 'pi pi-desktop'}, { label: 'Review', icon: 'pi pi-file-o'}, { label: 'Delivery', icon: 'pi pi-briefcase' }];
  dropdownItems = [
      { name: 'Option 1', code: 'Option 1' },
      { name: 'Option 2', code: 'Option 2' },
      { name: 'Option 3', code: 'Option 3' }
  ];
  products = [
    {name: 'Create End to End', name2: 'Learning Solutions', company: 'Peak Interactive', content: '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'},
    {name: 'Adapting Seamlessly', name2: 'To your Process and Systems', company: 'Peak Interactive', content: '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'},
    {name: 'Provide Solutions', name2: 'For your Unique Training', company: 'Peak Interactive', content: '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'},
    {name: 'Ensuring', name2: 'Competitive Pricing for all your needs', company: 'Peak Interactive', content: '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'}
];
subscriptions: any;
scrollAction = true;
  constructor(public router: Router) { }
 
  ngOnInit(): void {
    this.subscriptions = setInterval(() => {
      if (this.scrollAction) {
        this.step = this.step + 1;
        if (this.step >= 3) {
          this.step = 0
        }
        this.showSlides()
      }
    }, 4000)
         
  } 

  showSlides() {
    let i;
    let dots = document.getElementsByClassName("dot");
   
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[this.step].className += " active";
  }

  stopScroll() {
    this.scrollAction = false;
  }

  resumeScroll() {
    this.scrollAction = true;
  }

  plusSlides(n) {
    this.step = this.step + n;
    if (this.step >= 3) {
      this.step = 0
    }
    if (this.step < 0) {
      this.step = 3
    }
    this.showSlides();
  }

  ngOnDestroy () {
    clearInterval(this.subscriptions)
  }

  changePicture(n: number) {
    this.point = n;
    this.img_home = "assets/demo/images/landing/" + n + '-p.png'
  }

  navToPortfolio() {
    this.submitOutput2.emit()
  }
}
