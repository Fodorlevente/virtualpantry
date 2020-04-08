import React, { useState, useEffect } from 'react';
import FoodTypeCard from './FoodTypeCard';
import _ from 'lodash';

export default function FoodTypeCardContainer() {
    const [types, setTypes] = useState([])

    useEffect(() => {
        fetchTypesFromAPI()
      }, [])

    function fetchTypesFromAPI(){
        fetch('/api/getcountoftypes')
        .then(response => response.json())
        .then(data => {
            setTypes(data);
        })
        .catch(error => {
            console.log(error)
        })
    }


  return (
   <div>
        {_.isEmpty(types) ?
        <p>There is no food types</p>
        :
        types.map((row) => {
            return(
                <div>
                    <FoodTypeCard name={row.name} piece={row.piece}/>
                </div>
            )
        })
        }
   </div>
  );
}