

import React, { createContext, useEffect, useState } from 'react';
import { getAllCarsForBranch, getAllCustomersByBranch, getBranch, loginManager, getManager } from '../http/service'
const AppContext = createContext(null)

export const AppProvider = ({ children }) => {

    const [manager, setManager] = useState()
    const [cars, setCars] = useState([])
    const [customers, setCustomers] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchManagerBranchData() {
            if (manager) {
                try {
                    setCustomers(await getAllCustomersByBranch(manager.branch._id))
                    setCars(await getAllCarsForBranch(manager.branch._id))
                } catch (error) {
                    console.log(error)
                    setError(error)
                }
            }
        }
        fetchManagerBranchData();
    }, [manager])

    useEffect(() => {
        const fetchManagerByRefresh = async () => {
            try {
                const token = localStorage.getItem('token')
                if (token) {
                    setManager(await getManager())
                }
            } catch (error) {
                console.log(error)
                setError(error)
            }
        }
        fetchManagerByRefresh()
    }, [])

    const login = async (manager) => {
        try {
            await loginManager(manager)
            setManager(await getManager())
        } catch (error) {
            console.log(error)
            console.log(error)
            setError(error)
        }
    }
    const logout = () => {
        localStorage.removeItem('token')
        setManager(null)
    }

    return (
        <AppContext.Provider value={{
            manager,
            cars,
            login,
            logout,
            customers
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = React.useContext(AppContext)
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppProvider')
    }
    return context
}

export default AppContext
