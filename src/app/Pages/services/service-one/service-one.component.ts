import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-one',
  imports: [RouterLink],
  templateUrl: './service-one.component.html',
  styleUrl: './service-one.component.css'
})
export class ServiceOneComponent {

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
