

import {FormEvent, useState} from 'react'
import emailjs from '@emailjs/browser';

const SendForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [tel, setTel] = useState('');
    const [file, setFile] = useState('');


    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_6npav2d';
        const templateId = 'template_m4iklmr';
        const publicKey = 'gXlBRwryUVl6ns64d';

        // Create a new object that contains dynamic template params
         const templateParams = {
             from_name: name,
             from_email: email,
             from_tel: tel,
             my_file: file,
             to_name: 'Kolyan',
             message: message,
         };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId,templateParams , publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
                setTel('')
                setFile('')
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return (

        <div>
            <form encType="multipart/form-data" onSubmit={handleSubmit} className="hidden sm:block  flex-col  w-[668px] h-[716px] p-8 bg-white rounded-[40px] shadow  justify-start items-center gap-8 inline-flex ">
                <div className="self-stretch text-zinc-900 text-5xl font-medium font-['Raleway']">Мы ждём вас!</div>
                <div className="self-stretch h-[358px] flex-col justify-start items-center gap-4 flex">
                    <input
                        type="text"
                        className="self-stretch p-8 bg-neutral-100 rounded-[40px] justify-start items-center gap-2.5 inline-flex text-black text-opacity-50 text-base font-medium font-['Raleway']"
                        placeholder="ФИО"
                        name='from_name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">

                        <input
                            type="email"
                            className="grow shrink basis-0 h-[83px] p-8 bg-neutral-100 rounded-[40px] justify-start items-center gap-2.5 flex text-black text-opacity-50 text-base font-medium font-['Raleway']"
                            placeholder="Email"
                            name='from_email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="tel"
                            className="grow shrink basis-0 h-[83px] p-8 bg-neutral-100 rounded-[40px] justify-start items-center gap-2.5 flex text-black text-opacity-50 text-base font-medium font-['Raleway']"
                            placeholder="Телефон"
                            name='from_tel'
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />
                    </div>
                    <textarea
                        className="w-[608px] h-40 p-8 bg-neutral-100 rounded-[40px] justify-start items-start gap-2.5 inline-flex text-black text-opacity-50 text-base font-medium font-['Raleway']"
                        name='message'
                        placeholder="Обращение"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
      </textarea>

                </div>
                <div className="w-[608px] justify-start items-start gap-2 inline-flex absolute">
                    <div className="w-6 h-6 relative" />

                    <div className="grow shrink basis-0"><span className="text-black text-opacity-50 text-sm font-normal font-['Raleway'] leading-[21px]">Я ознакомлен и согласен с условиями </span><span className="text-rose-600 text-sm font-bold font-['Raleway'] leading-snug">Политики конфиденциальности</span></div>
                </div>
                <div className="self-stretch justify-start items-start gap-4 inline-flex mt-[40px]">

                    <button type="submit" className="w-[294px] h-[118px] p-8 bg-rose-600 rounded-[20px] flex-col justify-center items-center gap-1 inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="text-white text-base font-bold font-['Raleway'] leading-relaxed">  Отправить</div>
                    </button>
                </div>
            </form>
        </div>

    )
}


export default SendForm;
