import { Component, OnInit ,ViewChild } from '@angular/core';
declare var $;


@Component({
  selector: 'app-all-bugs',
  templateUrl: './all-bugs.component.html',
  styleUrls: ['./all-bugs.component.scss']
})
export class AllBugsComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  options: any;
  constructor() { }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.options = {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    };
    this.dataTable.DataTable(this.options);

  }

}
