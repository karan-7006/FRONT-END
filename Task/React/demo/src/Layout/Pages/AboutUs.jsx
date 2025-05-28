import React from 'react'
import Header from '../Common/Header'

function AboutUs() {
  return (
    <div>
        <Header />
      <h1>Hello, This is AboutUs page</h1>
      <div>
        <button onClick={() => window.location.href = '/AboutUs1'}>AboutUs1</button>
        <button onClick={() => window.location.href = '/AboutUs2'}>AboutUs2</button>

      {/* <a href="/AboutUs1">AboutUs1</a>
      <a href="/AboutUs2">AboutUs2</a> */}
      </div>
    </div>
  )
}

export default AboutUs
