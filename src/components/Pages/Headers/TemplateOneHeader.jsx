import React from 'react'
import { CommonHeader } from '../..';
import { Link } from 'react-router-dom';

const TemplateOneHeader = ({ pagename }) => {
    return (
        <>
            <div className="bg-primary header-bg">

                <CommonHeader />

                <section className="breadcrumbs-page">
                    <div className="container">
                        <h1>{ pagename }</h1>
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={'/'}><i className="bi-house" /></Link>
                            </li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item active" aria-current="page">{ pagename }</li>
                        </ol>
                        </nav>
                    </div>
                </section>
               

            </div>
        </>
    )
}

export default TemplateOneHeader
