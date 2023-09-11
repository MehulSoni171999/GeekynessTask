import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductData from './ProductData'



const Home = () => {

const [data, setdata] = useState(ProductData);
const [search, setsearch] = useState('');

const filterResult=(value)=>{
    const  result =ProductData.filter((data)=>{
        return data.category===value;
    });
    setdata(result);
}
const filterColor=(value)=>{
    const  result =ProductData.filter((data)=>{
        return data.color===value;
    });
    setdata(result);
}

console.log(search)

  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
     <Container>
            <Navbar.Brand className='cartname mx-5 ' style={{fontFamily:"fantasy",fontSize:"25px" ,display:"flex" }}  href="#">FashionCart <div className="imglogo mx-3 " ><img  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div> </Navbar.Brand>
       <Form.Control
             type="search"
             placeholder="Search"
             className="me-2 "
             aria-label="Search" 
             onChange={(e)=>setsearch(e.target.value)}
             style={{width:"40vw"}}
           /> 
     </Container>
       
            </Navbar>

    <div className="container" style={{width:"80vw" ,height:"20vh", backgroundColor:"#dadada" ,display:"flex", flexDirection:"column"}}>

    <div className="col-md-3" style={{ width:"100%" ,height:"15vh",backgroundColor:'#dadada'}}>
        <h5 className='text mt-2 mx-3'>categories</h5>
<button className='btn btn-dark  mt-3 mx-2' onClick={()=>filterResult("men")}>mens</button>
<button className='btn btn-dark mt-3 mx-2 ' onClick={()=>filterResult("woman")}>womens</button>
<button className='btn btn-dark mt-3 mx-2 ' onClick={()=>filterResult("kids")}>kids</button>
<button className='btn btn-dark mt-3 mx-2 ' onClick={()=>filterColor("black")}>black</button>
<button className='btn btn-dark mt-3 mx-2 ' onClick={()=>filterColor("Blue")}>blue</button>
<button className='btn btn-dark mt-3 mx-2 ' onClick={()=>filterColor("White")}>white</button>

</div>

    </div>
    <div className="container" style={{width:"80vw" , backgroundColor:"pink" ,display:"flex"}} >
    <div className="productcard mt-2 mb-3"  style={{display:"flex" , flexWrap:"wrap"  }}>
    {
        data.filter((item)=>{
            return search.toLowerCase()==='' ? item : item.name.toLowerCase().includes(search)
        }).map((item)=>{
            return (
                    <div className="cards mx-3  mt-3" key={item.id}>
        <Card style={{ width: '16rem' }}>
        <Card.Img className='imgbox' variant="top" src={item.image} />
     <Card.Body>
       <Card.Title>{item.name}</Card.Title>
       <Card.Text>
         {item.description}
       </Card.Text>
       <p>Brand: {item.brand}$</p>
       <p>color: {item.color}</p>
       <p>price:{item.price}$</p>
       <button className='btn btn-dark'>buy now</button>
     </Card.Body>
   </Card>
    </div>
            )
        })
    }


</div>
    </div>
   </>
  )
}

export default Home