/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import ThemeContext from '../../context/ThemeContext'

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}>
                {theme === "light" ? <MdDarkMode /> : <CiDark />}
            </button>
        </div>
    );
}

export default ThemeButton;
