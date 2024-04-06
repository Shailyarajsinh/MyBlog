import React from 'react'
import appwriteservice from '../appwrite/config'
import authservice from '../appwrite/auth';
import { Link } from 'react-router-dom'
import parse from "html-react-parser";

function PostCard({ $id, title, content, featuredimage}) {
   
   
      
    return (
        <>
            <div className="w-full">
                <Link to={`/post/${$id}`} className="w-full">
                    <div className="w-full h-80 bg-gray-200 rounded-xl p-4 overflow-hidden">
                        <div className='w-full justify-center mb-4'>
                            <img
                                src={appwriteservice.getFilePreview(featuredimage)}
                                alt={title}
                                className='rounded-xl w-full h-40 object-cover'
                            />
                            <h2 className='text-xl font-bold mt-2 text-gray-800'>{title}</h2>
                            <div className='text-gray-600 mt-2'>
                                {parse(content)}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PostCard
