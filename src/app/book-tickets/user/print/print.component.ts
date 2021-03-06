import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})

export class PrintComponent implements OnInit {
  createTicket;
    constructor(
      private BookingService:BookingService,
      private route:Router
    ) { }
  
    ngOnInit() {
    
      this.BookingService.cast.subscribe(
        res=>this.createTicket=res,
      )
      if(!this.createTicket){
        this.route.navigate([''])
      }
    }
  
  }
  