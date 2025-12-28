import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class NoReuseStrategy implements RouteReuseStrategy {
  shouldDetach(): boolean {
    return false;
  }

  shouldAttach(): boolean {
    return false;
  }

  retrieve(): DetachedRouteHandle | null {
    return null;
  }

  store(): void {}

  shouldReuseRoute(): boolean {
    return false;
  }
}
