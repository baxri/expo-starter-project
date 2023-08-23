import React, { useState } from 'react';

const toothyContext = React.createContext({
  dentistList: {},
  setDentistList: (dentistList: any) => {},
});

export default function ToothyContextProvider({ children }: any) {
  const [dentistList, setDentistList] = useState({
    isFilterOpen: false,
  });

  return (
    <toothyContext.Provider
      value={{
        dentistList,
        setDentistList,
      }}
    >
      {children}
    </toothyContext.Provider>
  );
}

export const useToothyContext = () => React.useContext(toothyContext);
