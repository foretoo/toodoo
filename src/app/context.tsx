import { createContext } from "preact"
import { StateUpdater, useContext, useEffect, useState } from "preact/hooks"
import { IData, JSXChildren } from "app/types"



export const Context = createContext<IData>(null!)
export let setData: StateUpdater<IData>

export const ContextProvider = (
  { children }: { children: JSXChildren }
) => {
  const [ data, _setData ] = useState<IData>(null!)
  useEffect(() => { setData = _setData }, [])
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}

export const useData = () => useContext(Context)