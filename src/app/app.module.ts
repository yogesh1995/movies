import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ShowMoviesComponent } from "./show-movies/show-movies.component";
import { ShowInfoDialogComponent } from "./show-info-dialog/show-info-dialog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent, ShowMoviesComponent, ShowInfoDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ShowInfoDialogComponent]
})
export class AppModule {}
