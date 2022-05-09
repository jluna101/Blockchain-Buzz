import React from 'react';

function Footer(props) {
    return (
        <div className='bg-warning border-top border-grey bg-warning'>
            <div className='w-25 mx-2 mt-5'>
                <p className='text-dark fs-3 fw-bold'>Blockchain Buzz</p>
            </div>
            <p className=" fs-6 w-responsive text-muted mx-auto p-3 pt-3 mt-3 mb-1">© 2022 Blockchain Buzz. All rights reserved</p>
        </div>
    );
}

export default Footer;