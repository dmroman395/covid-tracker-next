import React from "react";
import ColorPickerContainer from "./colorPickerContainer";
import styles from  '../css/overlay.module.css'

function ColorPickerOverlay() {
    return(
        <div className={styles.overlay}>
            <ColorPickerContainer/>
        </div>
    )
}

export default ColorPickerOverlay