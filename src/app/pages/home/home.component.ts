import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  name:string='';
  email:string='';
  id:number=0;
  posElement:number =0;
  isLoading:boolean=false;



  serviceApp:ServicesApp;
  users:typeUsers[] = []

  constructor() { 
    this.serviceApp= new ServicesApp()
    
  }

  ngOnInit(): void {
    this.getData();
  }
  

  add(name:string,email:string):void{
    if(name.length && email.length){
      this.serviceApp.addUser(name,email).then((value)=>{
        this.getData()
        this.reset()
      })
    }
  }
  update():void{
  
  }

  deleteUser():void{
 
    this.serviceApp.deleteUser(this.id).then((value)=>{
      this.users.splice(this.posElement,1);
      this.getData();
      this.reset()
    })
  }

  reset():void{
    
    this.name='';
    this.email='';
    this.id=0;
    this.posElement=0;
  
  }
  updateFromCard():void{
    // ajax.s
  }

  getInfoFromCard(user:{id:number,name:string,email:string},index:number):void{
    this.id= user.id;
    this.name=user.name;
    this.email=user.email;
    this.posElement=index
  }

  setData():void{

  }

   

  getData(){
    this.isLoading=true;
    this.serviceApp.getUsers().then((data:any)=>{
      this.isLoading=false;
      if(data.length) this.users = data
      console.log(this.users)
    })
  }
}




interface typeUsers{
  id:number,
  name:string,
  email:string
}


class  ServicesApp{

  constructor(){
      console.log("injectable service")
  }


  async getUsers(){
    return new Promise((resolve)=>{
      ajax.get("https://restuserswithng.herokuapp.com/users/").subscribe((data)=>{
        resolve(data.response)
      })
    });
  }

  async deleteUser(id:number){
    return new Promise((resolve)=>{
      ajax.delete(`https://restuserswithng.herokuapp.com/users/delete/${id}`).subscribe((data)=>{
        resolve(data.response)
      })
    });
  }


  async addUser(name:string,email:string){
    return new Promise((resolve)=>{
      ajax.post(`https://restuserswithng.herokuapp.com/users/add/${name}/${email}`).subscribe((data)=>{
        resolve(data.response)
      })
    });
  }
}