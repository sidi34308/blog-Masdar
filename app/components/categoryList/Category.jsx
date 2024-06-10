import React from 'react'


const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", { cache: "no-cache" });
    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }
    return res.json();
}

const CategoryList = async () => {
    const data = await getData();
    console.log("categoryList", data);
    return (
        <div>
            <h2 className='font-bold text-3xl p-10'>Category List</h2>
            <div className='w-full flex justify-center items-center gap-10 flex-wrap p-4'>
                {data.map((item) => (
                    <h4 key={item.id} className='p-5 rounded-md text-black'>{item.title}</h4>
                ))}
            </div>
        </div>
    )
}

export default CategoryList
