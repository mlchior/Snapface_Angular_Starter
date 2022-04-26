import { Injectable }from '@angular/core';
import {FaceSnap} from "../models/face-snaps.model";

@Injectable({
  providedIn: 'root'
})
// pas de methode ngOnit car pas de données à récupérer
export class FaceSnapsServices {
  faceSnaps: FaceSnap[] = [
  {
    id: 1,
    title: "Face Snap",
    description: "Face Snap is a web application that allows users to take pictures of faces and save them to a database.",
    createDate: new Date(),
    snaps: 300,
    imageUrl: 'https://source.unsplash.com/user/c_v_r'
  },
  {
    id: 2,
    title: "blah",
    description: "lorem ipsum10",
    createDate: new Date(),
    snaps: 0,
    imageUrl: 'https://source.unsplash.com/random/?city,night'
  },
  {
    id: 3,
    title:"blah blah",
    description:"lore ipsum12",
    createDate:new Date(),
    snaps:30  ,
    imageUrl:'https://source.unsplash.com/random',
    location: "paris",
  }
];


  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
      if (!faceSnap) {
        throw new Error('FaceSnap not found');
      }else {
        return faceSnap;
      }


  }


  snapFaceSnapById(faceSnapId: number, snapType: string): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }


}


