import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
// import OrderRow from './OrderRow';

const Order = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [user?.email])
    return (
        <div>
            <h1 className='text-center'>Order List</h1>
            <h4>you have {orders.length} orders</h4>
            {/* {
                orders.map(order => <OrderRow
                    key={order._id}
                    order={order}
                ></OrderRow>)
            } */}

        </div>
    );
};

export default Order;