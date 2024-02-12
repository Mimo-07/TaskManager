export class Project {
    projectId!:number;
    projectName:string | null;
    dateOfStart:string | null;
    teamSize!:number;

    constructor(){
        this.projectId = 0;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = 0;
    }
}
