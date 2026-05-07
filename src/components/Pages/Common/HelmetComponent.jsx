import React from 'react'
import { Helmet } from 'react-helmet';

const HelmetComponent = ({page_title, meta_title, meta_desc, meta_keyword}) => {
    return (
        <>
            <Helmet>
                <title>{page_title}</title>
                <meta name="title" content={meta_title} />              
                <meta name="description" content={meta_desc} />
                <meta name="keywords" content={meta_keyword} />  
            </Helmet>
        </>
    )
}

export default HelmetComponent
