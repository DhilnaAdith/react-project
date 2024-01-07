import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/restaurantAction'
import RestaurantCard from './RestaurantCard'

function Home() {
  const dispatch = useDispatch();

  const restaurantData = useSelector(state => state.restaurantReducer)

  const { restaurant } = restaurantData

  useEffect(() => {
    dispatch(listRestaurants())
  }, [])

 console.log("My data is", restaurant);

  return (
   
    <Row>
      {restaurant.map((item) => (
        <Col sm={12} md={8} lg={6} xl={3}>
         <RestaurantCard item={item} />
        </Col>
      ))}
      
    </Row>
    
    

  )}


export default Home