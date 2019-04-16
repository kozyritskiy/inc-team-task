import React from 'react'

const capitalize = (str) => str && str[0].toUpperCase() + str.slice(1);

const HeadRow = ({items, control}) => {
    const isAdmin = true;
    if(items.length === 0){
      return <tr>
        <th>Table is EMPTY</th>
      </tr>;
    }
    const {id, ...itemProps } = items[0];
    const propsName = Object.keys(itemProps);
    const elements = propsName.map((propName) => {
      return <th key={propName} className="thead-ceil">{capitalize(propName)}</th>;
    });
    let headRow;
    if (isAdmin && control && typeof(control.type) === 'symbol') {
        headRow = [<th key={id} className="thead-ceil">#</th>, 
                    ...elements,
                    <th key={'control-ceil'} className="thead-ceil">Control</th>,
                    <th key={'control-admin-ceil'} className="thead-ceil">Admin</th>];
    } else {
        !control ? 
            headRow = [<th key={id} className="thead-ceil">#</th>, ...elements] :
            headRow = [<th key={id} className="thead-ceil">#</th>, 
                        ...elements,
                        <th key={'control-ceil'} className="thead-ceil">Control</th>];
    }
    return (<tr className="thead-row">{ headRow }</tr>);
  };

  export default HeadRow;