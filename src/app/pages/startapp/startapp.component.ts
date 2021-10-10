import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startapp',
  templateUrl: './startapp.component.html',
  styleUrls: ['./startapp.component.css']
})
export class StartappComponent implements OnInit {

  constructor(navigate:Router) {
    navigate.navigate(["/home"])
   }

  ngOnInit(): void {
    
  }

}
