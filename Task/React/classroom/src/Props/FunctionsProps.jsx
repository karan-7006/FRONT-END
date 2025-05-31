import React from 'react'

function FunctionsProps({ img, title, description }) {
  return (
    <div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="#" className="btn btn-primary">
              Explore This!!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FunctionsProps
