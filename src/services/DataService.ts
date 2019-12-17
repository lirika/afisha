export default class DataService {
  public readonly baseUrl: string = 'http://localhost:3000/';

  getCategory<T>(): Promise<T> {
    return fetch(this.baseUrl + 'categories/').then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  getSubCategory<T>(id: string): Promise<T> {
    return fetch(this.baseUrl + 'categories/' + id + '/subCategories').then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  getAllSubCategory<T>(): Promise<T> {
    return fetch(this.baseUrl + 'subCategories').then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  getEvents<T>(id: string): Promise<T> {
    return fetch(this.baseUrl + 'subCategories/' + id + '/events').then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  getAllEvents<T>(): Promise<T> {
    return fetch(this.baseUrl + 'events').then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }



  async sendEvents<T>(id:string, value:string):Promise<void> {
   const response = await fetch(this.baseUrl + 'subCategories/' + id + '/events',{
     method: 'POST',
     body: JSON.stringify(value),
     headers: {
       'Content-Type': 'application/json'
     }
   });
   const data =  await response.json()
    console.log(data)
  }

}
