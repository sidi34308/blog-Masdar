import React from 'react';
import Menu from '../components/menu/Menu';
import Comments from '../components/comments/Comments';

const SinglePage = () => {
    return (
        <div className=' mx-auto px-6 py-8 flex flex-col md:flex-row gap-14'>
            <div className='info flex flex-col gap-6 flex-1'>
                <h1 className='text-4xl font-bold text-black'>مدير وكالة التشغيل: نجاحنا في توفير فرص عمل للموريتانيين</h1>
                <div className='text-gray-500'>
                    <span>By Author Name</span> | <span>Published on June 3, 2024</span>
                </div>
                <div className='relative'>
                    <img src='/post.png' alt='News' className=' w-full max-h-[40rem] object-cover  rounded-lg shadow-lg' />
                    <span className='absolute bottom-2 left-2 text-sm bg-gray-900 text-white p-1 rounded'>Image Caption</span>
                </div>
                <p className='text-lg leading-relaxed'>
                    أطلق الرئيس الانتقالي في مالي، أسيمي غويتا، يوم السبت، أعمال بناء محطة شمسية جديدة في تيكادوغو-ديالاكورو، في خطوة تهدف إلى تعزيز البنية التحتية للطاقة في البلاد.
                    <br /><br />
                    هذه المحطة هي الثالثة من نوعها بعد محطتي سانانكوروبا وسافو، وتأتي ضمن جهود الحكومة لتعزيز إنتاج الطاقة النظيفة والمستدامة.
                    <br /><br />
                    وستبلغ القدرة الإنتاجية للمحطة الجديدة 100 ميغاواط وستقام على مساحة 120 هكتارًا، ومن المتوقع أن تساهم في خلق حوالي 200 وظيفة سنويًا.
                    <br /><br />
                    وقال غويتا، إن محطة تيكادوغو-ديالاكورو تمثل نهاية المرحلة الأولى من سلسلة بناء المحطات الشمسية في مالي.
                    <br /><br />
                    وستشيد المحطة الجديدة على مساحة 120 هكتارًا، ومن المتوقع أن تساهم في زيادة العرض من الطاقة النظيفة، وتقليل تكاليف الإنتاج، وخلق حوالي 200 وظيفة سنويًا، بحسب السلطات الانتقالية.
                    <br /><br />
                    وتعاني مالي من أزمة طاقة حادة تؤثر على معظم مدنها، إذ تغرق العديد من المناطق في ظلام دامس.
                    <br /><br />
                    ويعود ذلك إلى التدهور الكبير في البنية التحتية لشبكة الكهرباء وزيادة الطلب على الطاقة، مما دفع الحكومة إلى البحث عن حلول مستدامة لتحسين الوضع.
                </p>
                <Comments />
            </div>
            <div className='w-full md:w-1/4'>
                <Menu />
                <div className='mt-8'>
                    <h2 className='text-2xl font-semibold mb-4'>Related Articles</h2>
                    <ul className='list-disc pl-5'>
                        <li><a href='#' className='text-blue-500 hover:underline'>Article 1</a></li>
                        <li><a href='#' className='text-blue-500 hover:underline'>Article 2</a></li>
                        <li><a href='#' className='text-blue-500 hover:underline'>Article 3</a></li>
                    </ul>
                </div>
                <div className='mt-8'>
                    <h2 className='text-2xl font-semibold mb-4'>Share This Article</h2>
                    <div className='flex gap-4'>
                        <a href='https://www.facebook.com/sharer/sharer.php?u=YOUR_URL' target='_blank' rel='noopener noreferrer'>
                            <img src='/icons/facebook.svg' alt='Share on Facebook' className='w-8 h-8' />
                        </a>
                        <a href='https://twitter.com/intent/tweet?url=YOUR_URL' target='_blank' rel='noopener noreferrer'>
                            <img src='/icons/twitter.svg' alt='Share on Twitter' className='w-8 h-8' />
                        </a>
                        <a href='https://www.linkedin.com/shareArticle?mini=true&url=YOUR_URL' target='_blank' rel='noopener noreferrer'>
                            <img src='/instagram.svg' alt='Share on LinkedIn' className='w-8 h-8' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
