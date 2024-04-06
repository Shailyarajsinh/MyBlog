import React, { useEffect, useState } from 'react'
import { PostCard, Container } from '../index'
import appwriteService from "../../appwrite/config";
import authservice from '../../appwrite/auth';

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    const [userName, setUserName] = useState(null);

    useEffect(() => {
        authservice.GetCurrentUser().then(user => {
            setUserName(user.name);
        }).catch(error => {
            console.error('Error fetching user:', error);
        });
    }, []);

    return (
        <div className='w-full py-8'>
            <Container>
                <h1 className='text-2xl font-bold pb-5 text-center'>Welcome {userName}</h1>
                <div className='flex flex-wrap justify-center'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>

    )
}

export default AllPost