import { Component, OnInit, ViewChild } from "@angular/core";
import { SharedServiceService } from "../shared-service.service";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialog
} from "@angular/material";
import { ShowInfoDialogComponent } from "../show-info-dialog/show-info-dialog.component";

@Component({
  selector: "app-show-movies",
  templateUrl: "./show-movies.component.html",
  styleUrls: ["./show-movies.component.css"]
})
export class ShowMoviesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _service: SharedServiceService,
    private _dialogBox: MatDialog
  ) {}
  dataSource: any;
  displayedColumns: string[] = [
    "Title",
    "Year",
    "Released",
    "Rated",
    "Runtime",
    "BoxOffice",
    "imdbRating"
  ];
  ngOnInit() {
    this._service.getMoviesList().subscribe(
      response => {
        let data: any = response;
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getDetails(row: any) {
    console.log(row);
    const closeAction = this._dialogBox.open(ShowInfoDialogComponent, {
      width: "99%",
      height: "100vh",
      data: row
    });
  }
}
