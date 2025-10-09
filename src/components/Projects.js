
import React, { useEffect, useState } from 'react';
import { getPost } from '../api/Projects';
import ContentLoader from 'react-content-loader';

const RectangleLoader = () => (
    <ContentLoader speed={2} width={100} height={100} viewBox="0 0 100 100" backgroundColor="#b4b4b4ff" foregroundColor="#ecebeb" style={{ width: "100%", height: "auto" }}>
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="50" />
        <rect x="0" y="52" rx="3" ry="3" width="80" height="10" />
        <rect x="0" y="63" rx="2" ry="2" width="100" height="6" />
        <rect x="0" y="70" rx="2" ry="2" width="100" height="6" />
        <rect x="0" y="77" rx="2" ry="2" width="70" height="6" />
    </ContentLoader>
);

export default function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPost().then((res) => {
            setProjects(res.data);
            setLoading(false);
        });
    }, [])

    return (
        <>

            <div id="Projects" style={{ position: "relative", top: "-5rem", height: "0" }}></div>
            <section className="text-center pb-5">
                <div className="mb-4">
                    <h2 className="border border-5 border-dark d-inline-block px-5 py-2 fw-bold fs-5 letter-spacing" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        PROJECTS
                    </h2>
                </div>

                {/* Image Grid */}
                <div className="container">
                    {loading ? (
                        <div className="row g-4">
                            {[...Array(projects.length || 3)].map((_, index) => (
                                <div className="col-6 col-sm-6 col-md-4" key={index}>
                                    <RectangleLoader />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="row g-4">
                            {projects.map((project, index) => (
                                <div className="col-6 col-sm-6 col-md-4" key={index} >
                                    <div data-aos="zoom-in" data-aos-delay={index * 100}>
                                        <div className="project-card position-relative overflow-hidden">
                                            <img
                                                src={project.imagePath}
                                                alt={project.title}
                                                className="img-fluid"
                                                style={{ height: "auto", objectFit: "fit", borderRadius: "5px" }}
                                            />
                                            <div className="project-overlay d-flex flex-column justify-content-center align-items-center">
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`btn btn-sm btn-light m-1 ${project.liveLink ? "btn-light" : "disabled"}`}>
                                                    View Demo
                                                </a>
                                                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-light m-1">
                                                    Source Code
                                                </a>
                                            </div>
                                        </div>
                                        <h3 className="text-start pt-2">{project.title}</h3>
                                        <p className="small" style={{ textAlign: "justify" }}>{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-5">
                    <hr className="w-100 mx-auto" style={{ borderTop: "3px double #000", width: "100px" }} />
                </div>
            </section>
        </>
    );
}