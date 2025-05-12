import React, { useContext, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';
import EditorContext from '../../context/EditorContext';

const ConfirmDelete = () => {
  const {currentDocument, deleteDocument, closeDeleteModal, isDeleteModalOpen} = useContext(EditorContext)
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (isDeleteModalOpen) {
        modal.showModal();
    } else {
        modal.close()
    }
  }, [isDeleteModalOpen, currentDocument]);

  return createPortal (
    <dialog ref={dialog} onClose={closeDeleteModal} className={`fixed inset-0 z-10 m-auto rounded-md ${isDeleteModalOpen ? 'grid' : 'hidden'} gap-2 p-6 max-w-[343px] backdrop:bg-black/50 dark:backdrop:bg-white/50 dark:bg-Slate900`}>
        <h4 className="Heading4 text-Slate700 dark:text-white">Delete this document?</h4>
        <p className="Preview text-Slate500 dark:text-Slate400">Are you sure you want to delete the '{currentDocument?.name}' document and its contents? This action cannot be reversed</p>

        <div className='flex gap-2'>
            <button onClick={() => deleteDocument(currentDocument.id)} className='HeadingM p-2 border-2 rounded-lg dark:border-white dark:text-white '>
                Confirm & Delete
            </button>
            <button onClick={closeDeleteModal} className='HeadingM text-white flex-1 p-2 bg-Orange rounded-lg '>
                Cancel
            </button>
        </div>
    </dialog>,
    document.getElementById("modal")
  )
}

export default ConfirmDelete