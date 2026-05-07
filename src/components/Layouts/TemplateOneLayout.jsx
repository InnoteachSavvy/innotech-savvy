import React from 'react'
import { Outlet } from 'react-router-dom';
import {CommonFooterContent, TemplateOneFooter} from '..';

const TemplateOneLayout = () => {
    return (
        <>
            {/* <TemplateOneHeader /> */}
            <Outlet />
            <TemplateOneFooter />
            <CommonFooterContent />
        </>
    )
}

export default TemplateOneLayout
