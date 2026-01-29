import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserCircle, FaEnvelope, FaQuoteLeft } from 'react-icons/fa';

function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchFeedbacks = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/contact', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setFeedbacks(response.data);
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    return (
        <div className="min-h-screen bg-[#0F172A] py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[#818CF8] font-semibold text-lg uppercase tracking-wider mb-2">Testimonials</h2>
                    <h1 className="text-4xl md:text-5xl font-bold font-[poppins] text-[#F8FAFC]">User Feedback</h1>
                    <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">See what others are saying. Your feedback helps me improve and grow.</p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#22D3EE]"></div>
                    </div>
                ) : feedbacks.length === 0 ? (
                    <div className="text-center text-[#94A3B8] text-xl bg-[#1e293b] p-12 rounded-2xl border border-gray-700/50">
                        <p>No feeedback yet. Be the first to share your thoughts!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {feedbacks.map((feedback) => (
                            <div key={feedback._id} className="bg-[#1e293b] rounded-2xl p-8 shadow-xl hover:shadow-2xl shadow-[#818CF8]/5 border border-gray-700/50 hover:border-[#818CF8]/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col relative group">
                                <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-[#1F2937] group-hover:text-[#818CF8]/10 transition-colors" />

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-[#818CF8]/10 p-3 rounded-full text-[#818CF8]">
                                        <FaUserCircle className="text-3xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold font-[inter] text-[#F8FAFC]">{feedback.name || "Anonymous"}</h3>
                                        <a href={`mailto:${feedback.email}`} className="text-sm text-[#94A3B8] hover:text-[#22D3EE] flex items-center gap-2 transition-colors">
                                            <FaEnvelope className="text-xs" />
                                            {feedback.email || "No email provided"}
                                        </a>
                                    </div>
                                </div>

                                <p className="text-[#cbd5e1] leading-relaxed font-[Inter] flex-grow italic">
                                    "{feedback.message}"
                                </p>

                                <div className="mt-6 pt-4 border-t border-gray-700/50 flex justify-end">
                                    <span className="text-xs text-[#64748B] font-mono">Verified Feedback</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Feedback;