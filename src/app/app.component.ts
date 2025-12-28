import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Common/header/header.component";
import { FooterComponent } from "./Common/footer/footer.component";
import { ContactComponent } from "./Pages/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RabmPortfolio';

   constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.reInitHttrackScripts();
      }
    });
  }

  reInitHttrackScripts(): void {
    setTimeout(() => {
      // If jQuery is used
      if ((window as any).$) {
        (window as any).$(document).trigger('ready');
      }

      // If a global init function exists
      if ((window as any).initTemplate) {
        (window as any).initTemplate();
      }
    }, 50);
  }
}
