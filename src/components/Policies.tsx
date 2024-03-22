import {ThemeType} from "./DesktopHeader";

const Policies = ({theme}:ThemeType) => {
    return (
        <div>
            <div className='hidden sm:flex mt-[160px] mb-[160px] animate-fade-down animate-once animate-duration-1000 animate-delay-300 animate-ease-linear animate-normal' >

                <div className="w-[800px] h-[1036px] flex-col justify-start items-end gap-16 inline-flex">
                    <div className="self-stretch justify-start items-center gap-8 inline-flex">
                        <div className="text-zinc-900 text-[64px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Документы</div>
                        <div className="p-6 bg-neutral-100 rounded-[30px] justify-start items-center gap-2.5 flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="w-12 h-12 px-[2.49px] justify-center items-center flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                                <div className="w-[43.02px] h-12 relative" >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[876px] flex-col justify-start items-end gap-8 flex">
                        <div className="self-stretch text-zinc-900 text-[32px] font-medium font-['Raleway'] leading-[48px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Политика конфиденциальности</div>
                        <div className="self-stretch h-[159px] flex-col justify-start items-end gap-4 flex">
                            <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заголовок</div>
                            <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Vulputate sit vel amet eget ex. Amet, tempus eget eleifend eleifend molestie et. Vel nec vulputate accumsan ornare justo interdum libero, in non elit. Malesuada dictum amet sodales vestibulum ornare luctus et arcu dapibus quis, ex. Ornare justo sit faucibus. Amet, quis, mauris pulvinar odio. Augue amet, malesuada molestie sit amet, mattis et nisi cras tortor, sodales eleifend amet, consectetur cursus dapibus sed justo interdum amet, morbi sit sed et amet, faucibus. Risus amet, sapien nulla mattis et. Ornare lore.</div>
                        </div>
                        <div className="self-stretch h-[159px] flex-col justify-start items-end gap-4 flex">
                            <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']">Заголовок</div>
                            <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Lorem ipsum dolo<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis<br/>Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                        <div className="self-stretch h-[159px] flex-col justify-start items-end gap-4 flex">
                            <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заголовок</div>
                            <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Lorem ipsum dolo<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis<br/>Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                        <div className="self-stretch h-[223px] flex-col justify-start items-end gap-4 flex">
                            <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заголовок</div>
                            <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Vulputate sit vel amet eget ex. Amet, tempus eget eleifend eleifend molestie et. Vel nec vulputate accumsan ornare justo interdum libero, in non elit. Malesuada dictum amet sodales vestibulum ornare luctus et arcu dapibus quis, ex. Ornare justo sit faucibus. Amet, quis, mauris pulvinar odio. Augue amet, malesuada molestie sit amet, mattis et nisi cras tortor, sodales eleifend amet, consectetur cursus dapibus sed justo interdum amet, morbi sit sed et amet, faucibus. Risus amet, sapien nulla mattis et. Ornare lore.</div>
                            <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Eleifend sit odio. Justo tortor, velit eleifend sed eget vestibulum sodales amet, mattis amet, mauris in mattis sit dolor pulvinar integer ornare nulla pellentesque imperdiet malesuada cras orci, amet, et.</div>
                        </div>
                    </div>
                </div>

                <div className="w-[504px] h-[273px] flex-col justify-start items-start gap-8 inline-flex">
                    <div className="text-zinc-900 text-xl font-bold font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Список документов</div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex flex-wrap">
                        <div className="px-6 py-4 bg-rose-600 rounded-[20px] justify-center items-center gap-4 flex">
                            <div className="text-white text-xl font-medium font-['Raleway'] leading-[30px]">Политика конфиденциальности</div>
                        </div>
                        <div className="px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-4 flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="text-rose-600 text-xl font-medium font-['Raleway'] leading-[30px]" >Согласие на обработку персональных данных</div>
                        </div>
                        <div className="px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-4 flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="text-rose-600 text-xl font-medium font-['Raleway'] leading-[30px]" >Текст</div>
                        </div>
                        <div className="px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-4 flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="text-rose-600 text-xl font-medium font-['Raleway'] leading-[30px]">Текст</div>
                        </div>
                        <div className="px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-4 flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="text-rose-600 text-xl font-medium font-['Raleway'] leading-[30px]">Текст</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden w-[360px] mt-[120px]  px-4 flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="grow shrink basis-0 text-zinc-900 text-[40px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Документы</div>
                    <div className="p-4 bg-neutral-100 rounded-[20px] justify-start items-center gap-2.5 flex" style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                        <div className="w-8 h-8 px-[1.66px] justify-center items-center flex" >
                            <div className="w-[28.68px] h-8 relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch p-2 bg-neutral-100 rounded-[30px] justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch justify-start items-start gap-4 flex">
                        <div className="px-6 py-4 bg-rose-600 rounded-[20px] justify-center items-center gap-2 flex">
                            <div className="text-white text-base font-medium font-['Raleway'] leading-normal">Политика конфиденциальности</div>
                        </div>
                       {/* <div className="px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 flex">
                            <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Согласие на обработку персональных данных</div>
                        </div>
                        <div className="px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 flex">
                            <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Текст</div>
                        </div>
                        <div className="px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 flex">
                            <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Текст</div>
                        </div>
                        <div className="px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 flex">
                            <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Текст</div>
                        </div>*/}
                    </div>
                </div>
                <div className="self-stretch h-[1456px] flex-col justify-start items-end gap-4 flex">
                    <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Политика конфиденциальности</div>
                    <div className="self-stretch h-[346px] flex-col justify-start items-end gap-2 flex">
                        <div className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заголовок</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Vulputate sit vel amet eget ex. Amet, tempus eget eleifend eleifend molestie et. Vel nec vulputate accumsan ornare justo interdum libero, in non elit. Malesuada dictum amet sodales vestibulum ornare luctus et arcu dapibus quis, ex. Ornare justo sit faucibus. Amet, quis, mauris pulvinar odio. Augue amet, malesuada molestie sit amet, mattis et nisi cras tortor, sodales eleifend amet, consectetur cursus dapibus sed justo interdum amet, morbi sit sed et amet, faucibus. Risus amet, sapien nulla mattis et. Ornare lore.</div>
                    </div>
                    <div className="self-stretch h-[250px] flex-col justify-start items-end gap-2 flex">
                        <div className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заголовок</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Lorem ipsum dolo<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis<br/>Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                    <div className="self-stretch h-[250px] flex-col justify-start items-end gap-2 flex">
                        <div className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заголовок</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Lorem ipsum dolo<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis<br/>Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                    <div className="self-stretch h-[474px] flex-col justify-start items-end gap-2 flex">
                        <div className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заголовок</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Vulputate sit vel amet eget ex. Amet, tempus eget eleifend eleifend molestie et. Vel nec vulputate accumsan ornare justo interdum libero, in non elit. Malesuada dictum amet sodales vestibulum ornare luctus et arcu dapibus quis, ex. Ornare justo sit faucibus. Amet, quis, mauris pulvinar odio. Augue amet, malesuada molestie sit amet, mattis et nisi cras tortor, sodales eleifend amet, consectetur cursus dapibus sed justo interdum amet, morbi sit sed et amet, faucibus. Risus amet, sapien nulla mattis et. Ornare lore.</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-normal" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Eleifend sit odio. Justo tortor, velit eleifend sed eget vestibulum sodales amet, mattis amet, mauris in mattis sit dolor pulvinar integer ornare nulla pellentesque imperdiet malesuada cras orci, amet, et.</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Policies;
