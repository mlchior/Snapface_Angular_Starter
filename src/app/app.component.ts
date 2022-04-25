import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./models/face-snaps.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
    "Face Snap",
    "Face Snap is a web application that allows users to take pictures of faces and save them to a database.",
    new Date(),
    0,
    'https://source.unsplash.com/user/c_v_r'
    );
    this.mySnap2 = new FaceSnap(
      "blah",
      "lore ipsum10",
      new Date(),
      4,
      'https://source.unsplash.com/user/c_v_r'
    );
    this.mySnap3 = new FaceSnap(
      "blah blah",
      "lore ipsum12",
      new Date(),
      38,
      'https://source.unsplash.com/user/c_v_r'
    );
  }


}
