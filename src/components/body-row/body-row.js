import React from 'react'

const BodyRow = ({items,idx,control,id,dataItems}) => {
    let uniqId = 5000;
    let clazzName = 'tbody-ceil';
    const elements = items.map((item) => {
      item === 'Fail' ? clazzName += ' tbody-ceil_color_fail' :
      item === 'Success' ? clazzName += ' tbody-ceil_color_success' :
      item === 'Active' ? clazzName += ' tbody-ceil_color_active' : clazzName += '';
      
      return <td key={++uniqId} className={clazzName}>{item}</td>;
    });
    const cloneControl = React.Children.map(control,(child) => {
      return React.cloneElement(child, {id, dataItems})
    })
    
    const bodyRow = [<td key={idx} className="tbody-ceil">{idx+1}</td>, ...elements, cloneControl];
    
    
    return (<tr className="tbody-row">{ bodyRow }</tr>);
  };

export default BodyRow;