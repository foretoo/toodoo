import { StateUpdater } from "preact/hooks"



export type JSXChildren = JSX.Element | string | number | null


export type IData = { value: null }
export type IContext = { data: IData, setData: StateUpdater<IData> }