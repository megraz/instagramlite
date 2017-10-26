import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { User } from './shared/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentUser:Observable<User>;

  constructor(private auth:AuthService){}

  title = 'app';

  ngOnInit(): void {
    /**
     * Côté component, on peut récupérer ou se subscribe
     * sur le flux de user et la valeur sera donc mise à
     * jour en temps réel à chaque changement d'état du
     * user (par exemple si un autre component déclenche
     * le login ou le logout, ce component sera mis à 
     * jour)
     */
    this.currentUser = this.auth.user
    
  }
}
