import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  lastname: string;
  firstname: string;
  age: number;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {lastname: "Huber", firstname: "Franz", age: 32, address: "Rosengarten 12"},
  {lastname: "Müller", firstname: "Jonas", age: 21, address: "Schulstraße 3"},
  {lastname: "Schmidt", firstname: "Lukas", age: 45, address: "Ziegeleistraße 5"},
  {lastname: "Fischer", firstname: "Julian", age: 51, address: "Bäckergasse 22"},
  {lastname: "Wagner", firstname: "Thomas", age: 75, address: "Wintersberg 17"},
];

@Component({
  selector: 'app-person-grid',
  templateUrl: './person-grid.component.html',
  styleUrls: ['./person-grid.component.scss']
})
export class PersonGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  displayedColumns: string[] = ['lastname', 'firstname', 'age', 'address'];
  dataSource = ELEMENT_DATA;
}
