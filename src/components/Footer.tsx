import arrow from '../../public/images/arrowBack.svg'
import {ThemeType} from "./DesktopHeader";
import BigLogo from "./svg/BigLogo";
import {NavLink} from "react-router-dom";
import Logo from "./svg/Logo";
import {useState} from "react";
import MobileSendForm from "./Wrapper/MobileSendForm";
import SendForm from "./Wrapper/SendForm";
import CloseMenuSvg from "./svg/CloseMenuSvg";


const Footer = ({theme}:ThemeType) => {
    const [openMessage,setOpenMessage] = useState(false)

    const getSendMessage = () => {
        setOpenMessage(!openMessage)

    }

    return (
        <div className='relative mb-[120px]'>
            <div
                className="sm:hidden w-[360px] h-[520px] px-4 py-8  rounded-[30px] flex-col justify-start items-start gap-8 inline-flex mb-[120px]">
                <div className="w-[110.84px] h-12 relative"><Logo theme={theme}/></div>
                <div className="self-stretch h-[312px] flex-col justify-start items-start gap-8 flex">
                    <div className="w-[195px] h-14 text-zinc-900 text-base font-medium font-['Mulish']"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>FinTech<br/>©
                        2024 All rights reserved
                    </div>
                    <div className="flex-col justify-start items-start flex">
                        <div
                            className="self-stretch h-12 px-4 rounded-[50px] justify-start items-center gap-2 inline-flex">
                            <NavLink  to="/">
                            <div
                                className=" text-base font-bold font-['Raleway'] leading-relaxed"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Главная
                            </div>
                            </NavLink>
                        </div>
                        <div
                            className="self-stretch h-12 px-4 rounded-[50px] justify-start items-center gap-2 inline-flex">
                            <NavLink  to="/contacts">
                                <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[#fff]'}  text-base font-bold font-['Raleway'] hover:text-rose-600 leading-relaxed pt-2`}
                                >Контакты</div>
                            </NavLink>
                        </div>
                        <div
                            className="self-stretch h-12 px-4 rounded-[50px] justify-start items-center gap-2 inline-flex">
                            <NavLink  to="/policies">
                                <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[#fff]'} text-base font-bold font-['Raleway'] hover:text-rose-600 leading-relaxed pt-2`}>Документы</div>
                            </NavLink>
                        </div>
                    </div>
                    <div onClick={getSendMessage}
                        className="w-[328px] h-12 pl-8 pr-1 bg-rose-600 rounded-[100px] justify-between items-center inline-flex">
                        <p className="text-white text-sm font-bold font-['Raleway'] leading-snug" >Связаться с нами
                        </p>
                        <div
                            className="w-10 h-10 p-2 bg-white rounded-[100px] justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 relative origin-top-left "><img src={arrow} /></div>
                        </div>
                        <div className='absolute top-[476px] right-[0px] w-full rounded-[30px] '>
                            <BigLogo theme={theme} width={'360'} height={'47'}/>
                        </div>
                    </div>
                    <div className='absolute left-[0]'>{openMessage && <MobileSendForm theme={theme} getSendMessage={getSendMessage}/>}</div>

                </div>
            </div>
            <div className="hidden w-[1400px] h-[363px] p-8  rounded-[40px] flex-col justify-start items-start gap-8 sm:inline-flex"
                 style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}} >
                <div className="w-[110.84px] h-12 relative" />
                <div className="self-stretch justify-between items-start inline-flex">
                    <div className="w-[195px] self-stretch text-zinc-900 text-base font-medium font-['Mulish']"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>FinTech<br/>© 2024 All rights reserved </div>
                    <div className="justify-start items-start flex">
                        <div className="w-[97px] px-4 rounded-[50px] justify-center items-center gap-2 flex">
                            <NavLink  to="/">
                                <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[#fff]'}  text-base font-bold font-['Raleway'] hover:text-rose-600 duration-300 leading-relaxed pt-2`}
                                >Главная</div>
                            </NavLink>
                        </div>
                        <div className="w-[109px] px-4 rounded-[50px] justify-center items-center gap-2 flex">
                            <NavLink  to="/contacts">
                                <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[#fff]'}  text-base font-bold font-['Raleway'] hover:text-rose-600 duration-300 leading-relaxed pt-2`}
                                >Контакты</div>
                            </NavLink>
                        </div>
                        <div className="w-[124px] px-4 rounded-[50px] justify-center items-center gap-2 flex">
                            <NavLink  to="/policies">
                                <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[#fff]'}  text-base font-bold font-['Raleway'] hover:text-rose-600 duration-300 leading-relaxed pt-2`}>Документы</div>
                            </NavLink>
                        </div>
                    </div>
                    <div onClick={getSendMessage} className="w-[230px] pl-8 pr-1 bg-rose-600 rounded-[100px] justify-start items-center gap-4 flex hover:bg-black_theme cursor-pointer duration-300">
                        <div  className="text-white text-base font-bold font-['Raleway'] leading-relaxed">Связаться с нами</div>
                        <div className="w-10 h-10 p-2 bg-white rounded-[100px] justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 relative origin-top-left " ><img className='hover:translate-x-2 duration-300' src={arrow}/></div>
                        </div>
                    </div>
                    {openMessage &&<div className='absolute left-[350px] top-[-240px] z-40'>
                        <SendForm getSendMessage={getSendMessage} theme={theme}/>
                        <div className='absolute left-[600px] top-[10px]' onClick={getSendMessage}><CloseMenuSvg theme={theme}/></div>
                    </div> }
                </div>
                <div className='absolute top-[225px] left-[100px]'><BigLogo theme={theme} width={'1200'} height={'137'}/></div>
            </div>

        </div>
    );
}

export default Footer;
