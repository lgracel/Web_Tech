import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  public sendMessage = new EventEmitter<string>();

  constructor(http: HttpClient) {
    super(http);
  }

  getTaskLists(): Promise<ITask_List[]> {
    return this.get('http://localhost:8000/api/task_lists/', {});
  }

  getTaskListDetail(id: number): Promise<ITask_List> {
    return this.get(`http://localhost:8000/api/task_lists/${id}/`, {});
  }

  getTaskListTasks(id: number): Promise<ITask_Short[]> {
    return this.get(`http://localhost:8000/api/task_lists/${id}/tasks/`, {});
  }

  getTaskDetail(id: number): Promise<ITask_Long> {
    return this.get(`http://localhost:8000/api/tasks/${id}/`, {});
  }
}
