import React from 'react'

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbwcJXLU_4Upzvka0vYfp4Vbk2XMD9p7h_fAE0Cbsw6FZkOU1NO3nZ6AUv_fj3Fvq7s/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: (`Name= ${e.target.name.value} &Email= ${e.target.email.value} &Phone= ${e.target.phone.value} &Message= ${e.target.message.value}`)
    }).then(res => res.text()).then(data => { alert(data) }).catch(error => console.log(error));
    console.log()
  }

  return (
    <>
    <div id="Contact" style={{ position: "relative", top: "-5rem", height: "0" }}></div>
    <section className="text-center pb-5 px-2">
      <div className="mb-4">
        <h2 className="border border-5 border-dark d-inline-block px-5 py-2 fw-bold fs-5 letter-spacing">
          CONTACT
        </h2>
      </div>

      {/* Form */}
      <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px", width: "100%" }}>
          <div className="mb-4 text-start">
            <input
              type="text"
              style={{ outline: "none", boxShadow: "none" }}
              className="form-control border-4 border-top-0 border-end-0 border-dark rounded-0 fw-semibold"
              name="name"
              placeholder="ENTER YOUR NAME*"
              required
            />
          </div>

          <div className="mb-4 text-start">
            <input
              type="email"
              style={{ outline: "none", boxShadow: "none" }}
              className="form-control border-4 border-top-0 border-end-0 border-dark rounded-0 fw-semibold"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              required
            />
          </div>

          <div className="mb-4 text-start">
            <input
              type="tel"
              style={{ outline: "none", boxShadow: "none" }}
              className="form-control border-4 border-top-0 border-end-0 border-dark rounded-0 fw-semibold"
              name="phone"
              placeholder="PHONE NUMBER"
            />
          </div>

          <div className="mb-4 text-start">
            <textarea
              rows="4"
              style={{ outline: "none", boxShadow: "none" }}
              className="form-control border-4 border-top-0 border-end-0 border-dark rounded-0 fw-semibold"
              name="message"
              placeholder="YOUR MESSAGE*"
              required
            ></textarea>
          </div>

          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn btn-press-effect border-4 border-top-0 border-bottom-0 border-dark rounded-0 px-5 fw-bold"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}
