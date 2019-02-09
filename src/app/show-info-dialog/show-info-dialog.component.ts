import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-show-info-dialog",
  templateUrl: "./show-info-dialog.component.html",
  styleUrls: ["./show-info-dialog.component.css"]
})
export class ShowInfoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ShowInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  keys: any;
  ngOnInit() {
    this.keys = Object.keys(this.data);
    console.log(this.keys);
  }

  public onCloseClick(): void {
    this.dialogRef.close();
  }
}
