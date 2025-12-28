import { ViewEncapsulation, AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {
ngAfterViewInit(): void {
    const reloaded = sessionStorage.getItem('httrack_fixed');

    if (!reloaded) {
      sessionStorage.setItem('httrack_fixed', 'true');
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }
}
