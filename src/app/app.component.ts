import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  local_time={
    time:null,
    pst:false,
    mst:false,
    cst:false,
    est:false,
  };
  changetime(timezone){
    if(timezone == "PST"){
      var new_time = new Date();
      this.local_time.time = new_time;
      this.local_time.pst = true;
      this.local_time.mst = false;
      this.local_time.cst = false;
      this.local_time.est = false;

    }else if(timezone == "MST"){
      var new_time = new Date();
      this.local_time.time = new_time.setHours(new_time.getHours()+1);
      this.local_time.pst = false;
      this.local_time.mst = true;
      this.local_time.cst = false;
      this.local_time.est = false;

    }else if(timezone == "CST"){
      var new_time = new Date();
      this.local_time.time = new_time.setHours(new_time.getHours()+2);
      this.local_time.pst = false;
      this.local_time.mst = false;
      this.local_time.cst = true;
      this.local_time.est = false;
      
    }else if(timezone == "EST"){
      var new_time = new Date();
      this.local_time.time = new_time.setHours(new_time.getHours()+3);
      this.local_time.pst = false;
      this.local_time.mst = false;
      this.local_time.cst = false;
      this.local_time.est = true;
      
    }else{
      this.local_time.time = null;
      this.local_time.pst = false;
      this.local_time.mst = false;
      this.local_time.cst = false;
      this.local_time.est = false;
    }
  }
  switchbtns = ["ON","OFF","ON","OFF","ON","OFF","ON","OFF","ON","OFF"];
  switch_pressed(index){
    if (this.switchbtns[index] == "ON" ){
      this.switchbtns[index] = "OFF";
    }else{
      this.switchbtns[index] = "ON";
    }
  }

  user = {
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    confirm_pw:"",
    street_address:"",
    apt:"",
    city:"",
    state:"",
    lucky:""

  };
  users =[];
  submitstatus = false;
  onSubmit(){
    this.submitstatus = true;
    this.users.push(this.user);
    this.user = { 
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      confirm_pw:"",
      street_address:"",
      apt:"",
      city:"",
      state:"",
      lucky:""
    };
  }
}
