import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Home() {
  return (
    <div>
      <Header />

      {/* Slider Starts */}
      <div className="mt-1 mb-1">
        <div className="d-flex align-items-center justify-content-center bg-warning shadow-sm p-4 gap-4">
          <div className="display-1" role="img" aria-label="Noodle Bowl">
            🍜
          </div>
          <div className="text-center">
            <h1 className="display-3 fw-bold text-danger mb-1">
              Noodle<span className="text-dark">-Nation</span>
            </h1>
            <p className="lead fw-bold text-danger mb-0">
              The <span className="text-dark fw-semibold">Nation</span> of{" "}
              <span className="text-dark fw-semibold">Noodles</span>
            </p>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-wrap="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/30506288/pexels-photo-30506288/free-photo-of-delicious-noodle-dish-with-herbs-and-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              style={{ height: "400px", objectFit: "cover" }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>The Nation of Noodles</h5>
              <p>
                “Where every bowl tells a spicy story - handcrafted, bold,
                unforgettable.”
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1907229/pexels-photo-1907229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              style={{ height: "400px", objectFit: "cover" }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Slurp into Flavour</h5>
              <p>
                “Ramen, wok-tossed noodles & street-style spice - all in one
                place.”
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/7594058/pexels-photo-7594058.jpeg?auto=compress&cs=tinysrgb&w=600"
              style={{ height: "400px", objectFit: "cover" }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Made Fresh. Served Hot.</h5>
              <p>
                “We don't just serve noodles. We serve memories - piping hot and
                full of flavor.”
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Slider Ends */}

      <section>
        <div
          className="mt-1"
          style={{
            backgroundImage: `linear-gradient(rgba(244, 63, 63, 0.7), rgba(245, 232, 59, 0.7)), url("https://images.pexels.com/photos/1087904/pexels-photo-1087904.jpeg?auto=compress&cs=tinysrgb&w=600")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "100%",
          }}
        >
          <div
            className="BannerTextContainer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "80px",
              height: "100%",
              width: "90%",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h1 className="BannerText">
              Welcome to Noodles Nation — Where Every Slurp Tells a Story!
            </h1>
            <h4>
              At Noodles Nation, we serve bold flavors and fresh ingredients in
              every bowl. From sizzling street-style stir-fries to comforting
              broths and classic ramen, our noodles are crafted with passion and
              flair. Whether you're craving spice, soul food, or something
              uniquely fusion, there's a bowl here with your name on it. Dive
              into a world of warmth, flavor, and modern noodle culture — one
              bite at a time.
            </h4>
          </div>
        </div>
      </section>

      {/* New Dishes Cards start */}

      <section className="mt-5 mb-5 me-5 ms-5">
        <h2 className="text-danger fw-bold text-center mb-4">
          New Noodle Dishes 🍜
        </h2>

        <div className="row">
          {/* Card 1 */}
          <div className="col">
            <div className="card bg-danger position-relative h-100 shadow-sm">
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                New
              </span>
              <img
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="Spicy Ramen"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-light">Creamy Truffle Udon</h5>
                <p className="card-text text-light">
                  Thick noodles tossed in a velvety truffle-infused cream sauce,
                  topped with mushrooms and crispy garlic.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card bg-danger position-relative h-100 shadow-sm">
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                New
              </span>
              <img
                src="https://images.pexels.com/photos/2433979/pexels-photo-2433979.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="Miso Udon"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-light">
                  Sweet Chili Soba Splash
                </h5>
                <p className="card-text text-light">
                  Cold soba noodles served with a tangy-sweet chili sauce,
                  shredded veggies, and a sprinkle of sesame seeds.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card bg-danger position-relative h-100 shadow-sm">
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                New
              </span>
              <img
                src="https://images.pexels.com/photos/2827263/pexels-photo-2827263.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="Teriyaki Soba"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-light">Lemon Zest Vermicelli</h5>
                <p className="card-text text-light">
                  Light rice vermicelli tossed with lemon zest, herbs, olive
                  oil, and grilled tofu-fresh and citrusy.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="card bg-danger position-relative h-100 shadow-sm">
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                New
              </span>
              <img
                src="https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="Coconut Curry"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-light">Coconut Curry Laksa</h5>
                <p className="card-text text-light">
                  A rich and fragrant Malaysian-inspired noodle soup with
                  coconut curry broth, shrimp, and rice noodles.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col">
            <div className="card bg-danger position-relative h-100 shadow-sm">
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                New
              </span>
              <img
                src="https://images.pexels.com/photos/19134836/pexels-photo-19134836/free-photo-of-white-bowl-of-coconut-noodle-soup-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="Coconut Curry"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-light">Paneer Tikka Noodles</h5>
                <p className="card-text text-light">
                  An Indian-Chinese fusion delight with grilled paneer tikka
                  cubes in a smoky masala noodle stir-fry.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col">
            <div className="card bg-danger position-relative h-100 shadow-sm">
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                New
              </span>
              <img
                src="https://images.pexels.com/photos/7474163/pexels-photo-7474163.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="Coconut Curry"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-light">
                  Wasabi Lime Glass Noodles
                </h5>
                <p className="card-text text-light">
                  Clear glass noodles with a zesty wasabi-lime dressing, fresh
                  cucumbers, and roasted peanuts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Dishes Cards End */}

      {/* Group Card */}
      <section className="mt-1 mb-5">
        <div className="card-group">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-danger">Street-Style Specials</h5>
              <p className="card-text text-danger">
                Inspired by the bustling noodle carts of Asia, our signature
                bowls are packed with fire-grilled toppings, zesty sauces, and
                bold spices.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-danger">Build Your Own Bowl</h5>
              <p className="card-text text-danger">
                Customize your noodle experience from base to broth. Choose your
                noodles, protein, veggies, and sauces, exactly how you like it.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/31393431/pexels-photo-31393431/free-photo-of-delicious-japanese-ramen-with-egg-and-scallions.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-danger">Fast, Fresh, Flavorful</h5>
              <p className="card-text text-danger">
                We prepare everything fresh and fast — perfect for lunch breaks,
                late-night cravings, or weekend slurpfests.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </section>

      {/* End Group Card */}

      {/* Discription start */}

      <section className="container my-5">
        {/* First Row */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="https://images.pexels.com/photos/8212127/pexels-photo-8212127.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Delicious Noodles"
              className="img-fluid rounded shadow"
              style={{
                height: "350px",
                objectFit: "cover",
                width: "100%",
                filter: "sepia(100%)",
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-warning rounded shadow-sm h-100 d-flex flex-column justify-content-center">
              <h3 className="text-danger fw-bold mb-3">Our Story</h3>
              <p className="text-danger fs-5 mb-3">
                Born from a passion for noodles and a love for bold flavors,{" "}
                <span className="fw-semibold text-dark">Noodles Nation</span> is
                your go-to destination for everything noodle. From classic ramen
                to modern fusion dishes, we bring you the best of noodle culture
                in every bowl.
              </p>
              <p className="text-danger fs-5 mb-0">
                Our chefs craft each dish with fresh ingredients, authentic
                techniques, and a sprinkle of creativity. Join us on this
                flavorful journey and discover why we're the{" "}
                <span className="fw-semibold text-dark">
                  nation of noodles!
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Second Row*/}
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src="https://images.pexels.com/photos/6496049/pexels-photo-6496049.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Delicious Noodles"
              className="img-fluid rounded shadow"
              style={{
                height: "350px",
                objectFit: "cover",
                width: "100%",
                filter: "sepia(100%)",
              }}
            />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="p-4 bg-warning rounded shadow-sm h-100 d-flex flex-column justify-content-center">
              <h3 className="text-danger fw-bold mb-3">Our Mission</h3>
              <p className="text-danger fs-5 mb-3">
                At <span className="fw-semibold text-dark">Noodles Nation</span>
                , we believe every bowl tells a story. We are committed to
                bringing authentic flavors with a modern twist, making every
                noodle experience unforgettable.
              </p>
              <p className="text-danger fs-5 mb-0">
                Our mission is to unite noodle lovers everywhere and celebrate
                the rich culture behind every slurp. Join us in our quest to
                explore, innovate, and share the joy of noodles with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discription Ends */}

      {/* small Cards starts */}
      <section>
        <div className="container">
          <div className="row d-flex align-items-stretch">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card text-white bg-danger h-100 shadow">
                <div className="row g-0 h-100">
                  <div className="col-4">
                    <img
                      src="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="img-fluid h-100 rounded-start"
                      style={{ objectFit: "cover" }}
                      alt="Fiery Dragon Ramen"
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">Fiery Dragon Ramen</h5>
                      <p className="card-text">
                        A bold, spicy broth loaded with chili oil, marinated
                        egg, grilled chicken, and crunchy garlic — not for the
                        faint-hearted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card text-white bg-danger h-100 shadow">
                <div className="row g-0 h-100">
                  <div className="col-4">
                    <img
                      src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="img-fluid h-100 rounded-start"
                      style={{ objectFit: "cover" }}
                      alt="Thai Chili Garlic Noodles"
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">Thai Chili Garlic Noodles</h5>
                      <p className="card-text">
                        Wok-tossed flat noodles with bell peppers, peanuts, and
                        sweet-spicy chili garlic sauce — full of street-style
                        punch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card text-white bg-danger h-100 shadow">
                <div className="row g-0 h-100">
                  <div className="col-4">
                    <img
                      src="https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="img-fluid h-100 rounded-start"
                      style={{ objectFit: "cover" }}
                      alt="Curry Udon Fusion"
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">Curry Udon Fusion</h5>
                      <p className="card-text">
                        A fusion twist of Japanese curry and thick udon noodles
                        — creamy, savory, and soul-satisfying.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* small Cards ends */}

      <Footer />
    </div>
  );
}

export default Home;
