import React,{useState}  from 'react'
import {Card,Button} from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import {Link} from 'react-router-dom'
const   Item = ({itemP}) => {

    const [rating, setRating]=useState(0)
    const handleRating= (rate) => {
        setRating(rate)
    }
return (
    <Card  style={{marginTop:"2rem", width: "20%" , marginLeft: "1rem" }}>
    <Card.Img variant="top" src={itemP.imageP}/>
     <Card.Body>
     <Card.Title>{itemP.nom}</Card.Title>
     <Card.Title>{itemP.prix}</Card.Title>
     <Rating onClick={handleRating} ratingValue={itemP.rating} fillColor="#1E90FF"/>
     <Button variant="secondary" > Show Details</Button>

     </Card.Body>
     </Card>
     
)
}
export default Item