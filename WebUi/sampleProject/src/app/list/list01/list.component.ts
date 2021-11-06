import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { listSearchData } from './list.data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public condition: listSearchData;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.condition = new listSearchData;
    this.condition.kenmei = '';
    this.condition.tag = '';
  }

  columnDefs: ColDef[] = [
    {headerName: '日付', field: 'date'},
    {headerName: '件名', field: 'kenmei',
      cellRenderer: function(params) {
        let keyData = params.value;
        console.log(params);
        let newLink = `<a href="http://localhost:4200/list/detail" target="_blank">${keyData}</a>`;
            return newLink;
      }},
    {headerName: '作成者', field: 'creater'},
    {headerName: 'タグ', field: 'tags'},
    {headerName: '説明', field: 'memo'}
  ];

  rowData = [
    //{date: '2021/10/10', kenmei: 'test', creater: 'test', tags: 'test'},
  ];

  public search(): void {
    this.getSearchData(this.condition);
    this.rowData = [
      {date: '2021/10/10', kenmei: 'test', creater: 'test', tags: 'test', memo: 'testtesttesttesttest'},
    ];
  }

  public getSearchData(condition: listSearchData): void {
    const url = '';
    let data = new listSearchData;
    this.http.post<listSearchData>(url, data).subscribe({
      next: data => {
        
      },
      error: error => {

      }
    })
  }

}
