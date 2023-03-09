

import React, { createContext, useEffect, useState } from 'react';
import { getAllCars, getAllCustomers, getAllManagers } from '../http/service'
import { useAppContext } from './AppContext';
const AdminContext = createContext(null)

export const AdminProvider = ({ children }) => {

    const { manager } = useAppContext()
    const [managers, setManagers] = useState()
    const [cars, setCars] = useState([])
    const [customers, setCustomers] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchAdminData() {
            if (manager && manager.manager_protection_level === '0') {
                try {
                    setCustomers(await getAllCustomers())
                    setManagers(await getAllManagers())
                    setCars(await getAllCars())
                } catch (error) {
                    console.log(error)
                    setError(error)
                }
            }
        }
        fetchAdminData();
    }, [manager])


    return (
        <AdminContext.Provider value={{
            managers,
            cars,
            customers,
            error
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export const useAdminContext = () => {
    const context = React.useContext(AdminContext)
    if (context === undefined) {
        throw new Error('useAdminContext must be used within a AdminProvider')
    }
    return context
}

export default AdminContext
