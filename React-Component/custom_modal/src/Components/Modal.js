import React,{useEffect} from 'react'

const Modal = ({showModal,content,handleCloseModal}) => {
    const closeModal=()=>{
        handleCloseModal();
    }

    const keydownHandler=({key})=>{
        if(key==='Escape'){
            handleCloseModal();
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown", keydownHandler);
        return ()=> document.removeEventListener("keydown",keydownHandler);
    },[]);
  if(!showModal) return null;
  else{
    return(
        <div className='modal-backdrop' onClick={closeModal} role='dialog'>
            <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='close-icon' onClick={closeModal} aria-label="Close Modal">
                        X
                    </span>
                </div>
                <div className='modal-body'>
                    <div>{content}</div>
                </div>
                <div className='modal-footer'>
                    <button onClick={closeModal}>Ok</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    )
  }
}

export default Modal