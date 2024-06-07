import React from 'react'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const CardList = () => {
    return (
        <div>
            <h2 className='font-bold text-3xl p-10 '>Card List</h2>
            <div className='posts flex flex-col gap-5'>
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    )
}

export default CardList
