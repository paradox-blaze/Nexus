import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './App.css'; // Make sure to import your CSS file

const Homepage = () => {
    const reviewContainerRef = useRef(null);
    const [visibleElements, setVisibleElements] = useState({});

    const scrollLeft = () => {
        if (reviewContainerRef.current) {
            reviewContainerRef.current.scrollBy({
                left: -reviewContainerRef.current.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (reviewContainerRef.current) {
            reviewContainerRef.current.scrollBy({
                left: reviewContainerRef.current.clientWidth,
                behavior: 'smooth'
            });

            if (reviewContainerRef.current.scrollLeft >= reviewContainerRef.current.scrollWidth / 2) {
                reviewContainerRef.current.scrollLeft = 0;
            }
        }
    };

    const reviews = [
        {
            text: "I am very satisfied with the work on the Nexus team. good service, satisfying work results and good sounding mixes. Thank you so much to the Nexus team.",
            name: "John Richard",
            role: "Artist",
            image: "/assets/johnrichard.png"
        },
    ];

    const repeatedReviews = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews]; // Clone the reviews array

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
            document.getElementById('homepage'),
            document.getElementById('meet-team'),
            ...document.querySelectorAll('.team .fade-in'),
            document.getElementById('wwd-container')
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
        <div className="container">
            <div id="homepage" className={`homepage fade-in ${visibleElements['homepage'] ? 'visible' : ''}`}>
                <div className="flex justify-around">
                    <div>
                        <h1 className="font-bold text-6xl mb-12">Get your perfect mix with us</h1>
                        <p className="text-slate-500 mb-24">Get the perfect mix from our talented engineers</p>
                        <Link to="contact" className="px-12 py-5 w-12 h-12 border border-black mr-2 border-2 rounded-md hover:bg-black hover:text-white">Contact Us</Link>
                        <Link to="about" className="px-12 py-5 w-12 h-12 border border-black rounded-md border-2 hover:bg-black hover:text-white">About Us</Link>
                    </div>
                    <img src="/assets/techivation-WHTq-xyU40o-unsplash.jpg" alt="tech" className="h-96 imageOfHome" />
                </div>
            </div>
            <h1 id="meet-team" className={`font-bold text-4xl ml-36 mt-44 fade-in ${visibleElements['meet-team'] ? 'visible' : ''}`}>Meet our team</h1>
            <div className="flex team gap-6 justify-evenly">
                <div className={`sarah fade-in ${visibleElements['sarah'] ? 'visible' : ''}`} id="sarah">
                    <img src="/assets/Sarah Doe.png" alt="sarah" />
                    <p className="text-center mt-10 text-2xl font-medium">Sarah Jae</p>
                    <p className="text-center mt-2 text-slate-400">Mixing Engineer</p>
                </div>
                <div className={`john fade-in ${visibleElements['john'] ? 'visible' : ''}`} id="john">
                    <img src="/assets/John Doe.png" alt="John" />
                    <p className="text-center mt-10 text-2xl font-medium">John Doe</p>
                    <p className="text-center mt-2 text-slate-400">Mastering Engineer</p>
                </div>
                <div className={`samantha fade-in ${visibleElements['samantha'] ? 'visible' : ''}`} id="samantha">
                    <img src="/assets/Samantha.png" alt="samantha" />
                    <p className="text-center mt-10 text-2xl font-medium">Samantha</p>
                    <p className="text-center mt-2 text-slate-400">Producer</p>
                </div>
            </div>
            <h1 className={`text-center font-bold text-4xl ml-44 mt-20 font-serif fade-in ${visibleElements['what-we-do'] ? 'visible' : ''}`}>What we do</h1>
            <div id="wwd-container" className={`wwdContainer fade-in ${visibleElements['wwd-container'] ? 'visible' : ''} flex`}>
                <div className="wwdItem">
                    <h1 className="font-bold text-xl mt-6">Produce a beat</h1>
                    <p className="text-sm text-slate-500 text-wrap text-balance p-10">Give us a genre or an idea and we'll make you a beat, or better let us make the decision for you, so you don't have to worry about anything</p>
                </div>
                <div className="wwdItem">
                    <h1 className="font-bold text-xl mt-6">Mix your songs</h1>
                    <p className="text-sm text-slate-500 text-wrap text-balance p-10">We specialize in transforming your music into a harmonious masterpiece. Our expert mixing engineers meticulously blend every element of your songs, ensuring each instrument and vocal resonates in perfect balance.</p>
                </div>
                <div className="wwdItem">
                    <h1 className="font-bold text-xl mt-6">Make them Industry ready</h1>
                    <p className="text-sm text-slate-500 text-wrap text-balance p-10">Make your songs industry ready with perfect mastering for loud mixes</p>
                </div>
            </div>
            <div className="circle">
                <div className="innerCircle"></div>
            </div>
            <div className="homepageSlider">
                <h1 className="font-medium text-4xl p-28 pb-0">What our clients are saying!</h1>
                <button className="slider-button left" onClick={scrollLeft}>‹</button>
                <div className="reviews-container flex space-x-4" ref={reviewContainerRef}>
                    {repeatedReviews.map((review, index) => (
                        <div className="customerReview text-md mt-5 pt-8 text-balance" key={index}>
                            <p className="text-slate-500">{review.text}</p>
                            <div className="flex mt-4 gap-4 pl-10">
                                <img src={review.image} alt={review.name} className="w-12 h-12" />
                                <div>
                                    <h1 className="font-bold text-lg">{review.name}</h1>
                                    <p className="text-slate-500 text-sm">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="slider-button right" onClick={scrollRight}>›</button>
            </div>
        </div>
    );
};

export default Homepage;
