import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Snackbar.css";

const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 4000);
    },
  }));
  
  const classesNames = "snackbar pa4 dark-gray f4 "; 
  return (
    
    <div
      className={classesNames}
      id={showSnackbar ? "show" : "hide"}
      
    >
      <div className="symbol">
        <h1>&#x2613;</h1>
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
});

export default Snackbar;
