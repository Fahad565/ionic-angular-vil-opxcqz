import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}

  presentOrder() {
    let alert = this.alertCtrl.create({
      head: "Order Summary",
      subTitle: ""
    });
  }
}
