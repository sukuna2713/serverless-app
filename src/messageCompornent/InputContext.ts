import { createContext, Dispatch, SetStateAction } from "react";

export const InputContext = createContext(
    {} as {
        input: InputState;
        setInput: Dispatch<SetStateAction<InputState>>;
    }
);