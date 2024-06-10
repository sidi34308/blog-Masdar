"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className='bg-gray-200 p-4 min-h-screen' dir="rtl">
            <div className='mb-4'>
                <input
                    type="text"
                    placeholder='اكتب العنوان'
                    className='w-full p-2 border rounded-md text-right'
                />
            </div>
            <div className='editor bg-white p-4 border rounded-md'>
                <button
                    className='bg-blue-500 text-white py-2 px-4 rounded-md mb-4'
                    onClick={() => setOpen(!open)}
                >
                    إضافة
                </button>
                {open && (
                    <div className='flex flex-col gap-2 mb-4'>
                        <button className='bg-gray-300 py-2 px-4 rounded-md flex items-center'>
                            <img src="/path/to/img-icon.png" alt="Add Img" className='ml-2' /> إضافة صورة
                        </button>
                        <button className='bg-gray-300 py-2 px-4 rounded-md flex items-center'>
                            <img src="/path/to/video-icon.png" alt="Add Video" className='ml-2' /> إضافة فيديو
                        </button>
                        <button className='bg-gray-300 py-2 px-4 rounded-md flex items-center'>
                            <img src="/path/to/external-icon.png" alt="External Link" className='ml-2' /> رابط خارجي
                        </button>
                    </div>
                )}
                <ReactQuill
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder='اكتب مقالك..'
                    className='rtl-editor min-h-[200px] text-right'
                />
            </div>
            <button className='bg-green-500 text-white py-2 px-4 rounded-md mt-4'>
                انشر
            </button>
        </div>
    );
};

export default WritePage;
