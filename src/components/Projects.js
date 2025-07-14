import React from 'react'

export default function Portfolio() {
    return (
        <section className="text-center pb-5" id="Projects">
            <div className="mb-4">
                <h2 className="border border-5 border-dark d-inline-block px-5 py-2 fw-bold fs-5 letter-spacing">
                    PROJECTS
                </h2>
            </div>

            {/* Image Grid */}
            <div className="container">
                <div className="row g-3">
                    <div className="col-6 col-sm-6 col-md-4">
                        <a href="https://github.com/Abhishek9kumar/textUtils/tree/master" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset">
                            <img src="/Img/textUtils.png" alt="textUtils" className="img-fluid" style={{height: "auto", objectFit: "fit", borderRadius: "5px" }} />
                            <h3 className="text-start pt-2">TextUtils</h3>
                            <p className="text-start small">
                                This web application is a text utility which can be used to manipulate the text.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <hr className="w-100 mx-auto" style={{ borderTop: "3px double #000", width: "100px" }} />
            </div>
        </section>
    )
}
