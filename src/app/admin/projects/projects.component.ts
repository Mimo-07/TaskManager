import { Component } from '@angular/core';
import { ProjectService } from '../../project.service';
import { Project } from '../../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects!:Project[];
  project: Project = new Project();
  editIndex!: any;
  editProject: Project = new Project();
  searchBy: string = "projectName";
  searchText:string = "";
  constructor(private projectService:ProjectService){
  }

  ngOnInit(){
    this.projectService.getAllProjects().subscribe(
      (response) => {
        this.projects = response;
      }
    );
  }

  OnSaveClick(){
    this.projectService.insertProject(this.project).subscribe({
      next: (res) => {
        this.projects.push(res);
        this.project.projectId = 0;
        this.project.projectName = null;
        this.project.dateOfStart = null;
        this.project.teamSize = 0;
      },
      error:(err) => {
        alert("error");
        console.log(err);
      }
    });
  }


  OnEditClick(event:any, index:number){
    this.editProject.projectId = this.projects[index].projectId;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  OnUpdateClick(){
    this.projectService.updateProject(this.editProject).subscribe({
      next:(res) =>{
        this.projects[this.editIndex] = res;
        this.editProject.projectId = 0;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = 0;
      },
      error:(err) => {
        console.log(err);
      } 
    }
    )
  }

  OnSearchClick()
  {
    this.projectService.searchProjects(this.searchBy,this.searchText).subscribe({
      next:(response:Project[])=>
      {
        this.projects = response;
      },
      error:(err)=>
      {
        console.log(err);
      }
    });
  }

}
