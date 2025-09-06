import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required()
});

export default function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [loginType, setLoginType] = useState('patient'); // 'patient' or 'doctor'

  const onSubmit = (data) => {
    if (loginType === 'patient') {
      if (data.email === 'user@example.com' && data.password === '123456') {
        setLoginError('');
        navigate('/patient');
      } else {
        setLoginError('Invalid patient email or password.');
      }
    } else if (loginType === 'doctor') {
      if (data.email === 'doctor@example.com' && data.password === 'admin123') {
        setLoginError('');
        navigate('/doctor-dashboard');
      } else {
        setLoginError('Invalid doctor email or password.');
      }
    }
  };

  const handleToggle = (type) => {
    setLoginType(type);
    setLoginError('');
    reset();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="flex justify-center mb-6 gap-2">
          <button
            className={`px-4 py-2 rounded-l font-bold border ${loginType === 'patient' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => handleToggle('patient')}
            type="button"
          >
            Patient Login
          </button>
          <button
            className={`px-4 py-2 rounded-r font-bold border ${loginType === 'doctor' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => handleToggle('doctor')}
            type="button"
          >
            Doctor Login
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">{loginType === 'patient' ? 'Patient Login' : 'Doctor Login'}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              {...register("email")}
              type="email" 
              autoComplete="username"
              className={`w-full px-4 py-2 border rounded ${errors.email ? 'border-red-500' : 'focus:ring-2 focus:ring-primary'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>  
            <input 
              {...register("password")}
              type="password" 
              autoComplete="current-password"
              className={`w-full px-4 py-2 border rounded ${errors.password ? 'border-red-500' : 'focus:ring-2 focus:ring-primary'}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button 
            type="submit"
            className="w-full bg-primary text- bg-green-400 py-2 px-4 rounded hover:bg-green-600"
          >
            Sign In
          </button>
          {loginError && <p className="text-red-600 text-center mt-2">{loginError}</p>}
        </form>
        <p className="mt-4 text-center">
          New user? <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
}