import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-valorant',
  templateUrl: './api-valorant.page.html',
  styleUrls: ['./api-valorant.page.scss'],
})
export class ApiValorantPage implements OnInit {

  agentData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchAgentData();
  }

  fetchAgentData() {
    this.http.get('https://valorant-api.com/v1/agents').subscribe((response: any) => {
      console.log(response);
      this.agentData = this.transformData(response.data);
    });
  }

  transformData(data: any[]): any[] {
    return data.filter(agent => agent.isPlayableCharacter);
  }
}