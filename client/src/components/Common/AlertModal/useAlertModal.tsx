import React from 'react';


function useAlertModal( setOnClose: React.Dispatch<React.SetStateAction<boolean>>) {
const handleClose=()=>{
    setOnClose(false)
}

    return { handleClose}
}

export default useAlertModal;