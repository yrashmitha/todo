import DateTimeFormat = Intl.DateTimeFormat;

export class Task {
  title :String;
  created_at:DateTimeFormat;
  updated_at:DateTimeFormat;
  id:number;
  completed:boolean;


  constructor(title: String, created_at: Intl.DateTimeFormat, updated_at: Intl.DateTimeFormat, id: number,completed:boolean) {
    this.title = title;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.id = id;
    this.completed=completed;
  }
}
