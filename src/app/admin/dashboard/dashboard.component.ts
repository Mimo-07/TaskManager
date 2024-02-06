import { Component } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  Designation!:string;
  UserName!:string;
  NoOfTeamMembers!:number;
  TotalCostOfAllProjects!:number;
  PendingTasks!:number;
  UpcomingProjects!:number;
  ProjectCost!:number;
  CurrentExpenditure!:number;
  AvailableFunds!:number;
  Clients!:string[];
  Projects!:string[];
  Years:number[] = [];
  TeamMembersSummary:any = [];
  TeamMembers:any = [];

  constructor(private dashBoardService: DashboardService){

  }

  ngOnInit()
  {
    this.Designation = "Team Leader";
    this.UserName = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.UpcomingProjects = 2;
    this.PendingTasks = 15;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.Clients = [
      "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
    ];
    this.Projects = [
      "Project A","Project B","Project C","Project D"
    ];
    this.TeamMembersSummary = this.dashBoardService.getTeamMemberSummary();
    for(var i=2019;i>=2010;i--)
    {
      this.Years.push(i);
    }
    this.TeamMembers = this.dashBoardService.getTeamMembers();
  }
}
