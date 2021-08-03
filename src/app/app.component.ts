import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
import { delay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router ) {

    // this.router.events
    //   // .pipe(filter( (e:Event) => e instanceof NavigationEnd  ))
    //   .pipe(
    //     filter( (e: Event ): e is RouterEvent => e instanceof NavigationEnd ),
    //     delay(1000),
    //   ).subscribe(dt => {
    //     console.log(dt);
    //     console.log('eeeeeeeeeeeeeeeeeee');
    //   });
    
  }
}
