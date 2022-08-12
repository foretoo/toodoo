import { createContext } from "preact"
import { useContext, useState } from "preact/hooks"
import { IContext, IData, JSXChildren } from "./types"



export const Context = createContext<IContext>(null!)

export const ContextProvider = (
  { children }: { children: JSXChildren }
) => {
  const [ data, setData ] = useState<IData>(null!)
  return (
    <Context.Provider value={{ data, setData }}>
      {children}
    </Context.Provider>
  )
}

export const useData = () => useContext(Context)