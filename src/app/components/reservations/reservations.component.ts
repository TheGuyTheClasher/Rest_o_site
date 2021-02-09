import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {


  reservation_form: any;
  pattern = '/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';

  today = new Date();
  date: number;
  month: number;
  year: number;

  constructor(private fb: FormBuilder) {
    this.reservation_form = fb.group({

      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.pattern(`[0-9]`)]],
      email: ['', [Validators.required, Validators.pattern(this.pattern)]],
      date: ['', Validators.required],
      number_of_guests: ['', Validators.required],
      comments: ['']

    });

  }

  ngOnInit(): void {
    this.date = this.today.getDate();
    this.month = this.today.getMonth() + 1;
    this.year = this.today.getFullYear();

  }

  onSubmitRegestration(form_data) {
    console.log(form_data);

  }







}
