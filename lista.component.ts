import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
  
})
export class ListaComponent implements OnInit {
public lista=["Invata","Fa sport","Dormi bine","Mananca sanatos"];


  constructor() { 
  
}
  ngOnInit(): void {
  }

}
