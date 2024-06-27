
import { useEffect, useState } from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import Select from 'react-select'
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';


interface Props{}

export const Header = (props: Props) => {

    const theme = useTheme();

    const options = [
        { value: 'city-1', label: 'Львів' },
        { value: 'city-2', label: 'Київ' },
        { value: 'city-3', label: 'Новояворівськ' }
    ];

    

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147,255,0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' : '#000'
        }),
        menu: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147,255,0.2)',
            color: theme.theme === Theme.DARK ? '#fff' : '#000'
        })
    }

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }


    return (
        <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}><GlobalSvgSelector id="header-logo"/></div>
            <div className={s.title}>Прогноз Погоди</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}><GlobalSvgSelector id="change-theme" /></div>
            <Select 
                    defaultValue={options[0]} 
                    styles={colorStyles} 
                    options={options} />
        </div>
    </header>
    )

}