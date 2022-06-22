import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../app.component.css']
})
export class NavBarComponent implements OnInit {
  public isMenuCollapsed = true;

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let navbar = document.querySelector('.navbar') as HTMLElement;


    if (window.pageYOffset > navbar.clientHeight) {
      navbar.classList.add('navbar-inverse');



    } else {
      navbar.classList.remove('navbar-inverse');

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
