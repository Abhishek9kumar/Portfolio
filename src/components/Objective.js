import React from 'react'

export default function Objective(props) {
  return (
    <section className="position-relative text-white py-5 px-4 overflow-hidden" style={{backgroundColor: "#000000"}}>
        <div className="container position-relative z-1">
        <p className="text-white-50" style={{ textAlign: "justify" }}>
          {props.Objective}
        </p>
      </div>
    </section>
  )
}
