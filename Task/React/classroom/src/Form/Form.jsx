import React from 'react'

function Form() {
  return (
    <div>
      <form action="">
                <div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                </div> 

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="exampleFormControlInput3" placeholder="Enter Your Number" />
                </div>   

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>  

                </div>

      </form>
    </div>
  )
}

export default Form
