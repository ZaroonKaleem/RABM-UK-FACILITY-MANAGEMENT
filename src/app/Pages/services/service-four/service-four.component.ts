import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-four',
  imports: [RouterLink],
  templateUrl: './service-four.component.html',
  styleUrl: './service-four.component.css'
})
export class ServiceFourComponent {

    constructor(private viewportScroller: ViewportScroller) {}

    
  dropdownOpen = false;

    scrollToService() {
    this.viewportScroller.scrollToAnchor('service');
  }

toggleDropdown(event: Event) {
  event.preventDefault(); // Prevent Angular router from activating
  this.dropdownOpen = !this.dropdownOpen;
}
  scrollToTop(): void {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

}
