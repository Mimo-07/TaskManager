import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../Models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private httpClient: HttpClient){

  }

  getAllProjects():Observable<Project[]>{
    return this.httpClient.get<Project[]>("/api/taskmanager/projects",{responseType:'json'}).pipe(map((data) => {
      for(let i=0;i<data.length;i++)
      {
        data[i].teamSize *= 100;
      }
      return data;
    }));
  }

  insertProject(newProject: Project):Observable<Project>{
    return this.httpClient.post<Project>("/api/taskmanager/addproject", newProject);
  }

  updateProject(exisitingProject: Project):Observable<Project>{
    return this.httpClient.put<Project>("/api/taskmanager/updateproject", exisitingProject);
  }

  searchProjects(searchBy:string, searchText:string) : Observable<Project[]>{
    return this.httpClient.get<Project[]>("/api/taskmanager/searchProject/"+searchBy+"/"+searchText, {responseType: "json"});
  }
}
