import React from 'react'
import Link from 'next/link'
const Menu = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl p-10'>Menu</h1>
            <h2 className='font-bold'>most Popular</h2>
            <div className='flex flex-col gap-4'>
                <Link href="#">مدير وكالة التشغيل: نجاحنا في توفير فرص عمل للموريتانيين
                </Link>
                <Link href="#">مدير وكالة التشغيل: نجاحنا في توفير فرص عمل للموريتانيين
                </Link>
            </div>
        </div>
    )
}

export default Menu
