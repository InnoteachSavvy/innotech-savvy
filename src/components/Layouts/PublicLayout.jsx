import React from 'react'
import { Outlet } from 'react-router-dom';
import { WelcomPageFooter, WelcomPageHeader, CommonFooterContent } from '..';

const PublicLayout = () => {
    return (
        <>
            <WelcomPageHeader />
            <main id="body-content">
                <Outlet />
            </main>
            <WelcomPageFooter />
            <CommonFooterContent />
        </>
    )
}

export default PublicLayout
