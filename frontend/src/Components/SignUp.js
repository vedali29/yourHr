import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('resume', resume);

        try {
            const response = await Axios.post('https://yourhr-s6lb.onrender.com', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);

            // Clear the form
            setName('');
            setEmail('');
            setResume(null);

            // Redirect to another page with the user's data
            navigate('/UserProfile');
        } catch (error) {
            console.error(error);
        }
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Find Your Job</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-4 p-3 w-full border rounded-md"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 p-3 w-full border rounded-md"
                />
                <input
                    type="file"
                    onChange={(e) => setResume(e.target.files[0])}
                    className="mb-6 p-3 w-full border rounded-md"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Go For Your Job
                </button>
                <button
                    type="button"
                    onClick={goBack}
                    className="w-full bg-gray-300 text-gray-700 p-3 mt-4 rounded-md hover:bg-gray-400 transition duration-200"
                >
                    &larr; Go Back
                </button>
            </form>
        </div>
    );
};

export default SignUp;


