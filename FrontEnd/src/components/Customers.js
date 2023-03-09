import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AddCustomer from './AddCustomer';



export default function Customers() {
    const { customers } = useAppContext()

    const onCustomerDelete = (customer) => {
        const customersWithoutDeletedCustomer = customers.filter((c) => {
            if (customer.id === c.id) return false;
            return true;
        })
    }

    return (
        <div>
            <h1>לקוחות</h1>
            <table>
                <thead>
                    <th>

                    </th>
                    <th>
                        תאריך הצטרפות
                    </th>
                    <th>
                        סוג לקוח
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
                                    onCustomerDelete(customer);
                                }}>
                                    מחק
                                </button>
                            </td>
                            <td>
                                {customer.joinDate}
                            </td>
                            <td>
                                {customer.customerType}
                            </td>
                            <td>
                                {customer.firstName}
                            </td>
                            <td>
                                {customer.lastName}
                            </td>
                            <td>
                                {customer.id}
                            </td>
                            <td>
                                {customer.mobilePhone}
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
            <Link to="/AddCustomer">הוסף לקוח חדש</Link>
        </div>
    )
}