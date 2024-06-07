// pages/login.js
import React from 'react';

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white  p-8 rounded-md shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <div className="flex flex-col gap-4">
                    <button

                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                        Sign in with Google
                    </button>
                    <button

                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Sign in with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
