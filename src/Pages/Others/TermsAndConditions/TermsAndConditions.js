import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is our terms and conditions</h3>
            <p>Go back to:<Link to='/signUp'>SignUp.</Link> </p>
        </div>
    );
};

export default TermsAndConditions;