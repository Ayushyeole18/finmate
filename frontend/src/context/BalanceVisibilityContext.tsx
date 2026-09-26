import { createContext, useContext, useState, type ReactNode } from "react";

type BalanceVisibilityContextType = {
  hidden: boolean;
  toggle: () => void;
};

const BalanceVisibilityContext = createContext<BalanceVisibilityContextType | undefined>(
  undefined
);

export function BalanceVisibilityProvider({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);

  const toggle = () => setHidden((prev) => !prev);

  return (
    <BalanceVisibilityContext.Provider value={{ hidden, toggle }}>
      {children}
    </BalanceVisibilityContext.Provider>
  );
}

export function useBalanceVisibility() {
  const context = useContext(BalanceVisibilityContext);
  if (!context) {
    throw new Error(
      "useBalanceVisibility must be used within a BalanceVisibilityProvider"
    );
  }
  return context;
}