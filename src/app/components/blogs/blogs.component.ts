import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Blogs } from './blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, AfterViewInit {

  constructor(private _changeDetectorRef: ChangeDetectorRef, public data: DataService) { }

  obs!: Observable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<Blogs> = new MatTableDataSource<Blogs>(this.data.blogs);


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this._changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.obs = this.dataSource.connect();
  }

  blogTrackBy(index: number, blog: Blogs) {
    return blog.id;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cutString(string: string) {
    return string.substring(0, 50) + '...';
  }

  ngOnDestroy() {
    this.dataSource.disconnect();
  }

}