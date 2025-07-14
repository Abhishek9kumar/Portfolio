import React from 'react'

export default function Skills() {
    return (
        <section className="text-center pb-5" id="Skills">
            {/* Title */}
            <div className="mb-4">
                <h2 className="border border-5 border-dark d-inline-block px-5 py-2 fw-bold fs-5 letter-spacing">
                    SKILLS
                </h2>
            </div>

            {/* USING NOW */}
            <h5 className="fw-bold text-uppercase mb-4 pb-1 border-dark " style={{borderBottom: "3px solid black", display: "inline-block",}}>
                Using Now
            </h5>
            <div className="container mb-5">
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 justify-content-center">
                    {[
                        { name: "HTML5", src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
                        { name: "CSS3", src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
                        { name: "JavaScript", src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
                        { name: "React", src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" },
                        { name: "NodeJS", src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
                        { name: "Bootstrap", src: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" },
                        { name: "Git", src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
                        { name: "Python", src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
                        { name: "MySql", src: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" },
                    ].map((skill, index) => (
                        <div key={index} className="text-center">
                            <img src={skill.src} alt={skill.name} style={{ width: "100px", height: "100px" }} />
                            <div className="mt-2 text-uppercase small">{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LEARNING */}
            <h5 className="fw-bold text-uppercase mb-4 pb-1 border-dark" style={{borderBottom: "3px solid black", display: "inline-block",}}>
                Learning
            </h5>
            <div className="container">
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 justify-content-center">
                    {[
                        { name: "Tailwind", src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" },
                        { name: "MongoDB", src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" },
                    ].map((skill, index) => (
                        <div key={index} className="text-center">
                            <img src={skill.src} alt={skill.name} style={{ width: "100px", height: "100px" }} />
                            <div className="mt-2 text-uppercase small">{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <hr className="w-100 mx-auto" style={{ borderTop: "3px double #000", width: "100px" }} />
            </div>
        </section>
    )
}
