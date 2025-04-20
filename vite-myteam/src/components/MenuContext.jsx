import { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    return useContext(MenuContext);
}