import { Component, OnInit } from '@angular/core';
import { CartdetailsService } from '../cartdetails.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(public service:CartdetailsService) { }

  cartItems:any[]=[];
  moviesListDownload:any[]=[];

  ngOnInit(): void {
  this.moviesListDownload=this.service.moviesListDownload;
  }
   
  addToCart(movie: any)
  {
    
    this.service.addToCart(movie);
  }


  filterData(value: any) {
    this.moviesListDownload = [];
    this.moviesListDownload = this.service.filterData(value,'download');
  }
}
