import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-service-one',
  imports: [RouterLink],
  templateUrl: './service-one.component.html',
  styleUrl: './service-one.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServiceOneComponent implements AfterViewInit {

  dropdownOpen = false;

  constructor(private viewportScroller: ViewportScroller) {}

  ngAfterViewInit(): void {
      document
      .querySelectorAll('a[href="#"], a[href="#."]')
      .forEach(a => a.removeAttribute('href'));
  
    // TEMPORARY safety net — remove once JS re-init works globally
    const reloaded = sessionStorage.getItem('httrack_fixed');

    if (!reloaded) {
      sessionStorage.setItem('httrack_fixed', 'true');
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }

  scrollToService() {
    this.viewportScroller.scrollToAnchor('service');
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.dropdownOpen = !this.dropdownOpen;
  }

  scrollToTop(): void {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
