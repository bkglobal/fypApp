import { Component, EventEmitter, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-auto-search-modal',
  templateUrl: './auto-search-modal.component.html',
  styleUrls: ['./auto-search-modal.component.scss']
})
export class AutoSearchModalComponent implements OnInit {
  @Output() assigned: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectedAssigne(value) {
    console.log(value);
    this.assigned.emit('true');
  }

}
