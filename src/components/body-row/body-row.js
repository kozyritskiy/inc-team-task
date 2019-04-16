import React from 'react'

const BodyRow = ({items,idx,control,id,dataItems}) => {
    let uniqId = 5000;
    
    const elements = items.map((item) => {
      return <td key={++uniqId} className="tbody-ceil">{item}</td>;
    });
    const cloneControl = React.Children.map(control,(child) => {
      return React.cloneElement(child, {id, dataItems})
    })
    
    const bodyRow = [<td key={idx} className="tbody-ceil">{idx+1}</td>, ...elements, cloneControl];
    
    return (<tr className="tbody-row">{ bodyRow }</tr>);
  };

export default BodyRow;