import React from 'react'

function Reviews({ data }) {
  return (
    <div>
      {data.map((item) => (
      <div>
    <h3>{item.name} , <span>{item.date}</span></h3>
    
    <p>{item.comments}</p>
    </div>

      ))}
    </div>
  )
}

export default Reviews