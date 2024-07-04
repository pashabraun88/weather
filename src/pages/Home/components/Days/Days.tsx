import { Cards } from "./Cards";
import s from "./Days.module.scss"
import { Tabs } from "./Tabs";

interface Props {}

export interface Day {
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

export const Days = (props: Props) => {
    const days: Day[] = [
    {
        day: 'Сьогодні',
        day_info: '20 лип',
        icon_id: 'sun',
        temp_day: '+25',
        temp_night: '+15',
        info: 'Сонячно',
    },
    {
        day: 'Завтра',
        day_info: '21 лип',
        icon_id: 'small_rain_sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Сонячно,невеликий дощ',
    },
    {
        day: 'Ср',
        day_info: '22 лип',
        icon_id: 'small_rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Не великий дощ',
    },
    {
        day: 'Чт',
        day_info: '23 лип',
        icon_id: 'mainly_cloudy',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Хмарно',
    },
    {
        day: 'Пт',
        day_info: '24 лип',
        icon_id: 'rain',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Дощ',
    },
    {
        day: 'Сб',
        day_info: '25 лип',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Сонячно',
    },
    {
        day: 'Нд',
        day_info: '26 липня',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Сонячно',
    },
    ];
return <>
<Tabs />
<div className={s.days}>
    {days.map((day: Day) => (
        <Cards day={day} key={day.day}/>
    ))}
</div>
</>
}