import React from 'react'
import AdHeader from '../../AdCommon/AdHeader'
import AdNavHeader from '../../AdCommon/AdNavHeader'

function FeaturesAdd() {
  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Add Features" subtitle="Features" />

      <div className='container py-5'>
        <div className="p-5 rounded" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Hxzg0plNrNoRW-myH20cwfcs5LDFRAoXJQ&s')", backgroundRepeat: "no-repeat", objectFit:"cover", backgroundSize: "100% 100%"}}>
          <h1 className="mb-4 text-center fw-bold mb-4" style={{color: "darkslateblue"}}><u>Add Your Features</u></h1>
          <form>
            <div className="row g-4">
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control" id="name" placeholder="Your title" style={{color: "darkslateblue" }} />
                  <label htmlFor="name">Your title</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="url" className="form-control" id="image" placeholder="your Images url" style={{color: "darkslateblue" }} />
                  <label htmlFor="image">your Images url</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Leave a message here Desc" id="message" style={{ height: 160, color: "darkslateblue" }} defaultValue={""} />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-light fw-bold w-100 py-3" style={{color: "darkslateblue", fontSize: "20px"}}>Add blogs</button>
              </div>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default FeaturesAdd
