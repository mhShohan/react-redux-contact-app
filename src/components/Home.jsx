import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Home() {
    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    const deleleContact = (id) => {
        dispatch({ type: 'DELETE', payload: id });
        toast.error('Contact deleted Successfully');
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 my-3 text-right"></div>
                <div className="col-4 my-3 text-right">
                    <Link to="/add" className="btn btn-outline-dark ">
                        Add Contact
                    </Link>
                </div>
                <div className="col-md-6 mx-auto">
                    <div className="row mt-5 border">
                        <div className="col-3">
                            <h3>Name</h3>
                        </div>
                        <div className="col-3">
                            <h3>Email</h3>
                        </div>
                        <div className="col-3">
                            <h3>Phone</h3>
                        </div>
                        <div className="col-2">
                            <h3>Action</h3>
                        </div>
                    </div>
                    {contacts.map((contact) => (
                        <div className="row mt-1 border" key={contact.id}>
                            <div className="col-3">
                                <span>{contact.name}</span>
                            </div>
                            <div className="col-3">
                                <span>{contact.email}</span>
                            </div>
                            <div className="col-3">
                                <span>{contact.phone}</span>
                            </div>
                            <div className="col-2 btn_container">
                                <Link
                                    className="link"
                                    to={`/edit/${contact.id}`}
                                >
                                    <span>Edit</span>
                                </Link>
                                <span onClick={() => deleleContact(contact.id)}>
                                    X
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
