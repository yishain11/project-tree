import { User } from './user.class';

export class Task {
  private _goal: Task;
  private _prerequisite: Task;
  private _completeBefore: Task[];
  private _completeAfter: Task[];
  private _manager: User;
  private _name: string;
  private _id: string;
  private _supervisor: User;
  private _childrenTasks: Task[];
  private _description: string;
  private _dueDate: string;
  private _attachments: string[];
  private _status:
    | 'new'
    | 'in progress'
    | 'stuck with issues'
    | 'cancled'
    | 'postponed'
    | 'completed';
  private _compeletionPercent: number;
  private _urgancy:
    | 'urgent'
    | 'important'
    | 'very important'
    | 'regular'
    | 'casual';
  private _completeConditions: string[];

  constructor(
    goal: Task,
    prerequisite: Task,
    manager: User,
    supervisor: User,
    description: string,
    dueDate: string,
    name: string,
    attachments: string[],
    compeletionPercent: number,
    urgancy: 'urgent' | 'important' | 'very important' | 'regular' | 'casual',
    completeConditions: string[]
  ) {
    this._goal = goal;
    this._attachments = attachments;
    this._childrenTasks = [];
    this._compeletionPercent = compeletionPercent;
    this._completeAfter = [];
    this._completeBefore = [];
    this._completeConditions = completeConditions;
    this._description = description;
    this._dueDate = dueDate;
    this._manager = manager;
    this._status = 'new';
    this._supervisor = supervisor;
    this._urgancy = urgancy ? urgancy : 'regular';
    this._prerequisite = prerequisite;
    this._name = name;
    this._id = this.generateId();
  }

  generateId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  get goal() {
    return this._goal;
  }

  get supervisor() {
    return this._supervisor;
  }

  get manager() {
    return this._manager;
  }

  get dueDate() {
    return this._dueDate;
  }

  get id() {
    return this._id;
  }

  reportCompelet() {
    // emit complete
    this._status = 'completed';
  }

  reportIssue() {
    // emit that there is an issue
    this._status = 'stuck with issues';
  }

  requsetPrereq() {}

  get completePercentile() {
    return this._compeletionPercent;
  }

  setStatus(
    newStatus:
      | 'new'
      | 'in progress'
      | 'stuck with issues'
      | 'cancled'
      | 'postponed'
      | 'completed',
    changer: User
  ) {
    // check if super or manager
    if (this.checkIfManagerOrSUper(changer)) {
      // then
      this._status = newStatus;
    }
  }

  checkIfManagerOrSUper(changer: User): boolean {
    return changer.id === this.manager.id || changer.id === this.supervisor.id
  }

  addSubTask(task: Task, changer:User) {``
    if (this.checkIfManagerOrSUper(changer)){
      this._childrenTasks.push(task);
    }
  }

  addCompleteConditions(completeCondition: string, changer:User) {
    if (this.checkIfManagerOrSUper(changer)){
      this._completeConditions.push(completeCondition);
    }
  }

}
