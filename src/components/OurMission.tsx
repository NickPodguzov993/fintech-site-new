
import redSearch from '../../public/images/redSearch.svg'
import {ThemeType} from "./DesktopHeader";


const OurMission = ({theme}:ThemeType) => {



    return (
        <div className="fc gap-8 justify-start items-start w-full sm:hidden">
            <div className='flex p-4'>
                <h2 className=' text-[32px] '  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Наша миссия и ценности</h2>
                <img src={redSearch} />
            </div>

            <div className="w-[328px] pl-4"><span className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal"
                                             style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Мы помогаем нашим клиентам</span>
                <span className="text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                    оптимизировать свои бизнес-процессы, внедрять новые технологии и повышать эффективность работы. </span>
            </div>
            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-4 mt-[40px]">


                    <div className="w-[300px] h-[480px] mr-2 relative  bg-no-repeat
                         bg-[top_75px_right_-120px] bg-[url('/images/Union.svg')]">
                        <div className={`${theme === 'light' ? 'bg-neutral-100' : 'bg-neutral-800'} h-[196px] p-8 left-0 top-[284px] absolute 
                         bg-opacity-20 rounded-[40px] backdrop-blur-[30px] flex-col justify-start items-start gap-2 inline-flex`}>
                            <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Экспертность</div>
                            <div className="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Мы аккумулируем полученный опыт и постоянно продолжаем учиться и развиваться. Рост компетенций для нас приоритет.</div>
                        </div>
                    </div>
                    <div className="w-[300px] h-[480px] mr-2 flex-col justify-start gap-1 items-center  inline-flex ">
                        <div
                            className="self-stretch grow shrink basis-0 p-8 bg-neutral-100 rounded-[40px]  flex-col justify-start items-start gap-2 flex"
                            style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div
                                className="self-stretch text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Проактивность
                            </div>
                            <div className="self-stretch text-zinc-900 text-sm font-bold font-['Raleway']  leading-snug" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Мы
                                способны и готовы действовать, предлагать, пробовать, опережая современные тенденции (реалии).
                            </div>
                        </div>
                        <div
                            className="self-stretch grow shrink basis-0 p-8 bg-neutral-100  rounded-[40px] flex-col justify-start items-start gap-2 flex"
                            style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div
                                className="self-stretch text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Поощрение
                                инициатив
                            </div>
                            <div className="self-stretch justify-start items-start gap-4 inline-flex">
                                <div
                                    className="grow shrink basis-0 text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Мы
                                    стимулируем живой интерес, увлеченность и идейность наших сотрудниковю.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-[300px] h-[480px] mr-2 p-8 bg-rose-600 rounded-[40px] flex-col justify-end items-start gap-2 inline-flex relative
                bg-[top_-135px_right_-40px] bg-no-repeat bg-[url('/images/figureForMission.svg')]">

                        <div className="self-stretch text-white text-2xl font-medium font-['Raleway'] leading-9">Инновационность
                            подходов
                        </div>
                        <div className="self-stretch text-white text-sm font-bold font-['Raleway'] leading-snug">Мы стремимся
                            найти принципиально новые варианты решений, смотреть шире и пробовать, тестировать гипотезы.
                        </div>
                    </div>
                    <div
                        className="w-[300px] h-[480px] p-8 bg-neutral-100 rounded-[40px] flex-col justify-start items-start gap-4 inline-flex"
                        style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                        <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Ориентация
                            на клиента
                        </div>
                        <div className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Мы
                            работаем для наших клиентов и партнеров, поэтому их интересы = наши интересы.
                        </div>
                    </div>

                </div>
            </div>
        </div>




    );
};

export default OurMission;
