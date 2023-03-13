import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AddCustomer from './AddCustomer';



export default function Customers() {
    const { customers } = useAppContext()
    const nav = useNavigate()
    const onCustomerDelete = (customer) => {
        const customersWithoutDeletedCustomer = customers.filter((c) => {
            if (customer.id === c.id) return false;
            return true;
        })
    }



    const onCustomerDetails = (customer) => {
        nav("/CustomerDetails/" + customer._id)
    }
    if (!customers)
        return <div>
            No Customers
        </div>
    return (
        <div>
            <h1>לקוחות</h1>
            <table>
                <thead>
                    <th>
                        פעולות
                    </th>
                    <th>
                        שם פרטי
                    </th>
                    <th>
                        שם משפחה
                    </th>
                    <th>
                        ת.ז
                    </th>
                    <th>
                        טלפון נייד
                    </th>
                </thead>
                <tbody>
                    {customers.map((customer) => {
                        return <tr key={customer.id}>
                            <td>
                                <button onClick={(evt) => {
                                    onCustomerDetails(customer);
                                }}>
                                    פרטים
                                </button>
                                <button onClick={(evt) => {
                                    onCustomerDelete(customer);
                                }}>
                                    עריכה
                                </button>
                                <button onClick={(evt) => {
                                    onCustomerDelete(customer);
                                }}>
                                    מחיקה
                                </button>
                            </td>
                            <td>
                                {customer.customer_first_name}
                            </td>
                            <td>
                                {customer.customer_last_name}
                            </td>
                            <td>
                                {customer.customer_passport_id}
                            </td>
                            <td>
                                {customer.customer_phone}
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
            <Link to="/AddCustomer">הוסף לקוח חדש</Link>
        </div>
    )
}