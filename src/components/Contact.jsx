import axios from "axios";
import { useState } from "react";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa'; // Updated icons import

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await axios.post('http://localhost:5000/api/contact', { name, email, message });
            alert("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#F3F4F6] w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-8">
            <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

                {/* Contact Information Side */}
                <div className="lg:w-1/2 bg-[#818CF8] p-10 sm:p-14 text-white flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold font-[Popins] mb-4">Get in Touch</h2>
                        <p className="text-indigo-100 text-lg mb-10">
                            I'd love to hear from you! whether you have a question, a project idea, or just want to say hi.
                        </p>
                    </div>

                    <div className="gap-8 flex flex-col">
                        <a href="https://wa.me/252613482561" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                                <FaWhatsapp className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">WhatsApp</h3>
                                <p className="text-indigo-100">+252 61 348 2561</p>
                            </div>
                        </a>

                        <a href="https://www.facebook.com/cabdullaahi.salaad.75" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                                <FaFacebook className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Facebook</h3>
                                <p className="text-indigo-100">Abdullahi Salad</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/abdullahi-salad-mohamed-223002296/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                                <FaLinkedin className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">LinkedIn</h3>
                                <p className="text-indigo-100">Abdullahi Salad Mohamed</p>
                            </div>
                        </a>

                        <a href="mailto:abdul482561.com" className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                                <FaEnvelope className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Email</h3>
                                <p className="text-indigo-100">abdul482561.com</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Contact Form Side */}
                <div className="lg:w-1/2 p-10 sm:p-14 bg-white flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-600 font-medium mb-1 ml-1" htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="John Doe"
                                required
                                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#818CF8] focus:ring-2 focus:ring-[#818CF8] focus:ring-opacity-20 transition-all font-[inter]"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 font-medium mb-1 ml-1" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="john@example.com"
                                required
                                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#818CF8] focus:ring-2 focus:ring-[#818CF8] focus:ring-opacity-20 transition-all font-[inter]"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 font-medium mb-1 ml-1" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message here..."
                                required
                                rows="4"
                                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#818CF8] focus:ring-2 focus:ring-[#818CF8] focus:ring-opacity-20 transition-all resize-none font-[inter]"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#818CF8] hover:bg-[#6366f1] text-white text-lg font-bold py-3.5 rounded-lg mt-2 shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <span>Sending...</span>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <FaPaperPlane className="text-sm" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;