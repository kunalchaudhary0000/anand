import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/user/models/register';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  register : Register = new Register();
  error: any = {};
  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
  }
  registerSubmit(){console.log('hello from kunal')
  console.log(JSON.stringify(this.register))
 
  this.authService.register(this.register).subscribe((res) => {console.log(JSON.stringify(res));
    this.router.navigate(['/user/login']);
    
  }, 
  (err) => {
    this.error = err.error;
    console.log(err);
    
  }
  );
    
}
}


