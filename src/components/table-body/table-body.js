import React from 'react'

import BodyRow from '../body-row'

const TableBody = ({items ,control}) => {
    let uniqId = 6000;
    const elements = items.map((item,idx) => {
      const { id, ...itemProps } = item;
      
      
      const propsValue = Object.values(itemProps);
      return <BodyRow key={++uniqId} 
                      items={propsValue} 
                      idx={idx} 
                      id={id} 
                      control={control}
                      dataItems={items}></BodyRow>;
    });
    return (<tbody className="tbody">{ elements }</tbody>);
  };

export default TableBody;