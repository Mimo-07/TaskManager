import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMemberSummary(): any[]{
   return [
    {Region:"East", TeamMembersCount:20, TemporarilyUnavailableMembers:4},
    {Region:"South", TeamMembersCount:15, TemporarilyUnavailableMembers:8},
    {Region:"West", TeamMembersCount:17, TemporarilyUnavailableMembers:1},
    {Region:"North", TeamMembersCount:15, TemporarilyUnavailableMembers:6}
  ];
  }

  getTeamMembers(): any[]{
    return [ 
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

