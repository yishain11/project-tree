export class User {
  private _id: UserId;
  private teams: UserId[];
  private _name: string;

  constructor(name: string, teams: UserId[]){
    this._name = name;
    this.teams = teams;
    this._id = this.generateId();
  }

  generateId(): UserId {
    return {id: '_' + Math.random().toString(36).substr(2, 9)};
  }

  get id(){
    return this._id;
  }

  get name(){
    return this._name;
  }

}

export interface UserId{
  id: string;
}
