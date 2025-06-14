import React from "react";
import Header from "../Common/Header";
import NavHeader from "../Common/NavHeader";
import Footer from "../Common/Footer";

function Blog() {
  return (
    <div>
      <Header />
      <NavHeader title="Our Blog" subtitle="Blog" />

      {/* Blog Start */}
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Blog</h4>
            <h1 className="display-5 mb-4">Latest Blog &amp; Articles</h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="blog-item">
                <div className="blog-img">
                  <a href="#">
                    <img
                      src="img/blog-2.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </a>
                  <div className="blog-category py-2 px-4">Vacation</div>
                  <div className="blog-date">
                    <i className="fas fa-clock me-2" />
                    August 19, 2025
                  </div>
                </div>
                <div className="blog-content p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Why Children Dont Like Getting Out Of The Water
                  </a>
                  <p className="mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ullam aspernatur nam quidem porro sapiente, neque a
                    quibusdam....
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="blog-item">
                <div className="blog-img">
                  <a href="#">
                    <img
                      src="img/blog-3.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </a>
                  <div className="blog-category py-2 px-4">Insight</div>
                  <div className="blog-date">
                    <i className="fas fa-clock me-2" />
                    August 19, 2025
                  </div>
                </div>
                <div className="blog-content p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    5 Ways To Enjoy Waterland This Spring Break
                  </a>
                  <p className="mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ullam aspernatur nam quidem porro sapiente, neque a
                    quibusdam....
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="blog-item">
                <div className="blog-img">
                  <a href="#">
                    <img
                      src="img/blog-1.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </a>
                  <div className="blog-category py-2 px-4">Insight</div>
                  <div className="blog-date">
                    <i className="fas fa-clock me-2" />
                    August 19, 2025
                  </div>
                </div>
                <div className="blog-content p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    3 Tips for Your Family Spring Break at Amusement Park
                  </a>
                  <p className="mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ullam aspernatur nam quidem porro sapiente, neque a
                    quibusdam....
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}

      <Footer />
    </div>
  );
}

export default Blog;
