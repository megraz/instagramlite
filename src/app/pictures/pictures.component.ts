import { Component, OnInit } from '@angular/core';
import { PictureService } from '../shared/picture.service';
import { Picture } from '../shared/picture';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  fichier:FileList;
  pictures:Observable<Picture[]>
  newPic:Picture;

  constructor(private picService:PictureService) {
    this.newPic = new Picture('','', 1);
   }

  ngOnInit() {
    this.pictures = this.picService.getPicsByUser(1);
  }

  addPic() {
    //On crée un FileReader (javascript Natif) qui nous
    //aidera à transformer notre fichier en flux binaire
    let reader = new FileReader();
    //On doit lui spécifier une fonction onload qui se
    //déclenchera une fois la lecture du fichier terminée
    //on pourrait techniquement le faire en Observable
    reader.onload = (event:ProgressEvent) => {
      //On place le résultat du fileReader dans l'objet
      //Picture à envoyer au seveur
      this.newPic.link = reader.result;
      //On déclenche l'appel ajax vers le serveur
      this.picService.addPicture(this.newPic)
      .subscribe((picture) => {
        //On réinitialise nos pictures
        this.ngOnInit(); 
        this.newPic = new Picture('','', 1);
      });
    };
    //On dit au fileReader de lire le fichier sous forme
    //de DataURL (en gros le fichier est transformé en 
    //une string de caractères)
    reader.readAsDataURL(this.fichier[0]);
  }

}
