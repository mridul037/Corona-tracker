import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {AboutService} from '../about.service'
import { HttpClient } from '@angular/common/http';
import {Observable, onErrorResumeNext, fromEvent} from 'rxjs';
import {map, debounceTime, distinctUntilChanged, switchMap, filter, combineAll} from 'rxjs/operators';
import { concat, interval, range } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-about3',
  templateUrl: './about3.component.html',
  styleUrls: ['./about3.component.scss']
})
export class About3Component implements OnInit ,AfterViewInit{
  userName:string="skmks";
  displayedColumns: string[] = ['country', 'cases', 'deaths','recovered'];

  all$=this.aboutservices.getAll();
  @ViewChild('search') input:ElementRef;
  public data$: Observable<any>;
  public country$;
  
  url=`http://api.coronastatistics.live/countries`;
  
  constructor(public aboutservices:AboutService,public http:HttpClient) {
    aboutservices.userName.subscribe(uname=>{
      this.userName=uname;
    })
   }
  ngOnInit(): void {
    this.data$=this.http.get(this.url);
   this.country$=this.data$;
    this.data$.subscribe(
    (e)=>console.log(e),

    
    );
  }
  data:string;
  ngAfterViewInit(){
    
   const searchData$= fromEvent<any>(this.input.nativeElement,'keyup')
    .pipe(
      map(event=>event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(search=>this.getCountry(search)),
      map(e=>[e])
    )
   
// const  initialCountry$=this.getCountry().subscribe(console.log);

  this.country$=concat(this.country$,searchData$);
    
 }
  search:String;
 getCountry(search=''):Observable<any>{
    return this.http.get(`${this.url}/${search}`);
  }
 //qw dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.country$=this.data$.pipe(
      filter(e=>e.forEach(element =>element.country===filterValue)
    )
    );
  } 

 }
