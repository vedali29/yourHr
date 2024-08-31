import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const UserProfile = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await Axios.get('http://localhost:5000/users');
                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching users:', err);
                setError('Failed to load users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-6">Your Data</h2>
            <ul className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
                {users.map((user) => (
                    <li key={user._id} className="mb-4 p-4 border-b">
                        <h3 className="text-lg font-bold">{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Resume: {user.resume ? <a href={`http://localhost:5000/uploads/${user.resume}`} target="_blank" rel="noopener noreferrer">View Resume</a> : 'No Resume Uploaded'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserProfile;
