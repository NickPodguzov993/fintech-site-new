import {ThemeType} from "../DesktopHeader";


const MenuSvg = ({theme}:ThemeType) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 3.20002C4 2.75821 4.35819 2.40002 4.8 2.40002H15.2C15.6418 2.40002 16 2.75821 16 3.20002C16
             3.64184 15.6418 4.00002 15.2 4.00002H4.8C4.35819 4.00002 4 3.64181 4 3.20002ZM15.2 7.20002H0.8C0.358188
              7.20002 0 7.55824 0 8.00002C0 8.44184 0.358188 8.80002 0.8 8.80002H15.2C15.6418 8.80002 16 8.44184
               16 8.00002C16 7.55824 15.6418 7.20002 15.2 7.20002ZM15.2 12H8C7.55822 12 7.2 12.3582 7.2 12.8C7.2
                13.2418 7.55822 13.6 8 13.6H15.2C15.6418 13.6 16 13.2418 16 12.8C16 12.3582 15.6418 12 15.2 12Z" fill={theme === 'light' ? "#1B1B1B" : 'white'}/>
        </svg>
    );
};

export default MenuSvg;