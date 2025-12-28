import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-two',
  imports: [RouterLink],
  templateUrl: './service-two.component.html',
  styleUrl: './service-two.component.css'
})
export class ServiceTwoComponent {

    constructor(private viewportScroller: ViewportScroller) {}

    
    scrollToService() {
    this.viewportScroller.scrollToAnchor('service');
  }

  dropdownOpen = false;

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
