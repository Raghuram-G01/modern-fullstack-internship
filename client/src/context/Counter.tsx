import { createContext } from "react";
import { useState } from "react";

export const CounterContext = createContext<any>(null);

// ContextProvider  - wrapper or container to connect all components
// and the context
export const CounterProvider = ({children}:any) => {
    const [count, setCount] = useState(0);

    return (
    <CounterContext.Provider value={{count, setCount}}>
        {children}
    </CounterContext.Provider>
    )
}