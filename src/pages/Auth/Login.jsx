import AuthLayout from '@/components/layouts/AuthLayout'
import Input from '@/components/layouts/Input';
import { Button } from '@/components/ui/button';
import { validateEmail } from '@/utils/helper';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async(e) =>{
    e.preventDefault();
    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }
    if(!password){
      setError("Enter Password");
      return;
    }
    setError("");

    //Login API call
  }

  return (
    <AuthLayout>
    <div>
      <div className='mb-15'>
      <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white mb-2">
        Welcome Back!
      </h2>
      <h2 className="text-base font-medium text-gray-600 dark:text-gray-300">
        Please enter your details to sign in.
      </h2>
      </div>

      <form onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="johndoe@abc.com"
          type="text"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min. 8 characters"
          type="password"
        />
        
        {error && (
          <p className="text-sm text-red-500 mb-5 font-medium">
            {error}
          </p>
        )}

        <Button
          type="submit"
          className="w-full px-6 py-2 text-lg font-semibold border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:cursor-pointer"
        >
          Login
        </Button>

        <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-4">
          Don’t have an account?
          <Link
            to="/signup"
            className="ml-1 text-black dark:text-white font-medium underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
    </AuthLayout>
  )
}

export default Login