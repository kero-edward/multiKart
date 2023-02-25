import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog-element',
  templateUrl: './mat-dialog-element.component.html',
  styleUrls: ['./mat-dialog-element.component.scss']
})
export class MatDialogElementComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MatDialogElementComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close(); // <- Close the mat dialog
  }

}