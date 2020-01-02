import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  items: MenuItem[];
  
 
  userName:string='ebubekir.ruzgar'

  constructor() { }
  ngOnInit() {
    
    this.items = [
      {label: 'View Profile', icon: 'pi pi-user', command: () => {
         
      }},
      {label: 'Update Password', icon: 'pi pi-lock', command: () => {
         
      }},
      {label: 'Exit', icon: 'pi pi-times'}

  ];
  }

 
}


