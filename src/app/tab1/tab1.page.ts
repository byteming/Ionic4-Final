import { Component } from '@angular/core';
import {RedditService} from '../../app/services/serveces.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private redditService : RedditService){
    
  }

ngOnInit(){
  this.getPosts('sports',5);
}

getPosts(category, limit){
  this.redditService.getPosts(category,limit).subsribe(response =>{
    console.log(response);
  });
}
  
}
