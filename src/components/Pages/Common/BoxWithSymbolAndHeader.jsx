import React from 'react'
import { Link } from 'react-router-dom'

const BoxWithSymbolAndHeader = ({icon_value, h6_header, p_content, link_service_page}) => {
    return (
        <>
            <div className="col-lg-4 col-sm-6 mb-0">
                <div className="icon-style-top-icon">
                    <div className="icon"><i className={icon_value} /></div>
                    <div className="text">
                        <h6>{h6_header}</h6>
                        <p>{p_content}</p>
                    </div>
                    <div className="arrow-read-more">
                        <Link to={`/${link_service_page}`}>
                            read more <i className="srn-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxWithSymbolAndHeader
