import {post} from './post.model';
import {EventEmitter, OnInit} from '@angular/core';
import { HttpClient }    from '@angular/common/http';
export class postService  {

    //PostArrayChange = new EventEmitter < post[] > ();


    ngOnInit(){

        
     

    }
    
    

    // that var should give Post.Component the option to subscribe on change in
    // Post[contain all post], for example new post that added in addPost.Component
    // **Not working yet!**
    

    // Array with all post
   
    
     private Post : post[] = [
        new post('Dana Levi', 'https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg', 'https://www.santorini-view.com/files/temp/b4d8b971556c05aca1de90a15b6583b4.jpg', 'dd', 'dd', 1, '1'),
        new post('Avi Mizrahi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiR4Nm9WBQER6g9fXFm8hfrmnhfxhZTymAAnwqtbFT_w04n3QRw',
        'https://a.travel-assets.com/findyours-php/viewfinder/images/res60/168000/168055-Mexico-City.jpg',
        'g', 'h', 5, '1'),
        new post('Sivan Cohen', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1Awoj9EJMFEIRo0EAs6GnR4X' +
                'sulbgefvh6XFVckdPA43yarwUw',
        'https://www.airpano.ru/files/Cancun-Mexico/images/image2.jpg', 'dd', 'dd', 1, '1'),
        new post('Omer Sharon', 'https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754', '', 'hhhhh', 'ggggg', 4, '')
    ];

   
    //function that get new post and pushed him into Array of post!
    addpost(NewPost : post)
    {

    
        this
            .Post
            .push(NewPost);

        // after pushing new post to Array, PostArrayChange should keep the update
        // Array!   this.PostArrayChange .emit(this.Post.slice());
    }

    // simple function that return the current Array of post!
    getPost()
    {
        return this
            .Post
            .slice();
    }

}