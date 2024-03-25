import SendForm from "./Wrapper/SendForm";
import {ThemeType} from "./DesktopHeader";


const Maps = ({theme}:ThemeType) => {

    return (
        <div className='relative '
             >
            <div className='flex mb-[160px] mt-0  sm:mt-[160px]'>
                <iframe className='rounded-[30px] w-[360px]   sm:w-[1400px] sm:h-[780px]'
                        src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=39.692665%2C47.208878&mode=poi&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoN-cMeQhXf1TxC&source=mapframe&utm_source=mapframe&z=15.5"
                        width="360" height="226"   ></iframe>
            </div>

            <div className='absolute z-10 top-[30px] left-[700px]'>
                <SendForm theme={theme}/>
            </div>
        </div>

    );
};

export default Maps;


