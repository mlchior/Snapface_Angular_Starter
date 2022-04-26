import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/face-snaps.model";
import {FaceSnapsServices} from "../services/face-snap.services";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  //injection sur service dans le constructeur pour acceder au service via la propriete faceSnapsService
  constructor(private faceSnapsServices: FaceSnapsServices) { }

  ngOnInit(): void {
    this.faceSnaps= this.faceSnapsServices.getAllFaceSnaps();
  }

}

