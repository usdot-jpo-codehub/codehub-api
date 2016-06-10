import {inject} from 'aurelia-framework';
import {Router} from "aurelia-router";
import {SearchProjectData} from "./searchProjectData";
import {bindable} from 'aurelia-framework';

@inject(SearchProjectData, Router)
export class Result {
  heading = 'Projects List';

  constructor(searchProjectData) {
		this.searchProjectData = searchProjectData;
		this.searchProjectData.getAll().then(projects=> {
			this.projects = projects;
		});
	}

	activate(params, routeConfig, navigationInstruction) {
		//this.router = navigationInstruction.router;
    //this.searchProjectData.getAll(this.job).then(job=> this.router.navigateToRoute('jobs'));
	}

	// save() {
	// 	if (this.job.needDate) {
	// 	this.job.needDate = new Date(this.job.needDate);
	// 	}
	// 	this.dataRepository.addJob(this.job).then(job=> this.router.navigateToRoute('jobs'));
	// }
}

  //proj = ["nteter", "rtetrtre","dfdfsd675"]
  // constructor(searchProject, router) {
  //   this.searchProject = searchProject;
  //   this.currentPage = 0;
  //   this.router = router;
  // };
  //
  // gotoProject(project){
  //   this.router.navigateToRoute('edit', { id: project.id })
  // };
  //
  // new(){
  //   this.router.navigateToRoute('create');
  // };
  //
  // getData() {
  //   this.currentPage++;
  //   return this.searchProject.getData();
  // }
  //
  // activate() {
  //   alert("Yeeeee");
  //   console.log(this.searchProject.getData());
  //   return this.searchProject.projects;
  //
  // }
