import { createContext } from "react";

export interface IAppContext {
    count: number;
    setCount: (count: number) => void;
    changeColor: (color: string) => void;
    getCurrentColor: () => string;
}

export const AppContext = createContext({} as IAppContext);
