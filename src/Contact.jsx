const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="contactFirst fade-in-initial">
                <h1 className="text-center font-bold text-6xl">Get in <span className="text-logo">touch</span></h1>
                <p className="text-center text-balance mt-24 text-lg">Stay connected with us, we will help you with your various needs. We will provide the best services. You can provide your needs by asking in the form below

                </p>
            </div>

            <div className="contactSection flex">
                <div className="contactSecond mt-40">
                    <h1 className="text-slate-600 font-medium text-lg mb-5">Send Message</h1>
                    <hr className="w-11/12" />
                    <div className="space-x-10">
                        <input type="text" placeholder="Your Name" className=" inputName mt-10 px-5" />
                        <input type="email" placeholder="Your email" className="inputMail mt-10 px-5" />
                    </div>
                    <div>
                        <textarea placeholder="Your message" className="mt-10 p-5 mb-10"></textarea>
                    </div>
                    <button type="submit" className="sendButton">Send</button>

                </div>


                <div className="contactThird">
                    <h1 className="text-lg text-slate-600 font-medium">Contact information</h1>
                    <hr className="mt-5" />

                    <div className="flex gap-2 mt-10">
                        <img src="src/assets/icons8-mail-50.png" alt="mail" className="h-5 mt-0.5 px-0.5" />
                        <p className="text-gray-400"> hello@mail.com</p>
                    </div>

                    <div className="flex gap-2 mt-10">
                        <img src="src/assets/icons8-globe-50.png" alt="globe" className="h-6" />
                        <p className="text-gray-400">www.abc.com</p>
                    </div>

                    <div className="flex gap-2 mt-10">
                        <img src="src/assets/icons8-location-50.png" alt="location" className="h-6" />
                        <p className="text-gray-400">New York City, USA</p>

                    </div>

                    <div className="flex gap-2 mt-10">

                        <img src="src/assets/icons8-phonecall-50.png" alt="phone" className="h-5 px-1" />
                        <p className="text-gray-400">123-456-789</p>

                    </div>

                    <div>
                        <h1 className="text-lg font-medium text-slate-600 mt-40 mb-5">Social Media</h1>
                        <hr />
                        <div className="flex gap-7 mt-10">
                            <img src="src/assets/icons8-instagram-50.png" alt="insta" className="h-10" />
                            <img src="src/assets/icons8-twitter-50.png" alt="twitter" className="h-10" />
                            <img src="src/assets/icons8-facebook-50.png" alt="facebook" className="h-10" />
                            <img src="src/assets/icons8-linked-in-50.png" alt="linkedin" className="h-10" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact;