import { createContext, useReducer, useEffect } from "react";
import { editorReducer, initialState, ACTIONS} from './editorReducer';

const EditorContext = createContext();

export function EditorContextProvider({ children }) {
    const [state, dispatch] = useReducer(editorReducer, initialState, () => {
        const saved = localStorage.getItem('markdown-documents');
        return saved
            ? { ...initialState, documents: JSON.parse(saved) }
            : initialState;
    });

    useEffect(() => {
        if (state.currentDocument) {
            dispatch({ type: ACTIONS.SET_TEXT, payload: state.currentDocument.content });
        }
    }, [state.currentDocument]);

    const editorContext = {
        ...state,
        handleInput: (e) => dispatch({ type: ACTIONS.SET_TEXT, payload: e.target.value}),
        openDeleteModal: () => dispatch({ type: ACTIONS.TOGGLE_DELETE_MODAL, payload: true}),
        closeDeleteModal: () => dispatch({ type: ACTIONS.TOGGLE_DELETE_MODAL, payload: false}),
        handlePreview: () => dispatch({ type: ACTIONS.TOGGLE_PREVIEW }),
        addDocument: (name) => dispatch({ type: ACTIONS.ADD_DOCUMENT, payload: name }),
        saveDocument: () => dispatch({ type: ACTIONS.SAVE_DOCUMENT }),
        deleteDocument: (id) => dispatch({ type: ACTIONS.DELETE_DOCUMENT, payload: id }),
        setCurrentDocument: (doc) => dispatch({ type: ACTIONS.SET_CURRENT_DOCUMENT, payload: doc }),
        setIsAddingDocument: (isAdding) => dispatch({ type: ACTIONS.TOGGLE_ADDING_DOCUMENT, payload: isAdding}),
        updateCurrentDocument: (id, updates) => dispatch({ type: ACTIONS.UPDATE_DOCUMENT, payload: { id, updates }})
    }
  



    return (
        <EditorContext.Provider value={editorContext}>{children}</EditorContext.Provider>
    )
}

export default EditorContext;