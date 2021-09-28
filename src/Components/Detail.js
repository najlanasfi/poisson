import react from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import { useParams} from 'react-router';
import { useSelector } from 'react-redux'
function Detail  () {
    const p=useSelector(state => state.poisson.poissons)

    console.log(p)
  const params=useParams();
  let m=p.find((el)=>(el.id == params.id));
  //console.log(m)
   return(
       <div>
           <Container>
               <Row>
                   <Col> <img  width="560" height="315" src={m.image}/></Col>
                   <Col>
                   <h1>{m.nom}</h1>
                   <h4>{m.description}</h4>
                   </Col>
               </Row>
           </Container>
       </div>
   )
  }  
  
  export default Detail;