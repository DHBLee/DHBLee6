import { createContext, useState } from "react";

const EditorContext = createContext({
    text: '',
    handleInput: () => {},
    isPreview: true
});

export function EditorContextProvider({ children }) {
    const [text, setText] = useState('');
    const [isPreview, setPreview] = useState(true);

    function handleInput(event) {
        setText(event.target.value)
    }
    function handlePreview() {
        setPreview(prev => !prev);
    }
    const editorContext = {
        text: text,
        handleInput,
        handlePreview,
        isPreview
    };


    return (
        <EditorContext.Provider value={editorContext}>{children}</EditorContext.Provider>
    )
}

export default EditorContext;