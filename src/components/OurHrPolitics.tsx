
import {ThemeType} from "./DesktopHeader";
import CakeSvg from "./svg/CakeSvg";
import LoyalitySvg from "./svg/LoyalitySvg";
import EducationSvg from "./svg/EducationSvg";


const OurHrPolitics = ({theme}:ThemeType) => {



    return (
        <div className="fc gap-8 justify-start items-start w-full">
            <div className='flex p-4'>
                <h2 className=' text-[32px] sm:text-[64px]' style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}
                    data-aos="fade-down"
                    data-aos-delay="250"
                    data-aos-duration="1000">Наша HR-политика</h2>
            </div>

            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden sm:overflow-y-scroll">
                <div className="flex flex-row  px-4 sm:hidden">

                        <div
                             className="w-[300px]  h-[332px] mr-2 sm:w-[400px] sm:h-[402px] sm:  flex-col justify-between items-start inline-flex">

                            <div className="w-[300px] h-[290px]  sm:w-[400px] sm:h-[402px]  flex-col justify-start items-start inline-flex">
                                <div className="self-stretch h-32 p-4  rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex"
                                     style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                                    <div className="px-4 py-2  rounded-[20px] justify-center items-center gap-[100px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                        <div className=" text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заработная</div>
                                    </div>
                                    <div className="px-4 py-2 rounded-[20px] justify-center items-center gap-[100px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                        <div className="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9"
                                             style={{color: theme === 'light' ? '#1B1B1B' : 'white'}} >плата</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[162px] p-4  rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-end gap-4 flex"
                                     style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                                    <div className="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug"
                                         style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заработная плата пересматривается ежегодно по итогам Perfomance Rewier</div>
                                    <div className="p-2  rounded-[10px] justify-start items-end gap-[26px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                        <div ><LoyalitySvg width={'36'} height={'36'} theme={theme}/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="w-[300px] h-[290px] mr-2 sm:w-[400px] sm:h-[402px] flex-col justify-start items-start inline-flex">
                        <div className="self-stretch h-32 p-4 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Реферальный</div>
                            </div>
                            <div className="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>бонус</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[162px] p-4 rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-end gap-4 flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug"
                                 style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Порекомендуй компании талантливого кандидата и получи премию</div>
                            <div className="p-2 rounded-[10px] justify-start items-end gap-[26px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div ><EducationSvg theme={theme} width={'36'} height={'36'}/></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] h-[290px] mr-2 sm:w-[400px] sm:h-[402px] flex-col justify-start items-start inline-flex">
                        <div className="self-stretch h-32 p-4 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Кафетерий</div>
                            </div>
                            <div className="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>бенефитов</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[162px] p-4 rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-end gap-4 flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug"
                                 style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Компенсация занятий спортом, увлечений, обучающих курсов с трудовой фиксацией</div>
                            <div className="p-2  rounded-[10px] justify-start items-end gap-[26px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div ><CakeSvg theme={theme} width={'36'} height={'36'}/></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] h-[290px] sm:w-[400px] sm:h-[402px] flex-col justify-start items-start inline-flex">
                        <div className="self-stretch h-32 p-4 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Vel accumsan</div>
                            </div>
                            <div className="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Ornare amet, tortor</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[162px] p-4 rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-end gap-4 flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug"
                                 style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>In est. Dictum non consectetur consectetur elit. Non sit e.</div>
                            <div className="p-2 mt-5  rounded-[10px] justify-start items-end gap-[26px] inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div ><EducationSvg theme={theme} width={'36'} height={'36'}/></div>
                            </div>
                        </div>
                    </div>

                </div>



                <div className='hidden sm:flex'>
                    <div className={`${theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-[#212121]'} w-[300px] h-[290px]  sm:w-[400px] sm:h-[402px] flex-col 
                    justify-start items-start inline-flex ml-2 overflow-x-auto duration-500 hover:bg-rose-600
         rounded-[40px] hover:text-white`}
                        >
                        <div
                            className="self-stretch h-[164px] p-4 sm:p-8  flex-col justify-start items-start flex hover:rounded-t-[20px]">
                            <div className="px-4 py-2 rounded-[20px] justify-center items-center gap-2.5 inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заработная</div>
                            </div>
                            <div className="px-4 py-2  rounded-[20px] justify-center items-center gap-2.5 inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>плата</div>
                            </div>
                        </div>
                        <div
                            className="self-stretch grow shrink basis-0 p-4 sm:p-8 rounded-bl-[40px] rounded-br-[40px] flex-col justify-between items-end flex ">
                            <div
                                className={` self-stretch text-zinc-900 text-sm sm:text-base font-bold font-['Raleway'] leading-relaxed`}
                                style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заработная плата пересматривается ежегодно по итогам Perfomance Rewier
                            </div>
                            <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[white]'} sm:p-4 rounded-[20px] justify-start items-end gap-[26px] inline-flex`}>
                                <div className="w-20 h-20 p-4 bg-white rounded-[20px] justify-start items-end gap-[26px] inline-flex"
                                     style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                   <LoyalitySvg width={'48'} height={'48'} theme={theme}/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={`${theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-[#212121]'} w-[300px] h-[290px]  sm:w-[400px] sm:h-[402px] flex-col justify-start 
                    items-start inline-flex ml-2 overflow-x-auto duration-500 hover:bg-rose-600
         rounded-[40px] hover:text-white`}
                        >
                        <div
                            className="self-stretch h-[164px] p-8  flex-col justify-start items-start flex hover:rounded-t-[20px]"
                            >
                            <div className="px-4 py-2 rounded-[20px] justify-center items-center gap-2.5 inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Реферальный</div>
                            </div>
                            <div className="px-4 py-2  rounded-[20px] justify-center items-center gap-2.5 inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>бонус</div>
                            </div>
                        </div>
                        <div
                            className="self-stretch grow shrink basis-0 p-8 rounded-bl-[40px] rounded-br-[40px] flex-col justify-between items-end flex ">
                            <div
                                className={` self-stretch text-zinc-900 text-sm sm:text-base font-bold font-['Raleway'] leading-relaxed`}
                                style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Порекомендуй компании талантливого кандидата и получи премию
                            </div>
                            <div className="w-20 h-20 p-4 bg-white rounded-[20px] justify-start items-end gap-[26px] inline-flex"
                                 style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <EducationSvg theme={theme}  width={'48'} height={'48'}/>
                            </div>
                        </div>
                    </div>

                    <div className={`${theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-[#212121]'} w-[300px] h-[290px]  sm:w-[400px] sm:h-[402px] 
                    flex-col justify-start items-start inline-flex ml-2 duration-500 overflow-x-auto hover:bg-rose-600
         rounded-[40px] hover:text-white`}
                        >
                        <div
                            className="self-stretch h-[164px] p-8  flex-col justify-start items-start flex hover:rounded-t-[20px]">
                            <div className="px-4 py-2 rounded-[20px] justify-center items-center gap-2.5 inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Кафетерий</div>
                            </div>
                            <div className="px-4 py-2  rounded-[20px] justify-center items-center gap-2.5 inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>бенефитов</div>
                            </div>
                        </div>
                        <div
                            className="self-stretch grow shrink basis-0 p-8 rounded-bl-[40px] rounded-br-[40px] flex-col justify-between items-end flex ">
                            <div
                                className={` self-stretch text-zinc-900 text-sm sm:text-base font-bold font-['Raleway'] leading-relaxed`}
                                style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Компенсация занятий спортом, увлечений, обучающих курсов с трудовой фиксацией
                            </div>
                            <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[white]'} p-4 rounded-[20px] justify-start items-end gap-[26px] inline-flex`}>
                                <div className="w-20 h-20 p-4 bg-white rounded-[20px] justify-start items-end gap-[26px] inline-flex"
                                     style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                    <CakeSvg theme={theme}  width={'48'} height={'48'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-[#212121]'} w-[300px] h-[290px]  sm:w-[400px] sm:h-[402px] 
                    flex-col justify-start items-start inline-flex ml-2 overflow-x-auto duration-500 hover:bg-rose-600
         rounded-[40px] hover:text-white`}
                         >
                        <div
                            className="self-stretch h-[164px] p-8  flex-col justify-start items-start flex hover:rounded-t-[20px]">
                            <div className="px-4 py-2 rounded-[20px] justify-center items-center gap-2.5 inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Vel accumsan</div>
                            </div>
                            <div className="px-2 py-2  rounded-[20px] justify-center items-center gap-2.5 inline-flex" style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                <div className="text-zinc-900 text-2xl sm:text-[32px] font-medium font-['Raleway']"
                                     style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Ornare amet, tortor</div>
                            </div>
                        </div>
                        <div
                            className="self-stretch grow shrink basis-0 p-8 rounded-bl-[40px] rounded-br-[40px] flex-col justify-between items-end flex ">
                            <div
                                className={` self-stretch text-zinc-900 text-sm sm:text-base font-bold font-['Raleway'] leading-relaxed`}
                                style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>In est. Dictum non consectetur consectetur elit. Non sit e.
                            </div>
                            <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[white]'} p-4 rounded-[20px] justify-start items-end gap-[26px] inline-flex`}>
                                <div className="w-20 h-20 p-4 bg-white rounded-[20px] justify-start items-end gap-[26px] inline-flex"
                                     style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                                    <EducationSvg theme={theme}  width={'48'} height={'48'}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>




    );
};

export default OurHrPolitics;
