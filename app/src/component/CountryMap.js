import React from 'react'
export const CountryMap =(props)=> {
  const singleNmbers = props.single;
   if (singleNmbers.length>0) {
    const singleRlist = singleNmbers.map((number) =>
      <li key={number.toString()}>{number.name}</li>
    );
    return (
        <ul>{singleRlist}</ul>
     )
  } else{
    return false;
  }

}
export default CountryMap;
