import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Help() {
  return (
    <div>
      <Header />

      <section className="container mt-5 mb-5">
        <h1 className="text-danger fw-bold text-center mb-4">Help & Support</h1>

        <p className="text-dark fs-5">
          Have questions? We,re here to help! Below are answers to some of the most common things our customers ask.
        </p>

        <div className="mt-4">
          <h4 className="text-danger">How do I order?</h4>
          <p className="text-dark">
            You can order online through our website or visit us at the restaurant. It's fast and easy!
          </p>

          <h4 className="text-danger">Do you deliver?</h4>
          <p className="text-dark">
            Yes, we offer delivery within 10 km. You can also find us on Zomato and Swiggy.
          </p>

          <h4 className="text-danger">Do you handle food allergies?</h4>
          <p className="text-dark">
            Absolutely. Just let us know your allergies before ordering and we'll guide you to the right dish.
          </p>

          <h4 className="text-danger">Can I cancel or change my order?</h4>
          <p className="text-dark">
            If we haven't started cooking yet, yes. Please call us as soon as possible.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="text-danger">Still need help?</h4>
          <p className="text-dark">
            📞 Phone: +91 98765 43210<br />
            📧 Email: support@noodlesnation.com<br />
            🕒 Hours: Mon-Sat, 10 AM - 8 PM
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Help
