import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./models/face-snaps.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];


  ngOnInit() {
    this.faceSnaps = [
      {
      title: "Face Snap",
      description: "Face Snap is a web application that allows users to take pictures of faces and save them to a database.",
      createDate: new Date(),
      snaps: 300,
      imageUrl: 'https://source.unsplash.com/user/c_v_r'
    },
     {
      title: "blah",
      description: "lorem ipsum10",
      createDate: new Date(),
      snaps: 0,
      imageUrl: 'https://source.unsplash.com/user/c_v_r'
    },
    {
      title:"blah blah",
      description:"lore ipsum12",
      createDate:new Date(),
      snaps:30  ,
      imageUrl:'https://source.unsplash.com/user/c_v_r',
      location: "paris",
    }
    ];

  }


}
