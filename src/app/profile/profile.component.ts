import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from '../model/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = {
    id: 0,
    name: "",
    imageUrl: "",
    description: "",
    email: "",
    cellphoneNumber: "",
    socialMedia: []
  } 

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfile().subscribe( profile => {
        console.log(profile);
        return this.profile = profile
      }
    );
  }
}
