import { useEffect, useState } from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
// import Select from 'react-select'
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import { useWeather } from '../../context/WeatherContext';
import { Home } from '../../pages/Home/Home';
import { useNavigate, Link } from 'react-router-dom';
import  TextField  from '@mui/material/TextField';
import { Button } from '@mui/material';


interface Props{}


export const Header: React.FC = () => {

    const [input, setInput] = useState('');

    const {fetchWeather, error } = useWeather();
    const {fetchWeeklyWeather, errorWeek} = useWeather();

    const navigate = useNavigate();

    const handleFetchWeather = () => {
        fetchWeeklyWeather(input)
        fetchWeather(input);
        setInput('');
    };

    const theme = useTheme();

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return (
        <header className={s.header}>
            
        <div className={s.wrapper}>
            <Link to ='/home'>
            <div className={s.logo}><GlobalSvgSelector id="header-logo"/></div>
            </Link> 
            
            <div className={s.title}>Прогноз Погоди</div>
            
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}><GlobalSvgSelector id="change-theme" /></div>
            <TextField 
                id='filled-basic'
                sx={{
                    ' label.Mui-focused': {
                        color: '#f70202',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        textAlign: "center"
                    },
                    ' .MuiInput-underline:after': {
                        borderBottomColor: 'yellow',
                    },
                    '.MuiOutlinedInput-root': {
                        backgroundColor: 'lightgray',
                        height: '40px',
                        textAlign: 'center',
                    },
                        width: '300px',
                        marginRight: '5px'
                }}
                
                type="text"
                value={input}
                className={s.input__city}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        handleFetchWeather()
                    }
                }}
                placeholder='Введіть місто'
                error={!!error}
                color={'info'}
                

            />
            
                <Button variant="contained"
                        className={s.btn__input_city}
                        onClick={handleFetchWeather}
                >Ввести
                </Button>
            
            {error && <div className={s.error}>{error}</div>}
        </div>
    </header>
    );
};