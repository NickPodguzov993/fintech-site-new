import redSearch from '../../public/images/location.svg'
import location2 from '../../public/images/location2.jpg'
import location3 from '../../public/images/location3.jpg'
import location4 from '../../public/images/location4.jpg'



const OurLocation = () => {

    const initialData = [
        {
            id: 1,
            img:location3,
            title:'Уютный и просторный офис',
            description:' Здесь все создано для удобства сотрудников: просторные помещения, современная техника, удобная мебель',

        },
        {
            id: 2,
            img:location2,
            title:'Оборудованные рабочие места',
            description:'В нашем офисе у каждого сотрудника оборудованно рабочее место',
        },
        {
            id: 3,
            img:location3,
            title:'Большая комната отдыха',
            description:'Комната отдыха обустроена всем необходимым для комфортного обеда и перекуса: кофемашина, холодильник, микроволновка и многое другое',
        },
        {
            id: 4,
            img:location4,
            title:'Open space пространство',
            description:'В нашем офисе присутствуют как отдельные комнаты так и открытые пространства, поэтому каждый может почувствовать себя как дома, что положительно сказывается на продуктивности работы.',
        },
    ]


    return (
        <div className="fc gap-8 justify-start items-start w-full mt-[400px] sm:hidden">
            <div className='hidden sm:flex justify-between  p-4'>
                <h2 className=' text-[32px] '>Мы в Ростове</h2>
                <img src={redSearch} />
            </div>

            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-4">
                    {initialData.map(c => (
                        <div
                             className="w-[300px] h-[625px] mx-1  flex-col justify-between items-start inline-flex">

                            <div className='w-[300px]  m-2 relative '>
                                <img src={c.img} className='rounded-[30px]'/>
                                <div
                                    className="w-[300px] h-[200px] p-3 absolute top-[291px] bottom-[0px] h-56  bg-neutral-100 rounded-[30px] flex-col justify-start items-start gap-4 inline-flex">
                                    <div className="w-[400px] h-[400px]  justify-center items-center inline-flex">
                                    </div>
                                    <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway'] leading-[30px]">{c.title}
                                    </div>
                                    <div
                                        className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-[21px]">{c.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>




    );
};

export default OurLocation;
