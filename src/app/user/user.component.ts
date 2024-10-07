import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';    

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  posts: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.posts = JSON.parse(localStorage.getItem('posts') || '[]');
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  editPost(index: number) {
    const newReview = prompt("Edita tu reseña:", this.posts[index].reviewText);
    if (newReview !== null) {
      this.posts[index].reviewText = newReview;
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
  }

  commentPost(index: number) {
    const comment = prompt('Escribe tu comentario:');
    
    if (comment !== null) {
      if (!this.posts[index].comments) {
        this.posts[index].comments = []; 
      }
      this.posts[index].comments.push(comment);
      localStorage.setItem('posts', JSON.stringify(this.posts)); 
    }
  }

  ratePost(index: number) {
    const rating = prompt('Califica esta publicación de 1 a 5:');
    
    if (rating !== null) {
      const ratingValue = parseInt(rating, 10);
      
      if (ratingValue >= 1 && ratingValue <= 5) {
        this.posts[index].rating = ratingValue; 
        localStorage.setItem('posts', JSON.stringify(this.posts)); 
      } else {
        alert('Por favor, ingresa una calificación válida (1-5).');
      }
    }
  }

  goToAddPost() {
    this.router.navigate(['/add-post']);  
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
