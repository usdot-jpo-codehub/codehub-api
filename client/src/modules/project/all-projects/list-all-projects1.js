import {inject} from 'aurelia-framework';
import {ProjectAllStaticData} from "./projectAllStaticData";
import {Router} from "aurelia-router";
@inject(ProjectAllStaticData, Router)
export class ListAllProjects {
  heading = 'Projects List';

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
