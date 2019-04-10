import { Component, OnInit, ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
    closeResult: string;
    constructor(private modalService: NgbModal) { }
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

    open(content) {
        this.modalService.open(content, {backdrop: 'static', centered: true, size: 'lg'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}
