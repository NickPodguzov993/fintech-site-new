import redSearch from '../../public/images/location.svg'
import {ThemeType} from "./DesktopHeader";




const OurLocation = ({theme}:ThemeType) => {


    return (
        <div className="fc gap-8 justify-start items-start w-full mt-[400px] mb-[120px] sm:hidden">
            <div className='hidden sm:flex justify-between  p-4'>
                <h2 className=' text-[32px] '>Мы в Ростове</h2>
                <img src={redSearch} />
            </div>

            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-2">


                        <div
                             className="flex flex-col rounded-[30px] mr-2
                          p-8 rounded-[30px] bg-cover bg-center h-[525px] w-[300px] bg-[url('/images/image1.jpg')]">


                            <div className="flex justify-end">
                                <div className="flex self-end flex-col gap-4 duration-300 relative">

                                    <div className={`${theme === 'light' ? 'bg-[url(/images/figureForMission.svg)]' : 'bg-[url(/images/figureForMissionDark.svg)]'}  h-56  p-8  rounded-[30px] right-[-35px] top-[269px] flex-col justify-start items-start gap-4 flex absolute
                                     bg-no-repeat bg-cover bg-[top_45px_left_60px]`} style={{backgroundColor: theme === 'light' ? '#F5F5F5 ' : '#212121'}}>
                                        <div className="w-[240px] h-[224px]  justify-center items-center inline-flex ">

                                        </div>
                                        <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway'] leading-[30px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Уютный и просторный офис</div>
                                        <div className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-[21px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                            Здесь все создано для удобства сотрудников: просторные помещения, современная техника, удобная мебель</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    <div
                        className="flex flex-col rounded-[30px]  mr-2
                          p-8 rounded-[30px] bg-cover bg-center h-[525px] w-[300px] bg-[url('/images/image2.jpg')]">


                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-4 duration-300 relative">

                                <div className={`${theme === 'light' ? 'bg-[url(/images/figureForMission.svg)]' : 'bg-[url(/images/figureForMissionDark.svg)]'}  h-56  p-8  rounded-[30px] right-[-35px] top-[269px] flex-col justify-start items-start gap-4 flex absolute
                                     bg-no-repeat bg-cover bg-[top_45px_left_60px]`} style={{backgroundColor: theme === 'light' ? '#F5F5F5 ' : '#212121'}}>
                                    <div className="w-[240px] h-[224px]  justify-center items-center inline-flex ">

                                    </div>
                                    <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway'] leading-[30px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Оборудованные рабочие места</div>
                                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-[21px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                        В нашем офисе у каждого сотрудника оборудованно рабочее место</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col rounded-[30px]  mr-2
                          p-8 rounded-[30px] bg-cover bg-center h-[525px] w-[300px] bg-[url('/images/image3.jpg')]">


                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-4 duration-300 relative">

                                <div className={`${theme === 'light' ? 'bg-[url(/images/figureForMission.svg)]' : 'bg-[url(/images/figureForMissionDark.svg)]'}  h-56  p-8  rounded-[30px] right-[-35px] top-[269px] flex-col justify-start items-start gap-4 flex absolute
                                     bg-no-repeat bg-cover bg-[top_45px_left_60px]`} style={{backgroundColor: theme === 'light' ? '#F5F5F5 ' : '#212121'}}>
                                    <div className="w-[240px] h-[224px]  justify-center items-center inline-flex ">

                                    </div>
                                    <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway'] leading-[30px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Большая комната отдыха</div>
                                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-[21px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                        Комната отдыха обустроена всем необходимым для комфортного обеда и перекуса</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col rounded-[30px]
                          p-8 rounded-[30px] bg-cover bg-center h-[525px] w-[300px] bg-[url('/images/image4.jpg')]">


                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-4 duration-300 relative">

                                <div className={`${theme === 'light' ? 'bg-[url(/images/figureForMission.svg)]' : 'bg-[url(/images/figureForMissionDark.svg)]'}  h-56  p-8  rounded-[30px] right-[-35px] top-[269px] flex-col justify-start items-start gap-4 flex absolute
                                     bg-no-repeat bg-cover bg-[top_45px_left_60px]`} style={{backgroundColor: theme === 'light' ? '#F5F5F5 ' : '#212121'}}>
                                    <div className="w-[240px] h-[224px]  justify-center items-center inline-flex ">

                                    </div>
                                    <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway'] leading-[30px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Open space пространство </div>
                                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-[21px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                        В нашем офисе присутствуют как отдельные комнаты так и открытые пространства</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default OurLocation;
