import {useState} from "react";
import goals1 from '../../public/images/goals1.png'
import goals2 from '../../public/images/goals2.png'
import goals3 from '../../public/images/goals3.png'
import star from '../../public/images/star.svg'
import light from '../../public/images/lightning.svg'
import rocket from '../../public/images/rocket.svg'
import StarSvg from "./svg/StarSvg";
import {ThemeType} from "./DesktopHeader";


const SliderGoals = ({theme}:ThemeType) => {

    const initialData = [
        {
            id: 1,
            title:'Качество',
            svg: star,
            description:'Высокое качество сопровождения и взаимодействия с проектами и их подразделениями',
            img:goals1,
        },
        {
            id: 2,
            title:'Риски',
            svg: light,
            description:'Минимизация всех видов рисков проектов',
            img:goals2,

        },
        {
            id: 3,
            title:'Развитие',
            svg: rocket,
            description:'Развитие компетенций в профессиональных направлениях и рост экспертизы УК в В2В и В2С сферах',
            img:goals3,

        },
    ]
    const [cards, setCards] = useState(initialData);
    const touchStart = (id: number) : void => {
        const updatedData = cards.map(c => {
            if (id === c.id) {
                return { ...c, isHovered: true };
            }
            return c;
        });

        setCards(updatedData);
    };

    const touchEnd = (id: number): void => {
        const updatedContent = cards.map(c => {
            if (id === c.id) {
                return { ...c, isHovered: false };
            }
            return c;
        });

        setCards(updatedContent);
    };

    return (
        <div className="fc gap-8 justify-start items-start w-full sm:hidden">
            <h2 className='text-[#FF1744] text-[48px] p-4'>Наши цели</h2>
            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className="sm:hidden w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-4">
                    {cards.map(c => (
                        <div onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                             className="w-[300px]  h-[332px]   flex-col justify-between items-start ml-2 inline-flex">
                                <div className="w-[300px] h-[332px] rounded-[30px] flex-col justify-start items-start inline-flex"  style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                                    <div className="self-stretch grow shrink basis-0 p-4 flex-col justify-start items-center gap-4 flex">
                                        <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                            <div className="w-6 h-6 px-0.5 pt-0.5 pb-[2.88px] justify-center items-center flex" >
                                                <img src={c.svg}/></div>
                                            <div className="grow shrink basis-0 text-rose-600 text-2xl font-medium font-['Raleway'] leading-9" >{c.title}</div>
                                        </div>
                                        <div className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-snug" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                            {c.description}</div>
                                    </div>
                                    <img className="self-stretch h-40 p-4 rounded-[30px]" src={c.img} />
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>




    );
};

export default SliderGoals;
