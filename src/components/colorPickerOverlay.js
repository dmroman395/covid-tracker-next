import React, { useEffect } from "react";
import ColorPickerContainer from "./colorPickerContainer";
import styles from  '../css/overlay.module.css'

function ColorPickerOverlay() {
    let isVisible
    useEffect(() => {
        isVisible = true
    },[])
    return(
        <div className={isVisible ? styles.overlay : `${styles.overlay} ${styles.visible}`} id='overlay'>
            <ColorPickerContainer/>
        </div>
    )
}

export default ColorPickerOverlay