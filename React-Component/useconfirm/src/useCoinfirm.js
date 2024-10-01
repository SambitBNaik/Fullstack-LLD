import React ,{useRef, useState} from 'react';

const useCoinfirm = () => {
    const awiatingPromiseref=useRef(null);
    const [showDialog, setShowDialog]=useState(false);

    const[ content, setContent]=useState("Are you sure you want to delete?");

    const triggerConfirm=(content)=>{
        setShowDialog(true);
        setContent(content);
        return new Promise((resolve)=>{
            awiatingPromiseref.current=resolve;
        })
    };

    const ConfirmDialog=()=>{
        const handleCancel=()=>{
            awiatingPromiseref.current(false);
            setShowDialog(false);
        }

        const handleOk=()=>{
            awiatingPromiseref.current(true);
            setShowDialog(false);
        }

        if(!showDialog) return null;
        else
          return(
           <div className="modal">
            <div className='modal-header'></div>
            <div className='modal-body'>
                <h3>{content}</h3>
            </div>
            <div className='modal-footer'>
                <button onClick={handleOk}>Ok</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
           </div>
        )
    }
  return {triggerConfirm, ConfirmDialog}
}

export default useCoinfirm;