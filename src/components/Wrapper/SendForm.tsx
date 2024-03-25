import {FormEvent, useState} from 'react'
import emailjs from '@emailjs/browser';
import send from '../../../public/images/sendLetter.svg'
import {ThemeType} from "../DesktopHeader";

const SendForm = ({theme}:ThemeType) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [tel, setTel] = useState('');
    const [file, setFile] = useState('');
   // const [checked, setChecked] = useState(false);


    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_4zefeln';
        const templateId = 'template_39fcnqo';
        const publicKey = 'ogzlOXY1K8bShkOia';

        // Create a new object that contains dynamic template params
         const templateParams = {
             from_name: name,
             from_email: email,
             from_tel: tel,
             my_file: file,
             to_name: 'FinTech',
             message: message,
         };
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

        <div className='animate-fade-down animate-once animate-duration-1000 animate-delay-300 animate-ease-linear animate-normal'>
            <form encType="multipart/form-data" onSubmit={handleSubmit}
                  className={`${theme === 'light' ? "bg-white" : "bg-[black]"} hidden sm:block  flex-col  w-[668px] h-[716px] p-8  rounded-[40px] shadow  justify-start items-center gap-8 inline-flex`}>
                <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[#fff]'} self-stretch  text-5xl font-medium font-['Raleway']`}>Мы ждём вас!</div>
                <div className="self-stretch h-[358px] flex-col justify-start items-center gap-4 flex">
                    <input
                        type="text"
                        className={`${theme === 'light' ? "bg-neutral-100" : "bg-[#212121]"} self-stretch p-8  rounded-[40px] justify-start items-center gap-2.5
                         inline-flex text-black text-opacity-50 text-base font-medium font-['Raleway']`}
                        placeholder="ФИО"
                        name='from_name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">

                        <input
                            type="email"
                            className={`${theme === 'light' ? "bg-neutral-100" : "bg-[#212121]"} grow shrink basis-0 h-[83px] p-8  rounded-[40px] justify-start items-center gap-2.5 flex text-black text-opacity-50 text-base font-medium font-['Raleway']`}
                            placeholder="Email"
                            name='from_email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="tel"
                            className={`${theme === 'light' ? "bg-neutral-100" : "bg-[#212121]"} grow shrink basis-0 h-[83px] p-8 rounded-[40px]
                             justify-start items-center gap-2.5 flex text-black text-opacity-50 text-base font-medium font-['Raleway']`}
                            placeholder="Телефон"
                            name='from_tel'
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />
                    </div>

                    <textarea
                        className={`${theme === 'light' ? "bg-neutral-100" : "bg-[#212121]"} w-[608px] mt-[20px] h-40 p-8  rounded-[40px]
                         justify-start items-start gap-2.5 inline-flex text-black text-opacity-50 text-base font-medium font-['Raleway']`}
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
                <div className="block">
                    <input
                        type="text"
                        className={`${theme === 'light' ? "bg-neutral-100" : "bg-[#212121]"} self-stretch mt-[40px] p-8  w-[344px] rounded-[40px] justify-start
                         items-center gap-2.5 inline-flex text-black text-opacity-50 text-base font-medium font-['Raleway']`}
                        placeholder="Ссылка на резюме"
                        name='my_file'
                        value={file}
                        onChange={(e) => setFile(e.target.value)}
                    />
                    <button type="submit" className="w-[250px] h-[88px] ml-[10px] p-8 bg-rose-600 hover:bg-rose-700 mt-[80px]  duration-300 rounded-[20px] flex justify-center items-center gap-1 inline-flex">
                        <div className="text-white text-base font-bold font-['Raleway'] leading-relaxed">  Отправить</div>
                        <div className="w-6 h-6 ml-[10px]"><img src={send}/></div>
                    </button>
                </div>
            </form>
        </div>

    )
}


export default SendForm;
