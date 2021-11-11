import React, { useEffect, createContext } from 'react'

const GlobalContext = createContext(undefined)

export default GlobalContext

export function GlobalProvider ({ children, ...props }) {
    useEffect(() => { }, [])

    return (
        <GlobalContext.Provider value={null}>
            {children}
        </GlobalContext.Provider>
    )
}
