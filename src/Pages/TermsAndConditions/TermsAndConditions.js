import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Here is our terms</h2>
            <p>now back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;