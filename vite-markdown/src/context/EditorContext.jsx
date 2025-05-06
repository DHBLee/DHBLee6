import { createContext } from "react";

const EditorContext = createContext({

});

export function EditorContextProvider({ children }) {
    const editorContext = {

    };


    return (
        <EditorContext.Provider value={editorContext}>{children}</EditorContext.Provider>
    )
}

export default EditorContext;