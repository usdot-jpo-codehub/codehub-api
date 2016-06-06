import {inject} from 'aurelia-framework';
import {ProjectData} from "./projectData";
import {Router} from "aurelia-router";
@inject(ProjectData, Router)
export class List {
  heading = 'Projects List';

  projects = [];

  constructor(data, router) {
    this.service = data;
    this.currentPage = 0;
    this.router = router;
  };

  gotoProject(project){
    this.router.navigateToRoute('edit', { id: project.id })
  };

  new(){
    this.router.navigateToRoute('create');
  };

  getData() {
    //implement spinner

    this.currentPage++;
    return this.service.getAll()
      .then(projects => {
       this.projects = projects;

     });

  }

  activate() {
    return this.getData();
  }
}
