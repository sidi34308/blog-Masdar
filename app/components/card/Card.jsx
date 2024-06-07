import React from 'react';

const Card = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 p-5 border rounded-md shadow-lg">
            <div className="md:w-1/3 w-full">
                <img src="/post.png" className="w-full h-full object-cover rounded-md" alt="Post" />
            </div>
            <div className="md:w-2/3 w-full flex flex-col justify-between">
                <div>
                    <h1 className="font-bold text-2xl mb-4">من ستقاتل فاغنير على ضوء التفاهمات الروسية- المالية؟</h1>
                    <p className="mb-4">
                        قال وزير الخارجية الروسي سيرغي لافروف إن السلطات المالية تواصلت مع “شركة خصوصية روسية لتعزيز الأمن على أراضيها”، ولكنه أشار إلى أن السلطات الرسمية في بلاده لا دخل لها في ذلك.
                    </p>
                </div>
                <a className="self-start bg-black text-white rounded-md p-2 mt-auto" href="#">
                    اقرأ المزيد
                </a>
            </div>
        </div>
    );
};

export default Card;
