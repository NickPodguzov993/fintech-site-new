import CloseMenuSvg from "./svg/CloseMenuSvg";
import {NavLink} from "react-router-dom";
import arrow from "../../public/images/arrowBack.svg";

type MenuType = {
    openMenu:()=>void
    theme:string
}


const BurgerMenu = ({openMenu, theme}:MenuType) => {
    return (
        <div className="w-[360px] h-[432px] px-4 fixed z-30 rounded-tl-[20px]  rounded-tr-[20px] flex-col justify-start items-center gap-8 inline-flex"
             data-aos="fade-down"
             data-aos-delay="250"
             data-aos-duration="1000"
             style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
            <div className="w-12 h-12 p-2.5 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 p-[2.26px] justify-center items-center flex">
                    <div className="w-[11.49px] h-[11.49px] absolute right-[60px] " onClick={openMenu}><CloseMenuSvg theme={theme}/>
                    </div>
                </div>
            </div>
            <div className="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Меню</div>
            <div className="self-stretch h-28 flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch h-12 px-4 rounded-[50px] justify-center items-center gap-2 inline-flex">
                    <NavLink  to="/contacts">
                        <div className= {`  text-base font-bold font-['Raleway']  sm:block hover:text-rose_theme  leading-relaxed pt-2 
                                `}
                             onClick={openMenu} style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Контакты</div>
                    </NavLink>
                </div>
                <div className="self-stretch h-12 px-4 rounded-[50px] justify-center items-center gap-2 inline-flex">
                    <NavLink  to="/policies">
                        <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[#fff]'}  
                        text-base font-bold font-['Raleway']  sm:block hover:text-rose-600 leading-relaxed pt-2`} onClick={openMenu}
                             style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Документы</div>
                    </NavLink>
                </div>
            </div>
            <div className="w-[230px] pl-8 pr-1 bg-rose-600 rounded-[100px] justify-start items-center gap-4 flex">
                <div className="text-white text-base font-bold font-['Raleway'] leading-relaxed" >Связаться с нами</div>
                <div className="w-10 h-10 p-2 bg-white rounded-[100px] justify-center items-center gap-2.5 flex">
                    <div className="w-6 h-6 relative origin-top-left " ><img className='hover:translate-x-2 duration-300' src={arrow}/></div>
                </div>
            </div>
            <div className="self-stretch py-4 border-t border-neutral-100 justify-start items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>344034, Россия, Ростовская обл., Город Ростов-на-Дону, Портовая ул., 63, Офис 4</div>
            </div>
        </div>
    );
};

export default BurgerMenu;