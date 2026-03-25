import React from 'react'
import useTheme from '../Context/Theme.js'

export default function Card() {
    const { themeMode } = useTheme()
     
    const dark = themeMode === "dark"

    const cardStyle = {
        backgroundColor: dark ? '#1f2937' : '#ffffff',
        border: dark ? '1px solid #374151' : '1px solid #e5e7eb',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }

    const titleStyle = {
        color: dark ? '#ffffff' : '#111827',
        fontSize: '1.25rem',
        fontWeight: '600'
    }

    const priceStyle = {
        color: dark ? '#ffffff' : '#111827',
        fontSize: '1.875rem',
        fontWeight: '700'
    }

    return (
        <div style={cardStyle} className="w-full">
            <a href="/">
                <img className="p-8 rounded-t-lg w-full" src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <h5 style={titleStyle}>
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
                <div className="flex items-center mt-2.5 mb-5">
                    <span style={{ color: '#f59e0b' }}>⭐⭐⭐⭐</span>
                    <span className="text-xs font-semibold ml-3 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span style={priceStyle}>$599</span>
                    <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}