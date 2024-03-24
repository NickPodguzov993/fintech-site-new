import {ThemeType} from "../DesktopHeader";

const MoonSvg = ({theme}:ThemeType) => {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0782 17.6883C23.9818 17.6525 23.8766 17.6476 23.7773 17.6745C23.678 17.7014 23.5895 17.7586
             23.5242 17.8381C22.7698 18.7592 21.657 19.2878 20.469 19.2878C18.2908 19.2878 16.5194 17.5128
              16.5194 15.3319C16.5194 14.2337 16.9615 13.2121 17.7646 12.4549C17.8396 12.3842 17.8906
               12.2917 17.9106 12.1905C17.9305 12.0893 17.9182 11.9843 17.8756 11.8904C17.8333
                11.7963 17.7626 11.7179 17.6734 11.6662C17.5842 11.6145 17.481 11.5922 17.3785
                 11.6024C14.0841 11.9229 11.5996 14.667 11.5996 17.9859C11.5996 21.5225 14.4725
                  24.4 18.0039 24.4C21.4933 24.4 24.3027 21.6616 24.3994 18.1659C24.4023 18.0626
                   24.3729 17.9611 24.3153 17.8755C24.2577 17.7898 24.1748 17.7244 24.0782
                    17.6883ZM18.0038 23.411C15.0165 23.411 12.5867 20.9774 12.5867
                     17.9856C12.5867 15.6309 14.0652 13.6185 16.1862 12.8709C15.7588
                      13.6104 15.5318 14.4515 15.5318 15.3321C15.5318 18.0593 17.7465
                       20.2772 20.4693 20.2772C21.4498 20.2785 22.4082 19.9862
                        23.2216 19.4378C22.5936 21.7465 20.5052 23.411 18.0038 23.411Z" fill={theme === 'light' ? "#1B1B1B" : 'white'}/>
        </svg>

    );
};

export default MoonSvg;
