import { useEffect, useRef } from 'react';
import './App.css'; // Ensure this import is included

const Works = () => {
    const worksFirstRef = useRef(null);
    const latestProjectsRef = useRef(null);
    const worksSecondRef = useRef(null);
    const worksThirdRef = useRef(null);
    const worksFourthRef = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        const elements = [
            latestProjectsRef.current,
            worksSecondRef.current,
            worksThirdRef.current,
            worksFourthRef.current
        ];

        elements.forEach(el => {
            if (el) {
                const elementTop = el.getBoundingClientRect().top + scrollY;
                if (scrollY + windowHeight > elementTop) {
                    el.classList.add('visible');
                }
            }
        });
    };

    useEffect(() => {
        // Apply 'visible' class to worksFirst immediately
        if (worksFirstRef.current) {
            worksFirstRef.current.classList.add('visible');
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="worksContainer">
            <div className="worksFirst fade-in-initial" ref={worksFirstRef}>
                <h1 className="font-bold text-5xl text-center">What we <span className="text-logo">do</span></h1>
                <p className="text-lg text-center text-balance py-24 text-slate-600">
                    We have completed many projects from various artists in the world, we have made many of our clients feel happy and satisfied with the results we have provided
                </p>
            </div>

            <h1 className="text-4xl font-bold mt-24 ml-20 fade-in" ref={latestProjectsRef}>Latest Projects:</h1>

            <div className="worksSecond flex flex-around text-white fade-in" ref={worksSecondRef}>
                <div>
                    <h1 className="font-bold text-3xl text-wrap">We've produced an album with artist <span className="text-red-500">Jonas</span></h1>
                    <p className="mt-32 text-slate-300 font-serif text-lg">Jonas' hit album "Memories" which topped the charts was mixed, mastered and produced with our family</p>
                </div>
                <img src="src/assets/techivation-vVRmYWSWy7A-unsplash.jpg" alt="firstWorks" className="firstWorks" />
            </div>

            <div className="worksThird flex justify-around gap-12 fade-in" ref={worksThirdRef}>
                <img src="src/assets/luke-heibert-cmRK3yiOFFQ-unsplash.jpg" alt="secondWorks" className="secondWorks" />
                <div>
                    <h1 className="font-bold text-3xl text-wrap">Partnered with <span className="text-indigo-900">DJ Rythmix</span> for an unforgettable experience</h1>
                    <p className="mt-32 text-slate-300 font-serif text-lg">DJ Rythmix's electrifying album "Pulse," which dominated dance charts worldwide, showcases our cutting-edge mixing and mastering expertise.</p>
                </div>
            </div>

            <div className="worksFourth flex justify-around fade-in" ref={worksFourthRef}>
                <div>
                    <h1 className="font-bold text-3xl text-wrap text-white">Live Session with <span className="text-yellow-400">Mixmaster Leo</span></h1>
                    <p className="mt-32 text-white text-lg font-serif">Experience the magic of live music production with Mixmaster Leo. His unparalleled skill on the decks, combined with our cutting-edge mixing and mastering techniques, creates an unforgettable auditory journey. Every session is a masterpiece, crafted to perfection in our studio.</p>
                </div>
                <img src="src/assets/jack-lucas-smith-eL4Jts03hpE-unsplash.jpg" alt="thirdWorks" className="thirdWorks" />
            </div>
        </div>
    );
};

export default Works;
