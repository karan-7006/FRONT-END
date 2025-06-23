import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import NavHeader from "../Common/NavHeader";
import Footer from "../Common/Footer";
import axios from "axios";

function Feature() {

  const [Features, setFeatures] = useState([])

  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Features");
    console.log(res.data);
    setFeatures(res.data);
  }

  return (
    <div>
      <Header />
      <NavHeader title="Our Features" subtitle="Feature" />

      {/* Feature Start */}
      <div className="container-fluid feature py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Features</h4>
            <h1 className="display-5 mb-4">
              Explore Waterland Park Best Features
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div className="row g-4">
            {
              Features && Features.map((data) => {
                console.log(data);
                return (
                  <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="feature-item">
                      <img
                        src={data.img}
                        className="img-fluid rounded w-100"
                        alt="Image"
                      />
                      <div className="feature-content p-4">
                        <div className="feature-content-inner">
                          <h4 className="text-white">{data.title}</h4>
                          <p className="text-white">
                            {data.description}
                          </p>
                          <a
                            href="#"
                            className="btn btn-primary rounded-pill py-2 px-4"
                          >
                            Read More <i className="fa fa-arrow-right ms-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* Feature End */}

      <Footer />
    </div>
  );
}

export default Feature;
