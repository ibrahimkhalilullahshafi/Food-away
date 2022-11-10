import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';


const Order = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://a-11-server.vercel.app/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [user?.email])
    console.log(orders);
    return (
        <div>
            <h1 className='text-center'>Order List</h1>
            <h4>you have {orders.length} orders</h4>

            <div>{
                orders.map(order => <OrderRow
                    key={order._id}
                    order={order}
                ></OrderRow>)
            }</div>

        </div>
    );
};

export default Order;