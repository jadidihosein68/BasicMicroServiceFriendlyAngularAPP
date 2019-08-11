
import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'custom-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class CustomModalComponent {
  closeResult: string;
  @Input() header: string;
  @Input() hasClose: boolean = true;
  @Input() btnlabel: string;
  constructor(private modalService: NgbModal, ) { }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public closeModal() {
    this.modalService.dismissAll();
  }

}
