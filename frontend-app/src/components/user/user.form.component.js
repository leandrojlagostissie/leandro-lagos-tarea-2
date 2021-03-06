
import React, { useState, useRef, useEffect } from 'react';
import validator from 'email-validator';



export const UserForm = (props) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    
    const refUserName = useRef();
    const refEmail = useRef();


    useEffect(() => {        
        props.changeForm({
            isValid: validateForm(),
            user: {
                ...(props.user || {}),
                ...({
                    userName,
                    email
                })
            }
        })
        // eslint-disable-next-line
    }, [userName, email])

    const submitForm = (e) => {
        e.preventDefault()
        handleChangeForm()
    }

    const handleChangeForm = () => {
        setUserName(refUserName.current.value)
        setEmail(refEmail.current.value)
    }

    const validateForm = () => {
        return !!(userName && email && validator.validate(email))
    }

    return (
        <form onSubmit={submitForm} onChange={handleChangeForm}>
            <div className="form-group row">
                <label htmlFor="userName" className="col-sm-2 col-form-label">User Name</label>
                <div className="col-sm-10">
                    <input ref={refUserName} type="text" className="form-control" id="userName" value={userName} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input ref={refEmail} type="text" className="form-control" id="email" placeholder="email@example.com" value={email} />
                </div>
            </div>
        </form>
    )
}