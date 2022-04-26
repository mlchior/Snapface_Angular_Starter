import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snaps.model";
import {FaceSnapsServices} from '../services/face-snap.services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

  export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap

    constructor(private faceSnapsServices: FaceSnapsServices) {

    }



    title!: string;
    description!: string;
    //date au format francais (ex: 12/12/2019)
    createDate!:Date;
    snaps!: number;
    imgIsSnap!: boolean;
    imageUrl!: string;
    buttomText!: string;

    ngOnInit() {

      this.buttomText = 'Oh Snap!';
      this.imgIsSnap = false;
    }
    onClickSnap() {
      if (this.imgIsSnap === false) {
        this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.buttomText = 'U SNAP!';
        this.imgIsSnap = true;
      }else {
        this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.buttomText = 'Oh Snap!';
        this.imgIsSnap = false;
      }
    }




}
