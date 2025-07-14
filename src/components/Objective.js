import React from 'react'

export default function Objective(props) {
  return (
    <section className="position-relative text-white py-5 px-4 overflow-hidden" style={{backgroundColor: "#000000"}}>
        <div className="container position-relative z-1">
        {/* <h5 className="text-uppercase fw-bold mb-3">IT BERRIES</h5> */}
        <p className="text-white-50" style={{ textAlign: "justify" }}>
          {props.Objective}
        </p>
      </div>
    </section>
  )
}
