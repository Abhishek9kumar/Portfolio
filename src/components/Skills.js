import { getPost } from "../api/Skills"
import React, { useEffect, useState, useMemo } from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useInView } from 'react-intersection-observer';
import ContentLoader from 'react-content-loader';

const CircleLoader = () => (
    <ContentLoader speed={2} width={100} height={100} viewBox="0 0 120 150" backgroundColor="#b4b4b4ff" foregroundColor="#ecebeb" style={{ width: '100%', height: 'auto' }}>
        <circle cx="60" cy="60" r="60" />
        <rect x="20" y="125" rx="4" ry="4" width="80" height="10" />
    </ContentLoader>
);

export default function Skills() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getPost().then((res) => {
            setSkills(res.data);
            setLoading(false);
        });
    }, [])

    const usingSkills = useMemo(() => skills.filter(skill => skill.status === "use"), [skills]);
    const learningSkills = useMemo(() => skills.filter(skill => skill.status === "learn"), [skills]);
    const [animatedValue, setAnimatedValue] = useState([]);
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

    console.log(usingSkills.length);

    useEffect(() => {
        if (inView && usingSkills.length > 0) {
            const initial = usingSkills.map(() => 0);
            setAnimatedValue(initial); //Reset values

            const intervals = usingSkills.map((skill, index) => {
                let current = 0;
                const step = skill.value / 40;
                return setInterval(() => {
                    current += step;
                    setAnimatedValue(prev => {
                        const updated = [...prev];
                        updated[index] = Math.min(Math.round(current), skill.value);
                        return updated;
                    });
                    if (current >= skill.value) clearInterval(intervals[index]);
                }, 20);
            });
            return () => intervals.forEach(clearInterval);
        }
    }, [inView, usingSkills]);

    return (
        <>
            <div id="Skills" style={{ position: "relative", top: "-5rem", height: "0" }}></div>
            <section className="text-center pb-5" ref={ref} >
                {/* Title */}
                <div className="mb-4">
                    <h2 className="border border-5 border-dark d-inline-block px-5 py-2 fw-bold fs-5 letter-spacing">
                        SKILLS
                    </h2>
                </div>

                {/* USING NOW */}
                <h5 className="fw-bold text-uppercase mb-4 pb-1 border-dark " style={{ borderBottom: "3px solid black", display: "inline-block", }}>
                    Using Now
                </h5>
                <div className="container mb-5">
                    {loading ? (
                        <div className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center">
                            {[...Array(usingSkills.length || 11)].map((_, index) => (
                                <div className="col" key={index}>
                                    <CircleLoader />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center">
                            {usingSkills.map((skill, index) => (
                                <div key={index} className="col text-center mb-3 d-flex justify-content-center" >
                                    <div style={{ width: 125, height: 125 }}>
                                        <CircularProgressbarWithChildren value={animatedValue[index] || 0} strokeWidth={4} styles={buildStyles({ pathColor: "#000000", pathTransitionDuration: 0.3 })}>
                                            <img src={skill.logoLink} alt={skill.title} style={{ width: "50px", height: "50px", marginTop: "10px" }} />
                                            <p className="fw-bold">{`${animatedValue[index]}%`}</p>
                                        </CircularProgressbarWithChildren>
                                        <div className="text-uppercase small fw-bold">{skill.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* LEARNING */}
                <h5 className="fw-bold text-uppercase mb-4 pb-1 border-dark" style={{ borderBottom: "3px solid black", display: "inline-block", }}>
                    Learning
                </h5>
                <div className="container">
                    {loading ? (
                        <div className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center">
                            {[...Array(learningSkills.length || 3)].map((_, index) => (
                                <div className="col" key={index}>
                                    <CircleLoader />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 justify-content-center">
                            {learningSkills.map((skill, index) => (
                                <div key={index} className="col text-center d-flex justify-content-center">
                                    <div style={{ width: 150, height: 150 }}>
                                        <img src={skill.logoLink} alt={skill.title} style={{ width: "100px", height: "100px" }} />
                                        <div className="mt-2 text-uppercase small">{skill.title}</div>
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
    )
}
