import {inject} from 'aurelia-framework';
import {ProjectAllStaticData} from "./projectAllStaticData";
import {Router} from "aurelia-router";

@inject(ProjectAllStaticData, Router)
export class ListAllProjects {
  //projects = [];
  constructor(data, router) {
    this.service = data;
    this.currentPage = 0;
    this.router = router;
    this.projects = [];
    this.projects2 = [];
    this.numberOfProjects = 10;
    this.isSelected = false;
    this.isVisible = true;
    this.viewStrategy = 'div';

  };

  gotoProject(project){
    this.router.navigateToRoute('edit', { id: project.id })
  };

  new(){
    this.router.navigateToRoute('create');
  };

  setViewStrategy(strategy){
    this.viewStrategy = strategy;
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }
  //
  // click(){
  //   console.log('click');
  // }

  setIsSelected(){
    this.isSelected = true;
  }
  getData() {
    //this.currentPage++;
  return this.service.getAll()
      .then(projectsList => {
       this.projectsList = projectsList;
       //console.log(this.projects);
     });

  }

  createProject(index){
    //this.getData();
    var proj = this.projectsList[index];
    console.log(proj);
    return proj;
  }

  activate(){
    //this.getData();
    console.log(this.projectsList);
    this.service.getAll()
        .then(projectsList => {
         this.projectsList = projectsList;
         for (var i = 0; i < this.numberOfProjects; ++i) {
           this.projects.push(this.createProject(i));
         }

         for (var i = 0; i < this.numberOfProjects; ++i) {
           this.projects2.push(this.createProject());
         }
       });

       return this.projects;
  }

  swap(){
    this.projects = this.projects2;
  }

  addProjects(count){
    for (var i = 0; i < count; ++i) {
      this.projects.push(this.createProject(i));
    }
    this.numberOfProjects = this.projects.length;
  }

  addProjects2(){
    var proj = this.createProject();
    this.projects.splice(1, 0, proj);
  }

  addProjetFirst(){
    this.projects.unshift(this.createProject());
  }

  removeProjects(count){
    this.projects.splice(0, count);
  }

  unshift5(){
    this.projects.unshift(this.createProject(),this.createProject(),this.createProject(),this.createProject(),this.createProject());
  }

  addProjectLast(){
    this.projects.push(this.createProject());
  }

  removeLast() {
    this.projects.pop();
  }
}
