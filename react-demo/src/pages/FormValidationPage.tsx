import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { UserFormWrapper } from '../components/feature/user-form/UserFormWrapper.tsx';

const FormValidationPage: React.FC = () => {
    const context = useContext(AppContext);
    
    if (!context) {
        throw new Error(`${FormValidationPage.name} must be used within an AppProvider`);
    }

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Boxes</h2>
            <UserFormWrapper />
        </>
    );
};

export default FormValidationPage;
