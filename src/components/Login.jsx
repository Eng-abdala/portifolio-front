import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            localStorage.setItem('token', response.data.token);
            navigate('/feedback');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-[#0F172A] flex justify-center items-center px-6">
            <div className="bg-[#1e293b] p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-700/50">
                <h2 className="text-3xl font-bold text-[#F8FAFC] text-center mb-8 font-[poppins]">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[#94A3B8] mb-2 font-[Inter]">Username</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-[#64748B]"><FaUser /></span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-[#0F172A] text-[#F8FAFC] pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-[#818CF8] focus:outline-none transition-colors"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[#94A3B8] mb-2 font-[Inter]">Password</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-[#64748B]"><FaLock /></span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#0F172A] text-[#F8FAFC] pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-[#818CF8] focus:outline-none transition-colors"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#818CF8] hover:bg-[#6366f1] text-white font-bold py-3 rounded-lg transition-colors duration-300 shadow-lg shadow-[#818CF8]/25"
                    >
                        Login
                    </button>
                    <p className="text-center text-[#94A3B8] text-sm mt-4">
                        Don't have an account? Contact admin.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
