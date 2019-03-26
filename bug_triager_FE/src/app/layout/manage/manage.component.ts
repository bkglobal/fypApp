import { Component, OnInit, ViewChild} from '@angular/core';
declare var $;

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  options: any;
  currentJustify = 'justified';

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
