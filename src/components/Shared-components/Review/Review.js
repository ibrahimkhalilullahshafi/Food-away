import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://a-11-server.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])

    return (
        <div>

            <div>
                <h1 className='text-center'>review List</h1>
                <h4>you have {reviews.length} reviews</h4>

            </div>

        </div>
    );
};

export default Review;