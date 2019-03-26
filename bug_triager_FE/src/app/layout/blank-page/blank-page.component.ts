import { Component, OnInit, ViewChild} from '@angular/core';
declare var $;

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    @ViewChild('dataTable') table;
    dataTable: any;
    options: any;
    constructor() {}

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
