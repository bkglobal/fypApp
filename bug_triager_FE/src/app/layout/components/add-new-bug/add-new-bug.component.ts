import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-new-bug',
  templateUrl: './add-new-bug.component.html',
  styleUrls: ['./add-new-bug.component.scss']
})

export class AddNewBugComponent implements OnInit {
    closeResult: string;

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
    }

    open(content) {
        this.modalService.open(content, {backdrop: 'static', centered: true, size: 'lg'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    onAssigned(value) {
      console.log(value);
      this.modalService.dismissAll();
    }

    // private getDismissReason(reason: any): string {
    //     if (reason === ModalDismissReasons.ESC) {
    //         return 'by pressing ESC';
    //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //         return 'by clicking on a backdrop';
    //     } else {
    //         return  `with: ${reason}`;
    //     }
    // }
}
