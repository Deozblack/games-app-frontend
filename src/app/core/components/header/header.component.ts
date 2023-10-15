import { Component } from '@angular/core';
import { Navbar } from '../../interfaces/navbar.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public state:boolean = false;
  public links!:Navbar[];

  ngOnInit(): void {
    this.links = [
      {
        path: 'products',
        name: 'Productos'
      },
      {
        path: 'history',
        name: 'Historial'
      }
    ]
  }

  toggleButton(){
    this.state = !this.state;
  }
}
