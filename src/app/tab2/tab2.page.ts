import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  currentMsg: string = ''
  constructor(public photoService: PhotoService) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  inputMsg(event: any){
    console.log(event.target.value)
    this.currentMsg = event.target.value.replace('\\n','') as string
    
    if(event.key == 'Enter' && this.currentMsg != ''){
      this.addNewMsg()
    }
    
  }

  addNewMsg(){
    this.photoService.addNewMsg(this.currentMsg);
    this.currentMsg = ''
  }
}
