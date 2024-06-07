import { Link } from 'heroicons-react'
import React from 'react'

const AuthLinks = () => {

    const status = "notauthenticated"

    return (
        <div className='flex justify-center items-center'>
            {status === "notauthenticated" ? (
                <a href='' className='text-white font-bold p-2 bg-[#ad8b19] rounded-md hover:bg-[#947613]'>Login</a>) :
                (<>
                    <a>write</a> <span>Logout</span>
                </>)}
        </div>
    )
}
export default AuthLinks;
