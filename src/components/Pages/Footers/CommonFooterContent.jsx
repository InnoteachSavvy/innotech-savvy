import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CommonFooterContent = () => {

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <>
            <Link id="back-to-top" to={'javascript:void(0);'} onClick={backToTop} className="back-to-top">
                <i className="bi bi-chevron-up" />
            </Link>
            <div className="overlay overlay-hugeinc">
                <form className="form-inline mt-2 mt-md-0">
                <div className="form-inner">
                    <div className="form-inner-div hstack"><i className="srn-search" />
                    <div className="w-100"><input className="form-control form-light" type="text" placeholder="Search" aria-label="Search" /></div><a href="#" className="overlay-close link-oragne"><i className="bi bi-x" /></a></div>
                </div>
                </form>
            </div>
        </>
    )
}

export default CommonFooterContent;