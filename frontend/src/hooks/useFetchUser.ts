import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  name: string;
  email: string;
}

const useFetchUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve JWT token from localStorage
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('http://localhost:5513/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          signal: controller.signal,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
        }

        const data: User = await response.json();
        setUser(data); // Update user state with fetched data
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Fetch Error:', error);
          navigate('/auth/login');
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  return user;
};

export default useFetchUser;
