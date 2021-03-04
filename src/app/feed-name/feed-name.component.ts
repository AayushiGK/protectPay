import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-feed-name',
  templateUrl: './feed-name.component.html',
  styleUrls: ['./feed-name.component.css']
})
export class FeedNameComponent implements OnInit {
  public userForm: FormGroup;
  public displayData;
  constructor(private fb: FormBuilder, private apiService: ApiServiceService, private route: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])]
    })
  }

  getDetails(name) {
    this.apiService.getDetails(name, data => {
      this.displayData = data;
    }, err => {
      console.log(err.stack);
    })
  }

  searchAction(formValue) {
    this.getDetails(formValue.username);
  }

}
