import { BadInput } from './../common/validators/bad-input';
import { AppError } from './../common/validators/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from "./../services/post.service";
import { NotFoundError } from '../common/validators/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts;

  
  constructor(private service: PostService) { 
    
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts)
  }
  createPost(input: HTMLInputElement){
    let post = {title : input.value};
    this.posts.splice(0,0,post);

    input.value = "";
      
      this.service.create(post)
      .subscribe( id => {
        post['id'] = id;
      }, (error:AppError) => {
        this.posts.splice(0,1);

        if(error instanceof  BadInput){

        }
        else 
        throw error;
      })
  }

  UpdatePost(post){
    this.service.update(post)
      .subscribe( updatedPost => {
        console.log(updatedPost);
      })
  }

  DeletePost(post){
    let index = this.posts.indexOf(post);
        this.posts.splice(index,1);

     this.service.delete(post.id)
      .subscribe(null, (error:AppError) => {
        this.posts.splice(index,0, post);
        
        if(error instanceof NotFoundError){
          alert("already deleted");
        }
          else throw error;
      })
  }
}
