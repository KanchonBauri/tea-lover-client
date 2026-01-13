import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
    // Sidebar state-ke Root-e niye ashlam jeno Footer-o eta use korte pare
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
            <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            
            {/* Flex grow ব্যবহার করেছি যেন কন্টেন্ট কম থাকলেও ফুটার নিচে থাকে */}
            <div className="flex flex-1 ">
                <main className={`flex-1 transition-all duration-500 ease-in-out 
                    ${isSidebarOpen ? 'lg:ml-72' : 'lg:ml-24'}`}>
                    
                    <div className="p-4 md:p-10 min-h-[calc(100vh-160px)]">
                        <Outlet />
                    </div>

                    {/* Footer এখন মেইন এর ভেতর, তাই স্ক্রল হবে */}
                    <Footer isSidebarOpen={false} /> 
                </main>
            </div>
        </div>
    );
};

export default RootLayout;