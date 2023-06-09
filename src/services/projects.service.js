import axios from 'axios';

export default class ProjectsService {
  constructor() {
    // this.API_URL = `${import.meta.env.VITE_API_URL}/projects`;
    this.API_URL = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/projects`,
    });
    this.API_URL.interceptors.request.use(
      (config) => {
        const storedToken = localStorage.getItem('authToken');

        if (storedToken) {
          config.headers = { Authorization: `Bearer ${storedToken}` };
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  getProjects() {
    // return axios.get(`${this.API_URL}`);
    return this.API_URL.get('/');
  }

  getOneProject(projId) {
    // return axios.get(`${this.API_URL}/${projId}`);
    return this.API_URL.get(`/${projId}`);
  }

  addProject(project) {
    return this.API_URL.post(`/`, project);
    // return axios.post(`${this.API_URL}`, project);
  }

  editProject(projId, project) {
    return this.API_URL.put(`/${projId}`, project);
    // return axios.put(`${this.API_URL}/${projId}`, project);
  }

  deleteProject(projId) {
    return this.API_URL.delete(`/${projId}`);
    // return axios.delete(`${this.API_URL}/${projId}`);
  }

  uploadFile(file) {
    return this.API_URL.post(`/upload`, file);
    // return axios.post(`${this.API_URL}/upload`, file);
  }
}
