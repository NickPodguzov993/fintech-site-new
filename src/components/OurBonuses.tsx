import { useState} from "react";
import Dms from "../../public/images/dms.jpg";
import Ball from "../../public/images/ball.png";
import Education from "../../public/images/education.jpg";
import Gift from "../../public/images/gift.jpg";
import Events from "../../public/images/events.jpg";
import Save from "../../public/images/save.jpg";
import Help from "../../public/images/help.jpg";
import heart from "../../public/images/heart.svg";
import Dinners from "../../public/images/dinners.jpg";
import LearnEnglish from "../../public/images/learnEnglish.jpg";
import {superObj} from "./BonusesDesktop";
import {ThemeType} from "./DesktopHeader";
import BonusDescriptionMobile from "./BonusDescriptionMobile";


const OurBonuses = ({theme}: ThemeType) => {




    const superObj2 = [
        {
            id: '01',
            title: 'Медицина и ДМС',
            description: 'У нас действуют специальные условия ДМС для работников',
            img: Dms

        },
        {
            id: '02',
            title: 'Кафетерий бенефитов',
            description: 'Возмещение затрат на посещение спортивных секций или клубов',
            img: Ball
        },
        {
            id: '03',
            title: 'Обучение и развитие',
            description: 'Мы предоставляем нашим сотрудникам возможность проходить различные тренинги и курсы, которые помогают им улучшить свои профессиональные навыки',
            img: Education
        },
        {
            id: '04',
            title: 'Подарки сотрудникам',
            description: 'День рождения сотрудника, семейные торжества (день рождения ребенка, свадьба, подарок ко дню ухода в отпуск по беременности и родам - Baby-box',
            img: Gift
        },
        {
            id: '05',
            title: 'Корпоративные мероприятия',
            description: 'День защитника Отечества, Международный женский день, День рождения компании, Family day, Children\'s day, Празднование Нового года',
            img: Events
        },
        {
            id: '06',
            title: 'Страхование',
            description: 'Финансовая поддержка с банком-партнером',
            img: Save
        },
        {
            id: '07',
            title: 'Материальная помощь',
            description: 'В жизни могут происходить самые разные обстоятельства, мы это прекрасно понимаем и потому мы готовы помочь сотрудникам, которые оказались в затруднительной ситуации',
            img: Help
        },
        {
            id: '08',
            title: 'Happy hours',
            description: 'Каждый четверг у нас «Happy hours». Организовываем вкусный обед или перекус для всех сотрудников Компании.',
            img: Dinners
        },
        {
            id: '09',
            title: 'Изучение английского языка',
            description: 'Корпоративный английский. Организовываем занятия несколько раз в неделю.',
            img: LearnEnglish
        },
    ]

    const [index, setIndex] = useState<string>('01')
    // const [isClicked, setIsClicked] = useState(false)

    /* useEffect(() => {

         if (isClicked) {
             setIsClicked(false)
         } else {
             const interval = window.setInterval(() => {
                 const max = Math.floor(Object.keys(superObj).length + 1);

                 setIndex(`0${Math.floor(Math.random() * (max - 1) + 1)}`)

             }, 3000,)

             return () => clearInterval(interval)
         }
     }, [isClicked])*/

    const handleClick = (key: string) => {
        setIndex(key)
    }

    return (
        <div className="sm:hidden fc gap-8 justify-start items-start w-full relative mt-[120px]">
            <div className="w-[328px] h-16 px-[16px] justify-between items-center inline-flex">
                <div className="text-zinc-900 text-[32px] font-medium font-['Raleway'] leading-[48px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Наши бонусы</div>
                <div className="p-4 bg-rose-600 rounded-[20px] justify-start items-center gap-2.5 flex">
                    <div className="w-8 h-8 relative"><img src={heart}/></div>
                </div>
            </div>
            <div className=" text-white text-base font-medium font-['Raleway'] mb-[32px] px-4
            leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Для наших сотрудников мы разработали ценностное предложение, основанное на современных HR-методиках.
            </div>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <BonusDescriptionMobile config={superObj[index]} theme={theme}/>
                <div className="flex flex-row  px-4  ">
                    {superObj2.map((c, index) => {
                            if (index < 4) {
                                return (
                                    <div>
                                        <div key={c.id} onClick={() => handleClick(c.id)}
                                             className={`${theme === 'light' ? "bg-white_theme text-rose-600" : "bg-black-theme text-white_theme border-none"}
                                             w-[290px] h-[58px] mx-1 px-3   bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 mb-2 inline-flex`}
                                             style={{backgroundColor: theme === 'light' ? 'white' : '#212121'}} >
                                            <div
                                                className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed" style={{color: theme === 'light' ? '#FF1744' : 'white'}}>{c.id}</div>
                                            <div
                                                className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#FF1744' : 'white'}}>{c.title}
                                            </div>
                                        </div>
                                    </div>
                                );
                            } return null;
                        }
                    )
                    }


                </div>

                <div className="flex flex-row  px-4  ">
                    {superObj2.map((c, index) => {
                            if (index > 3) {
                                return (
                                    <div>
                                        <div key={c.id} onClick={() => handleClick(c.id)}
                                             className={`${theme === 'light' ? "bg-white_theme text-rose-600" : "bg-black-theme text-white_theme border-none"}
                                             w-[290px] h-[58px] mx-1 px-3   bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex`}
                                             style={{backgroundColor: theme === 'light' ? 'white' : '#212121'}}
                                             >
                                            <div
                                                className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed" style={{color: theme === 'light' ? '#FF1744' : 'white'}}>{c.id}</div>
                                            <div
                                                className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#FF1744' : 'white'}}>{c.title}
                                            </div>
                                        </div>
                                    </div>
                                );
                            } return null;

                        }
                    )
                    }


                </div>
            </div>

        </div>


    );
};

export default OurBonuses;
