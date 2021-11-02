import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !phone) {
            return toast.warning('Provide all fields');
        }
        const checkEmail = contacts.find(
            (contact) => contact.email === email && email
        );
        const checkPhone = contacts.find(
            (contact) => contact.phone == phone && phone
        );

        if (checkEmail) {
            return toast.error('Email Already Exist.');
        }
        if (checkPhone) {
            return toast.error('Phone Already Exist.');
        }

        const newContact = {
            id: Date.now(0),
            name,
            email,
            phone,
        };

        dispatch({ type: 'ADD_CONTACT', payload: newContact });
        toast.success('Contact Added');

        history.push('/');
    };

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center my-3 display-4">Add Contact </h1>
                <div className="col-6 offset-3 shadow p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                            <input
                                type="text"
                                className="form-control py-2"
                                placeholder="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group p-2">
                            <input
                                type="email"
                                className="form-control py-2"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group p-2">
                            <input
                                type="text"
                                className="form-control py-2"
                                placeholder="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group p-2 d-grid">
                            <input
                                type="submit"
                                className="btn btn-dark btn-block"
                                value="Add Contact"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
