import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-three',
  imports: [RouterLink],
  templateUrl: './service-three.component.html',
  styleUrl: './service-three.component.css'
})
export class ServiceThreeComponent {

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
