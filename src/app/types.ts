export type JSXChildren = JSX.Element | JSX.Element[] | string | number | null

export type IToDo = { name: string, done: boolean }
export type IData = { id: string, todo: IToDo[] }