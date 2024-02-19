import { ReactNode, createContext } from "react";
import { usePropertiesProvider } from "hooks/useProperties";

// initializing some states for our context
const initialState = {
  properties: [],
  updateProperties: (data: any) => {},
  selectedProperty : {},
  modifySelectedProperty : (data: any) => {}
};

// Creating a post context to avoid prop Drilling
export const PropertiesContext = createContext(initialState);

// Creating a PostProvider component which will provide the context to it's child
export const PropertiesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const data = usePropertiesProvider();

  return (
    <PropertiesContext.Provider value={data as any}>{children}</PropertiesContext.Provider>
  );
};
