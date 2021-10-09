import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
 file:File;
 selectFile(eventObj){
   this.file=eventObj.target.files[0]
 }

  userObj;

 
  onSubmit(ref){
          this.userObj=ref.value;

          //create form object
        let   formData=new FormData();

        //append file to form data
        formData.append('photo',this.file,this.file.name)

        //append userObj
        

        formData.append('userObj',JSON.stringify(this.userObj))


  
}

}
