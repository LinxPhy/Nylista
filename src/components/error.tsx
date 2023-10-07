import React from 'react';
import { useState, useEffect } from 'react'

interface ErrorProps {
    message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {

    const [showError, setShowError] = useState(true);

    const clearErrorMessage = () => {
        setShowError(false);
    }

    useEffect(() => {
        if(message){
            setTimeout(() => {
                setShowError(false)
            }, 5000)
        }
    }, [message])

    return (
     
        <div className="ErrorMessages">
            {showError? 
                <div className='error' onClick={() => clearErrorMessage()} >
                    <p>{message}</p>
                </div>
                : null
            }
        </div>

    )
}

export default Error;