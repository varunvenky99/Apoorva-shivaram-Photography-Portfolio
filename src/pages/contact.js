import React from "react"
import Layout from "../components/layout"
import "../style/contact.scss"
const contactpg = () => {
  return (
    <Layout>
      <div className="contact-section">
        <h1 className="contact">Contact Me</h1>
        <div className="content">
          <p>
            I can be reached via email at (apoorvashivaram205@gmail.com),
            Instagram{" "}
            <a
              className="insta"
              href="https://www.instagram.com/apoorva_shivaram/?hl=en"
            >
              (@apoorva_shivaram)
            </a>{" "}
            or through the form below.
          </p>
        </div>
        <div className="border"></div>
        <form className="contact-form" action="POST" data-netlify="true">
          <input
            type="text"
            name="name"
            className="contact-form-text"
            placeholder=" Name"
          />
          <input
            type="email"
            name="email"
            className="contact-form-text"
            placeholder=" Email"
          />
          <input
            type="number"
            name="number"
            className="contact-form-text"
            placeholder=" Phone"
          />
          <textarea
            name="message"
            className="contact-form-text"
            placeholder=" Message"
          ></textarea>
          <input type="submit" className="contact-form-btn" value="Send" />
        </form>
      </div>
    </Layout>
  )
}
export default contactpg
