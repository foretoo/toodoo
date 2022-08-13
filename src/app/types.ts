export type JSXChildren = JSX.Element | JSX.Element[] | string | number | null

export type IFilter = "ALL" | "DONE" | "KEEN"
export type IToDo = { name: string, done: boolean }
export type IData = { id: string, filter: IFilter, todo: IToDo[] }