import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = '/api/repositories';

@inject(HttpClient)
export class SearchProjectData {

  constructor(httpClient) {
    this.http = httpClient;
  }

  getById(id) {
    return this.http.get(`${baseUrl}/${id}`)
      .then(response => {
        return response.content;
      });
  }

  getPage(pageNumber) {
    return this.http.createRequest(baseUrl)
      .asGet()
      .withParams({'page': pageNumber})
      .send()
      .then(response => {
        return response.content;
      });
  }

  getAll() {
    return this.http.get(baseUrl)
      .then(response => {
        return response.content;
      });
  }
  searchAllByName(searchText) {
    //let adjusted_url = '/api/repositories' + '?filter={"where": {"name": {"inq": [' + '"'+searchText +'"'+ ']}}}';
    //console.log(adjusted_url);
    return this.http.get(baseUrl)
      .then(response => {
        return response.content;
      });
  }

  save(project) {
    var request = this.http.createRequest();
    if (project.id) {
      request.asPut()
        .withUrl(`${baseUrl}/${project.id}`)
        //TODO check if withHeader still necessary
        .withHeader("Accept", "application/json")
        .withHeader("Content-Type", "application/json")
        .withContent(project);
    }
    else {
      request.asPost()
        .withUrl(baseUrl)
        //TODO check if withHeader still necessary
        .withHeader("Accept", "application/json")
        .withHeader("Content-Type", "application/json")
        .withContent(project);
    }
    ;

    return request.send().then(response => response.content);
  }

}
