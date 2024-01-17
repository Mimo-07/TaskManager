import { Component } from '@angular/core';

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
    this.TeamMembersSummary = [
      {Region:"East", TeamMembersCount:20, TemporarilyUnavailableMembers:4},
      {Region:"South", TeamMembersCount:15, TemporarilyUnavailableMembers:8},
      {Region:"West", TeamMembersCount:17, TemporarilyUnavailableMembers:1},
      {Region:"North", TeamMembersCount:15, TemporarilyUnavailableMembers:6}
    ];
    for(var i=2019;i>=2010;i--)
    {
      this.Years.push(i);
    }
    this.TeamMembers = [ 
      {Region:"East", Members: [
        {Id:1,Name:"Ford",Status:"Available"},
        {Id:2,Name:"Miller",Status:"Busy"},
        {Id:3,Name:"Jones",Status:"Available"},
        {Id:4,Name:"James",Status:"Busy"}]},
      {Region:"West", Members: [
        {Id:1,Name:"Ford",Status:"Available"},
        {Id:2,Name:"Miller",Status:"Busy"},
        {Id:3,Name:"Jones",Status:"Available"},
        {Id:4,Name:"James",Status:"Busy"}]},
      {Region:"South", Members: [
        {Id:1,Name:"Ford",Status:"Available"},
        {Id:2,Name:"Miller",Status:"Busy"},
        {Id:3,Name:"Jones",Status:"Available"},
        {Id:4,Name:"James",Status:"Busy"}]},
      {Region:"North", Members: [
        {Id:1,Name:"Ford",Status:"Available"},
        {Id:2,Name:"Miller",Status:"Busy"},
        {Id:3,Name:"Jones",Status:"Available"},
        {Id:4,Name:"James",Status:"Busy"}]}
    ];
  }
}
