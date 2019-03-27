// tslint:disable-next-line:quotemark
import { BrowserModule } from "@angular/platform-browser";
// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line:quotemark
import { HttpClientModule } from "@angular/common/http";
// tslint:disable-next-line:quotemark
import { FormsModule } from "@angular/forms";

// tslint:disable-next-line:quotemark
import { AppComponent } from "./app.component";
// tslint:disable-next-line:quotemark
import { ValueComponent } from "./value/value.component";
// tslint:disable-next-line:quotemark
import { NavComponent } from "./nav/nav.component";

@NgModule({
  declarations: [AppComponent, ValueComponent, NavComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
