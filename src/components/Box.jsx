import React from 'react';

const Box = props => {

    const {widthAfterSubmit, colors, setColors,color,id} = props;

    const removeBox = e => {
        var arr = [];
        for(let i=0; i<colors.length;i++){
            if(i!==parseInt(e.target.id)){
                arr=arr.concat(colors[i]);
            }
        }

        setColors(arr);
      }

    return (
        <div id={id} onClick={removeBox} style={{ backgroundColor: color, width: `${widthAfterSubmit}px`, height: `${widthAfterSubmit}px`, border: "3px solid #ddd", display:"inline-block", margin:"10px" }}></div>
    );
}

export default Box;