import React, { useState } from 'react';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { useNavigate, useParams} from 'react-router-dom';
import { useSnackbar } from 'notistack';

const LoginDelete = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();
  
    const handleAdminLogin = () => {
        // Mocked validation for username and password
        if (user === 'praphulyadav' && password === 'PiBook') {
          // Simulate a delay for the loading spinner
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            // Navigate to the new component on successful login
            navigate(`/books/delete/${id}`);
           
          }, 1000);
        } else {
          // Display an error message if the credentials are invalid
          enqueueSnackbar('Invalid credentials', { variant: 'error' });
        }
    };
  
    return (
      <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4 text-center p-10'>Admin Login Dashboard</h1>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>User Id</label>
            <input
              type='text'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2  w-full '
            />
          </div>
          
          <button className='p-2 bg-sky-300 m-8' onClick={handleAdminLogin}>
            LOG IN
          </button>
        </div>
      </div>
    );
}

export default LoginDelete