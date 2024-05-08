import React, { useEffect } from 'react';
import { dotSpinner } from 'ldrs';

const UserLoader = ({ isLoading = false}) => {
    useEffect(() => {
        // Register the dotSpinner component as a custom element
        dotSpinner.register();
    }, []);

    // Conditional rendering based on the isLoading prop
    if (isLoading ==true) {
        return (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                {/* Overlay */}
                <div className="text-white">
                    <l-dot-spinner size="99" speed="0.5" color="#FF9900"></l-dot-spinner>
                </div> {/* Loader */}
            </div>
        );
    } else {
        return null; // If isLoading is "false", return null to render nothing
    }
};


export default UserLoader;
