'use client'
import { useState } from 'react'
import { useFormState } from 'react-dom';
import { sendEmail } from 'app/api/send-email'
import Submit from './submit'
import TextArea from './textarea'
import Input from './input'
import Modal from './modal'

export default function ContactForm() {
    const initialState = { message: null, errors: {} };

    const [state, dispatch] = useFormState(sendEmail, initialState);
    const [show, setShow] = useState(false);

    return (
        <div className="container mx-auto">
            <form action={(formData) => {
                dispatch(formData);
                setShow(true);
            }}>
                <Input id='name' type='text' placeholder='Your name' />
                <Input id='email' type='email' placeholder='your@email.com' />
                <TextArea id="message" />
                <Submit />
                <Modal isOpen={show} message={state?.message} setShow={setShow} />
            </form >
        </div >
    );
}
