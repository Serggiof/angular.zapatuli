import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public registro: boolean;
  constructor(){
    this.registro= false
  }
  
  ngOnInit(){
      
  }
  setRegistro(){
    this.registro= true
  }
  finSesion(){
    this.registro= false
  }
  
}


