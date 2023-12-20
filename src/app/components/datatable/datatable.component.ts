import { Component, Input } from '@angular/core';
import { DataTable } from "./models/data-table";
import { ObjToArrayPipe } from "../../utils/pipes/obj-to-array.pipe";

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [ObjToArrayPipe],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent {
  @Input() dataTable: DataTable = {
    headers: [],
    data: []
  };

  ngOnInit(){
  }
}
