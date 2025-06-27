import React from 'react'
import AdHeader from '../../AdCommon/AdHeader'
import AdNavHeader from '../../AdCommon/AdNavHeader'

function FeaturesManage() {
  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Manage Features" subtitle="Features" />

      <div className="container py-5">
        <h1 className='fw-bold text-primary text-center mb-4'><u>Features Management</u></h1>
        <table class="table table-striped table-hover table-primary">
          <thead>
            <tr className='text-center'>
              <th scope="col">#id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td>
                <button className='btn btn-success'>View</button>
                <button className='btn btn-warning mx-2'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default FeaturesManage
