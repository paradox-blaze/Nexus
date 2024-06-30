import { useState, useEffect, useRef } from "react";
import './App.css'; // Ensure this imports your CSS

const About = () => {
    const [visibleElements, setVisibleElements] = useState({});

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleElements(prev => ({ ...prev, [entry.target.id]: true }));
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        const elementsToObserve = [
            document.getElementById('aboutFirst'),
            document.getElementById('lila'),
            document.getElementById('ana'),
            document.getElementById('randy'),
            document.getElementById('sinta'),
            document.getElementById('rico'),
            document.getElementById('sam')
        ];

        elementsToObserve.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            elementsToObserve.forEach(element => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <div className="aboutContainer">
            <div id="aboutFirst" className={`aboutFirst px-32 fade-in ${visibleElements['aboutFirst'] ? 'visible' : ''}`}>
                <h1 className="font-bold text-5xl mt-12 text-center">Get to know</h1>
                <h1 className="font-bold text-5xl text-center">more <span className="text-logo">about us</span></h1>
                <p className="text-center text-balance text-serif mt-12 text-lg text-slate-600">We are an agency engaged in the creative industry and business, we are ready to help you to improve your mixes and make you industry ready together with our great team</p>
            </div>

            <div className="flex flex-wrap justify-evenly workerContainer">
                <div id="lila" className={`mb-12 lila fade-in ${visibleElements['lila'] ? 'visible' : ''}`}>
                    <img src="src/assets/Lila Iaconsia.png" alt="Lila" className="workers" />
                    <p className="text-center mt-10 text-2xl font-medium">Lila Laconsia</p>
                    <p className="text-center mt-2 text-slate-400">Marketing</p>
                </div>

                <div id="ana" className={`fade-in ${visibleElements['ana'] ? 'visible' : ''}`}>
                    <img src="src/assets/Ana Louren.png" alt="Ana" className="workers" />
                    <p className="text-center mt-10 text-2xl font-medium">Ana Louren</p>
                    <p className="text-center mt-2 text-slate-400">Design</p>
                </div>

                <div id="rico" className={`fade-in ${visibleElements['rico'] ? 'visible' : ''}`}>
                    <img src="src/assets/Rico John.png" alt="Rico" className="workers" />
                    <p className="text-center mt-10 text-2xl font-medium">Rico John</p>
                    <p className="text-center mt-2 text-slate-400">Artist</p>
                </div>

                <div id="randy" className={`fade-in ${visibleElements['randy'] ? 'visible' : ''}`}>
                    <img src="src/assets/Randy Okla.png" alt="Randy" className="workers" />
                    <p className="text-center mt-10 text-2xl font-medium">Randy Okla</p>
                    <p className="text-center mt-2 text-slate-400">Pianist</p>
                </div>

                <div id="sinta" className={`fade-in ${visibleElements['sinta'] ? 'visible' : ''}`}>
                    <img src="src/assets/Sinta Marcus.png" alt="Sinta" className="workers" />
                    <p className="text-center mt-10 text-2xl font-medium">Sinta Marcus</p>
                    <p className="text-center mt-2 text-slate-400">Vocal Coach</p>
                </div>

                <div id="sam" className={`fade-in ${visibleElements['sam'] ? 'visible' : ''}`}>
                    <img src="src/assets/Sam Rivald.png" alt="Sam" className="workers" />
                    <p className="text-center mt-10 text-2xl font-medium">Sarah Jae</p>
                    <p className="text-center mt-2 text-slate-400">Mastering Engineer</p>
                </div>
            </div>
        </div>
    );
}

export default About;
