import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContactInfo = [];

  constructor(private httpClient: HttpClient) { }

  dataFileUrl = environment.api_url;
  contactInfo: any;
  searchInput;
  showInfo = false;

  ngOnInit(): void {
    this.getContactinfo();
  }

  //Get Contact Information From API
  getContactinfo(){
    this.httpClient.get(this.dataFileUrl).subscribe(data =>{
      this.contactInfo = data;
      this.setInitials();
    })
  }

  //Set Initials
  setInitials(){
    this.contactInfo.forEach(element => {
      element.Initials = element.firstName.charAt(0) + element.lastName.charAt(0)
    });
  }

  //Search For Contact Using firstName or lastName or cellNumber
  search(input){
    
    let tempData = this.contactInfo;

    if(input.length){
    this.contactInfo = tempData.filter(element => element.firstName.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||
    element.lastName.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || 
    element.cellNumber.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||
    (element.firstName + element.lastName).toLocaleLowerCase().includes(input.toLocaleLowerCase().replace(/\s/g, ""))
    )

      } else
       this.getContactinfo();
}

//Select Contact
selectContact(data){
this.selectedContactInfo = [];
this.selectedContactInfo.push(data);
this.showInfo = true
}

}
