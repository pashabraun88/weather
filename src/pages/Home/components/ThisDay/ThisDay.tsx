
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';
import { useWeather } from '../../../../context/WeatherContext';
import { getIconId } from '../../../../utils/iconMapper'


interface Props{}

export const ThisDay: React.FC = () => {
    
    const {data} = useWeather();

    const getLocalTime  = (timeZoneOffset: number) => {
        const utcTime = new Date().getTime()
        const localTime = new Date (utcTime + timeZoneOffset * 1000);
        return new Intl.DateTimeFormat('uk-Ua', 
        {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC',
        }).format(localTime);
    };


    return (
        
    <div className={s.this__day}>
        <div className={s.top__block}>
            <div className={s.top__block_wrapper}>
                <div className={s.this__temp}>{data ?(<span className={s.this__temp_number}>{Math.floor(data.main.temp)}°C</span>) : null}</div>
                <div className={s.this__day_name}>Сьогодні</div>
            </div>
            {data && data.weather[0] && (<GlobalSvgSelector id={getIconId(data.weather[0].icon)} /> )}
        
        </div>
        <div className={s.bottom__block}>
            <div className={s.this__time}>Година: <span>{data ? getLocalTime(data.timezone) : null}</span></div>
            <div className={s.this__city}>Місто: {data ? (<span>{data.name}</span>) : null}</div>
        </div>
    </div>
    )
}