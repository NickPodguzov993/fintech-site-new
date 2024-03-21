import Maps from "./Maps";


const Contacts = () => {
    return (
        <div>
            <div className='hidden sm:block mt-[160px] w-[1400px]'>
                <div className="w-[1400px] h-[226px] justify-start items-center gap-8 inline-flex">
                    <div className="grow shrink basis-0 text-zinc-900 text-8xl font-medium font-['Raleway']">Наши контакты</div>
                    <div className="grow shrink basis-0 text-zinc-900 text-xl font-medium font-['Raleway'] leading-[30px]">We appreciate your interest in reaching out to us. Whether you have a question, feedback, or want to explore potential collaborations, we're here to assist you. Our team is committed to providing exceptional customer service and building long-lasting relationships with our valued clients.</div>
                </div>
                <div className="w-[1400px] h-[347px] justify-start items-start gap-8 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-px inline-flex">
                        <div className="self-stretch h-[190px] p-8 bg-neutral-100 rounded-[40px] flex-col justify-start items-center gap-4 flex">
                            <div className="text-zinc-900 text-xl font-medium font-['Raleway'] leading-[30px]">Наш email для ваших резюме</div>
                            <div className="justify-center items-start gap-px inline-flex">
                                <div className="px-8 py-4 bg-white rounded-[30px] justify-center items-center gap-4 flex">
                                    <div className="text-rose-600 text-[32px] font-medium font-['Raleway'] leading-[48px]">fintech@gmail.com</div>
                                </div>
                                <div className="w-24 self-stretch px-8 py-4 bg-white rounded-[30px] justify-center items-center gap-2.5 flex">
                                    <div className="w-8 h-8 relative" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[156px] p-8 bg-neutral-100 rounded-[40px] flex-col justify-start items-center gap-4 flex">
                            <div className="text-zinc-900 text-xl font-medium font-['Raleway'] leading-[30px]">Наш адрес </div>
                            <div className="self-stretch text-center text-zinc-900 text-xl font-bold font-['Raleway']">344034, Россия, Ростовская обл., Город Ростов-на-Дону, Портовая ул., 63, Офис 4</div>
                        </div>
                    </div>
                    <div className="w-[684px] self-stretch p-8 bg-rose-600 rounded-[40px] flex-col justify-center items-center gap-4 inline-flex">
                        <div className="w-16 h-16 p-[9.37px] bg-white rounded-[20px] justify-center items-center inline-flex">
                            <div className="w-8 h-8 relative origin-top-left rotate-[135deg] flex-col justify-start items-start flex" />
                        </div>
                        <div className="text-white text-xl font-medium font-['Raleway'] leading-[30px]">Мы в hh</div>
                        <div className="text-white text-[32px] font-medium font-['Raleway'] leading-[48px]">fintech@gmail.com</div>
                    </div>
                </div>
                <Maps/>
            </div>

            <div>
                <div className="sm:hidden mt-[120px] mb-[120px] w-[360px] h-[833px] px-4 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="w-[328px] text-zinc-900 text-5xl font-medium font-['Raleway']">Наши контакты</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal">We appreciate your interest in reaching out to us. Whether you have a question, feedback, or want to explore potential collaborations, we're here to assist you. Our team is committed to providing exceptional customer service and building long-lasting relationships with our valued clients.</div>
                    </div>
                    <div className="self-stretch h-[511px] flex-col justify-start items-start gap-8 flex">
                        <div className="self-stretch h-[339px] flex-col justify-start items-start gap-px flex">
                            <div className="self-stretch h-[156px] p-8 bg-neutral-100 rounded-[30px] flex-col justify-start items-center gap-4 flex">
                                <div className="text-zinc-900 text-base font-medium font-['Raleway'] leading-normal">Наш email для ваших резюме</div>
                                <div className="justify-center items-start gap-[0.50px] inline-flex">
                                    <div className="px-4 py-2 bg-white rounded-[15px] justify-center items-center gap-2 flex">
                                        <div className="text-rose-600 text-2xl font-medium font-['Raleway'] leading-9">fintech@gmail.com</div>
                                    </div>
                                    <div className="w-12 self-stretch p-4 bg-white rounded-[15px] justify-center items-center gap-2.5 flex">
                                        <div className="w-4 h-4 relative" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[182px] p-8 bg-neutral-100 rounded-[30px] flex-col justify-start items-center gap-4 flex">
                                <div className="text-zinc-900 text-base font-medium font-['Raleway'] leading-normal">Наш адрес </div>
                                <div className="self-stretch text-center text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed">344034, Россия, Ростовская обл., Город Ростов-на-Дону, Портовая ул., 63, Офис 4</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[140px] p-8 bg-rose-600 rounded-[30px] flex-col justify-center items-center gap-4 flex">
                            <div className="w-10 h-10 px-4 bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
                                <div className="w-4 h-4 relative origin-top-left rotate-[135deg]" />
                            </div>
                            <div className="text-white text-base font-medium font-['Raleway'] leading-normal">Мы в hh</div>
                            <div className="text-white text-2xl font-medium font-['Raleway'] leading-9">fintech@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <Maps/>
            <div className="w-[360px] h-[748px] px-4 py-8 bg-white rounded-[40px] flex-col justify-start items-center gap-8 inline-flex">
                <div className="text-center text-zinc-900 text-[32px] font-medium font-['Raleway'] leading-[48px]">Мы ждем вас!</div>
                <div className="self-stretch h-[604px] flex-col justify-start items-center gap-2 flex">
                    <div className="self-stretch p-4 bg-neutral-100 rounded-[30px] justify-start items-center gap-2.5 inline-flex">
                        <div className="text-black text-opacity-50 text-sm font-medium font-['Raleway']">ФИО</div>
                    </div>
                    <div className="self-stretch p-4 bg-neutral-100 rounded-[30px] justify-start items-center gap-2.5 inline-flex">
                        <div className="text-black text-opacity-50 text-sm font-medium font-['Raleway']">Email</div>
                    </div>
                    <div className="self-stretch p-4 bg-neutral-100 rounded-[30px] justify-start items-center gap-2.5 inline-flex">
                        <div className="text-black text-opacity-50 text-sm font-medium font-['Raleway']">Телефон</div>
                    </div>
                    <div className="w-[328px] h-40 p-4 bg-neutral-100 rounded-[30px] justify-start items-start gap-2.5 inline-flex">
                        <div className="text-black text-opacity-50 text-sm font-medium font-['Raleway']">Обращение</div>
                    </div>
                    <div className="self-stretch p-8 rounded-[20px] border border-stone-300 justify-center items-center gap-2 inline-flex">
                        <div className="w-6 h-6 justify-center items-center flex" />
                        <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">Добавить резюме</div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-2 inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="grow shrink basis-0"><span className="text-black text-opacity-50 text-sm font-normal font-['Raleway'] leading-[21px]">Я ознакомлен и согласен с условиями </span><span className="text-rose-600 text-sm font-bold font-['Raleway'] leading-snug">Политики конфиденциальности</span></div>
                    </div>
                    <div className="self-stretch h-[118px] p-8 bg-rose-600 rounded-[20px] flex-col justify-center items-center gap-1 flex">
                        <div className="w-6 h-6 relative" />
                        <div className="text-white text-base font-bold font-['Raleway'] leading-relaxed">Отправить</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contacts;
