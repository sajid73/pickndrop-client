"use client"
import React, { createContext, useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

export const UserContext = createContext();

export default function Layout_provider({ children }) {
    const [sharedData, setSharedData] = useState({ user: {} });
    return (
        <UserContext.Provider value={[sharedData, setSharedData]}>
            <Header />
            {children}
            <Footer />
        </UserContext.Provider>
    )
}
