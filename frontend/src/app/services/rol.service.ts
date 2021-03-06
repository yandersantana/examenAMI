import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  selectedRol: Rol;
  rols: Rol[];
  
 readonly URL_API = 'http://162.212.130.145:3000/api/roles';
  //readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(public http: HttpClient) {
    this.selectedRol = new Rol();
  }

  postRol(rol: Rol) {
    return this.http.post(this.URL_API, rol);
  }

  getRols() {
    return this.http.get(this.URL_API);
  }

  putRol(rol: Rol) {
    return this.http.put(this.URL_API + `/${rol._id}`, rol);
  }

  deleteRol(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
