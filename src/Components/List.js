import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

const List = (searchCondition,selectRating) => {
const p=useSelector(state => state.poisson.poissons)
console.log(p);
return (
    <div>
       {p
       .filter
       (el=>el.nom
        )
       .map(itemP=>(
           <Item itemP={itemP} />
       ))} 
    </div>
)
}
export default List