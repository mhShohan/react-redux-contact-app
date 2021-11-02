import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function EditContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const { id } = useParams();
    const history = useHistory();
    const contacts = useSelector((state) => state);
    const currectContact = contacts.find((cont) => cont.id === parseInt(id));

    const dispatch = useDispatch();

    useEffect(() => {
        setName(currectContact.name);
        setEmail(currectContact.email);
        setPhone(currectContact.phone);
    }, [currectContact]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !phone) {
            return toast.warning('Provide all fields');
        }
        // const checkEmail = contacts.find(
        //     (contact) => contact.id === parseInt(id) && contact.email === email
        // );
        // const checkPhone = contacts.find(
        //     (contact) =>
        //         contact.id === parseInt(id) && contact.phone === parseInt(phone)
        // );

        // if (checkEmail) {
        //     return toast.error('Email Already Exist.');
        // }
        // if (checkPhone) {
        //     return toast.error('Phone Already Exist.');
        // }

        const newContact = {
            id: parseInt(id),
            name,
            email,
            phone,
        };

        dispatch({ type: 'UPDATE_CONTACT', payload: newContact });
        toast.success('Contact Updated!');

        history.push('/');
    };

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center my-3 display-4">Edit Contact</h1>
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
                                className="btn btn-success btn-block"
                                value="Update Contact"
                            />
                        </div>
                        <div className="form-group px-2 d-grid">
                            <Link to="/" className="btn btn-danger btn-block">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
