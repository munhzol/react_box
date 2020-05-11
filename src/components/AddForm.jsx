import React, {useState} from 'react';

const AddForm = props => {

    const {colors, setColors,widthAfterSubmit, setWidthAfterSubmit} = props;

    const [width, setWidth] = useState(100);
    const [color, setColor] = useState('');
  
    const onSubmitForm = e => {
        e.preventDefault();
        
        if(color!==''){
          setColors([...colors, color]);
          setColor('');
        }
    
        if(width !== widthAfterSubmit){
          setWidthAfterSubmit(width);
        }
    
      }

    return (
        <form onSubmit={onSubmitForm}>
          <div className="form-row align-items-center">
          <div className="col-sm-3 my-1"></div>
            <div className="col-sm-3 my-1">
              <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Color</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input type="text" value={color} onChange={ (e) => setColor(e.target.value) } className="form-control" id="inlineFormInputGroupUsername" placeholder="color"/>
                <input type="integer" value={width} onChange={ (e) => setWidth(e.target.value) } className="form-control" id="inlineFormInputGroupUsername" placeholder="Width"/>
              </div>
            </div>
            <div className="col-auto my-1">
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </div>
        </form>

    );
}

export default AddForm;