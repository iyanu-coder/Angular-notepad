export class Note {
  constructor(
    public id: number,
    public title: string,
    public date: string,
    public content: string,
    public category?: string
  ) {  }
}
