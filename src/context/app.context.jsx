import { createContext, useState } from 'react'

const initialAppContext = {
  dataHeader: false
}
export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }) => {
  const [dataHeader, setDataHeader] = useState(initialAppContext.dataHeader)

  return (
    <AppContext.Provider
      value={{
        dataHeader,
        setDataHeader
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
