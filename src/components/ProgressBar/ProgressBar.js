import * as React from 'react';
import "./ProgressBar.css"

const ProgressBar = ({ width, percent, progressColor}) => {

  const [value, setValue] = React.useState(0);
  const [color, setColor] = React.useState('green');

  React.useEffect(() => {
    setValue(percent * width);
    setColor(progressColor);
  });
  
  console.log(color);
  return (
    <div>
      <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${value}px` }} className={`progress ${color}`}/>
      </div>
    </div>
  );
};

export default ProgressBar;