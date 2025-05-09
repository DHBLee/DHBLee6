export const ACTIONS = {
    SET_TEXT: 'SET_TEXT',
    TOGGLE_DELETE_MODAL: 'CONFIRM_DELETE',
    TOGGLE_PREVIEW: 'TOGGLE_PREVIEW',
    ADD_DOCUMENT: 'ADD_DOCUMENT',
    SAVE_DOCUMENT: 'SAVE_DOCUMENT',
    DELETE_DOCUMENT: 'DELETE_DOCUMENT',
    SET_CURRENT_DOCUMENT: 'SET_CURRENT_DOCUMENT',
    UPDATE_DOCUMENT: 'UPDATE_DOCUMENT',
    TOGGLE_ADDING_DOCUMENT: 'TOGGLE_ADDING_DOCUMENT',
};

export function editorReducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_TEXT:
            return {
                ...state,
                text: action.payload,
                documents: state.documents.map(doc => 
                    doc.id === state.currentDocument?.id
                    ? {...doc, content: action.payload }
                    : doc
                )
            }

        case ACTIONS.TOGGLE_DELETE_MODAL:
            return {
                ...state,
                isDeleteModalOpen: action.payload
            }
        
        case ACTIONS.TOGGLE_PREVIEW:
            return { ...state, isPreview: !state.isPreview };

        case ACTIONS.ADD_DOCUMENT: {
            const newDocument = {
                id: Date.now(),
                name: action.payload.trim(),
                content: '# New Document\n\nStart writing here...',
                createdAt: new Date().toISOString()
            };

            const updatedDocuments = [...state.documents, newDocument]

            localStorage.setItem('markdown-documents', JSON.stringify(updatedDocuments));
            return {
                ...state,
                documents: [...state.documents, newDocument],
                currentDocument: newDocument,
                text: newDocument.content,
                isAddingDocument: false
            };
        }

        case ACTIONS.SAVE_DOCUMENT: {

            if (!state.currentDocument) return state;

            const currentDoc = state.documents.find(doc => doc.id === state.currentDocument.id);
            if (currentDoc?.content === state.text) return state;

            const updatedDocument = {
                ...state.currentDocument,
                content: state.text,
                updatedAt: new Date().toISOString()
            }
            console.log(updatedDocument)

            const updatedDocuments = state.documents.map(doc => 
                doc.id === updatedDocument.id ? updatedDocument : doc
            );
            console.log(updatedDocuments)

            localStorage.setItem('markdown-documents', JSON.stringify(updatedDocuments));

            return {
                ...state,
                documents: updatedDocuments,
                currentDocument: updatedDocument
            };
        }
       
        case ACTIONS.DELETE_DOCUMENT: {
            const updatedDocuments = state.documents.filter(doc => doc.id !== action.payload);
            return {
                ...state,
                documents: updatedDocuments,
                currentDocument: state.currentDocument?.id === action.payload ? null : state.currentDocument,
                text: state.currentDocument?.id === action.payload ? '' : state.text
            };
        }
        
        case ACTIONS.SET_CURRENT_DOCUMENT:
            return {
                ...state,
                currentDocument: action.payload,
                text: action.payload?.content || ''
            };
        
        case ACTIONS.UPDATE_DOCUMENT:
            return {
                ...state,
                documents: state.documents.map(doc => 
                    doc.id === action.payload.id ? { ...doc, ...action.payload.updates } : doc
                ),
                currentDocument: state.currentDocument?.id === action.payload.id
                    ? { ...state.currentDocument, ...action.payload.updates }
                    : state.currentDocument
            }
        
        case ACTIONS.TOGGLE_ADDING_DOCUMENT:
            return { ...state, isAddingDocument: action.payload };
        
        default:

            return state;
    };
}

export const initialState = {
    text: '',
    isDeleteModalOpen: false,
    isPreview: true,
    documents: [],
    currentDocument: null,
    isAddingDocument: false
}