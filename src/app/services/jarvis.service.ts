import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarvisService {
  // private baseUrl = 'http://192.167.1.48/backend/eshop/public/api';
  private baseUrl = 'http://127.0.0.1:8000/api';
  // private baseUrl = 'http://localhost:8080/eshop/public/api';
  list: any
  constructor(
    private http:HttpClient
  ) { }


  login(data)
  {
    return this.http.post(`${this.baseUrl}/login`,data)
  }

  //*********************************start of Transactions***********************************//
  allTransactions()
  {
    return this.http.get(`${this.baseUrl}/transactions`)
  }
// *********************************end of Transactions***********************************//



  //*********************************start of Purchases***********************************//

  allPurchases()
  {
    return this.http.get(`${this.baseUrl}/purchase`)
  }

// *********************************end of Purchases***********************************//



  //*********************************start of Product***********************************//

  allProducts()
  {
    return this.http.get(`${this.baseUrl}/product`)
  }

  addProduct(data)
  {
    return this.http.post(`${this.baseUrl}/product`,data);
  }

  updateProduct(product)
  {
    return this.http.put(`${this.baseUrl}/product/${product.id}`,product)
  }

  deleteProduct(id)
  {
    return this.http.delete(`${this.baseUrl}/product/${id}`)
  }
// *********************************end of Product***********************************//

  allStock(){
    return this.http.get(`${this.baseUrl}/allTransactions`)
  }

  //*********************************start of Requisitions***********************************//

  allRequisitions()
  {
    return this.http.get(`${this.baseUrl}/requisitions`)
  }

  addRequisition(data)
  {
    return this.http.post(`${this.baseUrl}/requisitions`,data);
  }

  updateRequisition(requisition)
  {
    return this.http.put(`${this.baseUrl}/requisitions/${requisition.id}`,requisition)
  }

  deleteRequisition(id)
  {
    return this.http.delete(`${this.baseUrl}/requisitions/${id}`)
  }
  allDepartments()
  {
    return this.http.get(`${this.baseUrl}/departments`)
  }

  allBranches()
  {
    return this.http.get(`${this.baseUrl}/branches`)
  }
  allCategories()
  {
    return this.http.get(`${this.baseUrl}/cats`)
  }

  section(data)
  {
    return this.http.post(`${this.baseUrl}/section`,data);
  }

  awaiting(data){
    return this.http.post(`${this.baseUrl}/awaiting`,data);
  }

// *********************************end of Requisitions***********************************//


//---------------------users start-------------------------//
  allUsers()
  {
    return this.http.get(`${this.baseUrl}/users`)
  }

  allRoles()
  {
    return this.http.get(`${this.baseUrl}/allRoles`)
  }

  updateRoles(roles)
  {
    return this.http.post(`${this.baseUrl}/editRoles`,roles);
  }

//---------------------users end---------------------------//

  refreshpendingRequisition(){
    this.allRequisitions()
      .toPromise()
      .then(res=>this.list = res as string [])
  }
  getWaiting(){
    return this.http.get(`${this.baseUrl}/waiting`)
  }

  getDetails(params){
    return this.http.post(`${this.baseUrl}/detailing`,params);
  }

  approveReqs(data){
    return this.http.post(`${this.baseUrl}/approvals`,data);
  }

  getWarehouse(){
    return this.http.get(`${this.baseUrl}/warehouse`)
  }

  approveWarehouse(data){
    return this.http.post(`${this.baseUrl}/warehouseApproving`,data);
  }

  dashboardReport(data)
  {
    return this.http.post(`${this.baseUrl}/departmental`,data);
  }

  master(data){
    return this.http.post(`${this.baseUrl}/master`,data);
  }

}
