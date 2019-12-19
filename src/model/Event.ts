export default interface Event {
  title: string;
  status: string;
  id: string;
  genre: string;
  date: string;
  time: string;
  place: string;
  img: string;
  subCategoryId?: string;
  online:boolean,
  price:string,
  description:string
}
