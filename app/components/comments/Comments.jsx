import React from 'react'

const Comments = () => {
    const status = "authenticated"
    return (
        <div>
            <h1>Comments</h1>
            <div className='flex gap-4'>
                <textarea placeholder='اكتب تعليقك....'></textarea>
                <button className='bg-black text-white p-2'>ارسل</button>
            </div>
            <div className='comments '>
                <div className='comment flex gap-4'>
                    <div className='user'>
                        <img />
                        <div >
                            sidi
                        </div>
                    </div>
                    <p className='desc'>
                        hi
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Comments
