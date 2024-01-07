import React, { useState, useEffect } from 'react'
import { useParams ,Link } from 'react-router-dom'
import { Row, Col, Image, Card, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Reviews from './Reviews'


    function RestaurantDetails() {
     // const [data, setData] = useSelector([])
    const params = useParams()
    const data = useSelector(state => state.restaurantReducer)
    const { restaurant } = data

    //const fetchData = async () => {
     // await fetch('/restaurants.json')
     //.then((res) => res.json())
     // .then((data) => setData(data.restaurants))
      //}

     // useEffect(() => {
     //  fetchData()
      // }, [])
  
   const details = restaurant.find((i) => i.id == params.id)
   console.log(details)

  return (
   <>
   <Link className="btn btn-outline-dark my-2 rounded btn-sm" to ='/'>Back</Link>
   {details ? (
    <Row className="my-3">
      <Col md={3}>
        <Image className="img" src={details.photograph} alt={details.name} fluid />
      </Col>
      <Col md={4}>
        <ListGroup>
          <ListGroup.Item>
            <h2>{details.name}</h2>
            <p>{details.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
            <p>Cusine:{details.cuisine_type}</p>  
            </ListGroup.Item>
            <ListGroup.Item>
            <p>Address:{details.address}</p>
             </ListGroup.Item> 
            </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
              <ListGroup.Item>
                <h4>Operating Hours:</h4>
                <p>Monday:{details.operating_hours.Monday}</p>
                <p>Tuesday:{details.operating_hours.Monday}</p>
                <p>Wednesday:{details.operating_hours.Monday}</p>
                <p>Thursday:{details.operating_hours.Monday}</p>
                <p>Friday:{details.operating_hours.Monday}</p>
                <p>Saturday:{details.operating_hours.Monday}</p>
                <p>Sunday:{details.operating_hours.Monday}</p>
              </ListGroup.Item>
              </ListGroup>

              </Col>
              <Row>
                <Card className="my-3 mx-3 p-3">
                  <Reviews data = {details.reviews} />
                </Card>
              </Row>
              </Row>

      ) : 'null'}
    </>
  )
}

export default RestaurantDetails

