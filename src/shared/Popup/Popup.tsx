
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { useWeather } from '../../context/WeatherContext';
import { Day } from '../../pages/Home/components/Days/Days';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayItems } from '../../pages/Home/components/ThisDayInfo/ThisDayItems';
import { getIconId } from '../../utils/iconMapper';
import s from './Popup.module.scss';


interface Props{
    day: any
    onClose: () => void,
    city: string
}

export const Popup = ({ day, city, onClose }: Props) => {
    const {data} = useWeather();
    const dayChose = new Date(day.dt_txt).toLocaleDateString('uk-UA', {weekday: 'long'});
    const pressureInNmHg = Math.floor(day.main.pressure * 0.75006375541921);
    const rainInfo = day?.rain && day.rain['1h'] ? `${day.rain['1h']} мм` : 'Без опадів';

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.floor(day.main.temp)}°C - відчувається як ${Math.floor(day.main.feels_like)}°C`
        },
        {
            icon_id: 'pressure',
            name: 'Тиск',
            value: `${pressureInNmHg} ртутного стовпа - нормальне`
        },
        {
            icon_id: 'precipitation',
            name: 'Опади',
            value: rainInfo
        },
        {
            icon_id: 'wind',
            name: 'Вітер',
            value: `${day.wind.speed} південно-західний - легкий вітер`
        }
    ];
    return (
    <>
        <div className={s.blur} onClick={onClose}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>{Math.floor(day.main.temp)}°C</div>
                    <div className={s.day__name}>{dayChose}</div>
                    <div className={s.img}>
                    {day && day.weather[0] && (<GlobalSvgSelector id={getIconId(day.weather[0].icon)} /> )}
                    </div>
                    <div className={s.day__time}>Дата: <span>{day.dt_txt}</span></div>
                    <div className={s.day__city}>Місто: <span>{city}</span></div>
                </div>
                <div className={s.this__day_info_items}>
                        {items.map((item: Item) => {
                            return(<ThisDayItems key={item.icon_id} item={item}/>)
                        })}
                </div>
                <div className={s.close} onClick={onClose}>
                    <GlobalSvgSelector id='close' />
                </div>
            </div>
            
    </>
    );

}