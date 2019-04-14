export interface ITask_List {
    id: number,
    name: string
}

export interface ITask_Short {
    id: number,
    name: string,
    status: string
}

export interface ITask_Long {
    id: number,
    name: string,
    created_at: string,
    due_on: string,
    status: string
}
