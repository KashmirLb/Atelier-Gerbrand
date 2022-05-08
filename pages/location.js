import React from 'react'
import Layout from '../components/Layout'
import LocationComponent from '../components/LocationComponent'

const location = () => {
  return (
      <Layout page="Location">
          <div className="contentContainer">
            <h1>Location</h1>
            <LocationComponent/>
          </div>
      </Layout>
  )
}

export default location