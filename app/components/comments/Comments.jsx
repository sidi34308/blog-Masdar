import React from 'react';

const Comments = () => {
    const status = "authenticated";
    return (
        <div className='mt-8'>
            <h2 className='text-2xl font-semibold mb-4'>Comments</h2>
            <div className='flex gap-4 mb-4'>
                <textarea
                    placeholder='اكتب تعليقك....'
                    className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                ></textarea>
                <button className='bg-black text-white px-4 py-2 rounded-lg'>ارسل</button>
            </div>
            <div className='comments space-y-4'>
                <div className='comment flex gap-4 items-start'>
                    <div className='user flex-shrink-0'>
                        <img src='/default-avatar.png' alt='User avatar' className='w-12 h-12 rounded-full' />
                        <div className='text-center mt-2'>sidi</div>
                    </div>
                    <div className='desc bg-gray-100 p-4 rounded-lg shadow-sm w-full'>
                        hi
                    </div>
                </div>
                {/* Additional comments can be added here */}
            </div>
        </div>
    );
}

export default Comments;
