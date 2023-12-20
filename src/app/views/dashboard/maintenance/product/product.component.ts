import { Component } from '@angular/core';
import { DatatableComponent } from '../../../../components/datatable/datatable.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ DatatableComponent ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  datatable = {
    headers:['Nombre', 'Detalle', 'Precio', 'Cantidad', 'Estado'],
    data: [
      {id:1, name: 'Nombre del producto', price: 10.00, amount: 15, status: true },
      {id:1, name: 'Nombre del producto', price: 10.00, amount: 15, status: true },
      {id:1, name: 'Nombre del producto', price: 10.00, amount: 15, status: true },
      {id:1, name: 'Nombre del producto', price: 10.00, amount: 15, status: true },
    ]
  }

  constructor(){}

  ngOnInit(){

  }

}
