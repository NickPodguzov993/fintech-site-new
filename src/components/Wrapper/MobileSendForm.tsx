import CloseMenuSvg from "../svg/CloseMenuSvg";
import send from '../../../public/images/sendLetter.svg'
import {FormEvent, useState} from "react";
import emailjs from '@emailjs/browser';

type SendFormType = {
    getSendMessage: () => void
    theme: string
}

const MobileSendForm = ({theme, getSendMessage}: SendFormType) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [tel, setTel] = useState('');
    const [file, setFile] = useState('');


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        emailjs.send(serviceId, templateId, templateParams, publicKey)
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
        <form encType="multipart/form-data" onSubmit={handleSubmit}
              className="w-[360px] h-[862px] px-4  bg-white rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-center gap-8 inline-flex">
            <div className="w-12 h-12 p-2.5 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 p-[2.26px] justify-center items-center flex">
                    <div className=" absolute left-[320px] top-[20px] " onClick={getSendMessage}>
                        <CloseMenuSvg theme={theme}/>
                    </div>
                </div>
            </div>
            <div className="text-center text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">Напишите нам
            </div>
            <div className="self-stretch h-[530px] flex-col justify-start items-center gap-4 flex">
                <input
                    type="text"
                    className="self-stretch p-4 bg-neutral-100 rounded-[30px] justify-start items-center gap-2.5 inline-flex text-black text-opacity-50 text-sm font-medium font-['Raleway']"
                    placeholder="ФИО"
                    name='from_name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className="self-stretch p-4 bg-neutral-100 rounded-[30px] justify-start items-center gap-2.5 inline-flex text-black text-opacity-50 text-sm font-medium font-['Raleway']"
                    placeholder="Email"
                    name='from_email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    className="self-stretch p-4 bg-neutral-100 rounded-[30px] justify-start items-center gap-2.5 inline-flex text-black text-opacity-50 text-sm font-medium font-['Raleway']"
                    placeholder="Телефон"
                    name='from_tel'
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <textarea
                        className="grow shrink basis-0 h-12 p-4 bg-neutral-100 rounded-[30px] justify-start items-start gap-2.5 flex text-black text-opacity-50 text-sm font-medium font-['Raleway']"
                        name='message'
                        placeholder="Обращение"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
      </textarea>
                </div>
                <div className="self-stretch h-[274px] flex-col justify-center items-start gap-4 flex">
                    <div
                        className="self-stretch p-8 rounded-[20px] border border-stone-300 justify-center items-center gap-2 inline-flex">
                        <div className="w-6 h-6 justify-center items-center flex"/>
                        <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">Добавить
                            резюме
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-2 inline-flex">
                        <div className="w-6 h-6 relative"/>
                        <div className="grow shrink basis-0"><span
                            className="text-black text-opacity-50 text-sm font-normal font-['Raleway']">Я ознакомлен и согласен с условиями </span><span
                            className="text-rose-600 text-sm font-bold font-['Raleway'] leading-snug">Политики конфиденциальности</span>
                        </div>
                    </div>
                    <div
                        className="self-stretch h-[111px] p-8 bg-rose-600 rounded-[20px] flex-col justify-center items-center gap-1 flex">
                        <div className="w-6 h-6 relative"><img src={send}/></div>
                        <button type='submit' onClick={getSendMessage}
                                className="text-white text-base font-bold font-['Raleway'] leading-relaxed ">
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default MobileSendForm;
