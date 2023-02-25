import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-compare-mat-dialog-element',
  templateUrl: './compare-mat-dialog-element.component.html',
  styleUrls: ['./compare-mat-dialog-element.component.scss']
})
export class CompareMatDialogElementComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CompareMatDialogElementComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}