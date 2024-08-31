import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the data to be stored in the console
        const formData = {
            name,
            email,
            password,
            confirmPassword,
            phone,
            address,
        };

        // Log form data to the console
        console.log('Form Data:', formData);

        // Clear the form
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPhone('');
        setAddress('');

        // Optionally navigate to another page
        navigate('/FindJob');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
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
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 p-3 w-full border rounded-md"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mb-4 p-3 w-full border rounded-md"
                />
                <input
                    type="text"
                    placeholder="Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mb-4 p-3 w-full border rounded-md"
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mb-4 p-3 w-full border rounded-md"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Create Account
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

export default CreateAccount;
