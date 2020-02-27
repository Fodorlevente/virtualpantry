import React from 'react';
import FoodTypeCard from './FoodTypeCard';

export default function FoodTypeCardContainer() {

    let types = ['tartos', 'ital', 'romlando', 'dsadsa', 'dsadsad'];

  return (
   <div>
       {types.map(function(item,i){
           return <FoodTypeCard name={item} key={i}/>
       })}
   </div>
  );
}