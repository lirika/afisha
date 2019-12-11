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

  getEvents<T>(): Promise<T> {
    return fetch(this.baseUrl + 'events').then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}
