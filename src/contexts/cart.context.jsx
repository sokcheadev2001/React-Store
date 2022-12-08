import { createContext, useState } from "react";

export const DropdownContext = createContext({
  isCartShow: false,
  setIsCartShow: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartShow, setIsCartShow] = useState(false);
  const value = { isCartShow, setIsCartShow };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
