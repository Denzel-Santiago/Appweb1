import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { format } from 'path';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
 export class AdminComponent implements OnInit {
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
      
      alert('Funcionalidad de comentar en construcción');
    }
  
    ratePost(index: number) {
      
      alert('Funcionalidad de calificar en construcción');
    }
  
  
    goToAddPost() {
      this.router.navigate(['/add-post']);  
    }
  
    goToLogin() {
      this.router.navigate(['/login']);
    }
  }

