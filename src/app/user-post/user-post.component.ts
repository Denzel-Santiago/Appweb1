import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';    

@Component({
  selector: 'app-user-post',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']  
})
export class UserPostComponent {
  selectedImage: string | ArrayBuffer | null = null;
  reviewText: string = '';

  constructor(private router: Router) {}

  
  onImageSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) { 
        this.selectedImage = e.target.result; 
      }
    };
    reader.readAsDataURL(file);
  }
  

  addPost() {
    if (this.reviewText.trim() && this.selectedImage) {
      const newPost = {
        image: this.selectedImage,
        reviewText: this.reviewText
      };

      let posts = JSON.parse(localStorage.getItem('posts') || '[]');
      posts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(posts));

      
      this.router.navigate(['/user']);
    } else {
      alert('Por favor, asegúrate de escribir una reseña y subir una imagen.');
    }
  }
}
