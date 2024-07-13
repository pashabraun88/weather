import { useState } from "react";
import { Cards } from "./Cards";
import s from "./Days.module.scss"
import { Tabs } from "./Tabs";
import { useEffect } from "react";
import { ForecastEntry, useWeather } from "../../../../context/WeatherContext";
import { getIconId } from "../../../../utils/iconMapper";
import { Popup } from "../../../../shared/Popup/Popup";

interface Props {}

export interface Day {
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
    fullData: ForecastEntry,
}

export const Days = (props: Props) => {
    
    const {forecast, selectDay, selectedDay, clearSelectedDay, data } = useWeather();
    const [days, setDays] = useState<Day[]>([]);
    
    
        useEffect(() => {
        const capitalizeFirstLatter = (string: string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        if(forecast) {
            
            const newDays: Day[] = forecast.list.slice(0, 7).map((day) => ({
                day: capitalizeFirstLatter(new Date(day.dt_txt).toLocaleDateString('uk-UA', {weekday: 'long'})),
                day_info: new Date(day.dt_txt).toLocaleDateString('uk-UA', {day: '2-digit', month: 'short'}),
                icon_id:  getIconId(day.weather[0].icon),
                temp_day: `${Math.floor(day.main.temp)}°C`,
                temp_night: `${Math.floor(day.main.temp_min)}°C`,
                info: day.weather[0].description,
                fullData: day
            }));
            
            setDays(newDays);
        }
    }, [forecast]);

    const handleDayClick = (day: Day) => {
        selectDay(day.fullData)
    }
    
    const city = data?.name || 'Unknown city'
    // const handleClosePopup = () => {
    //     selectDay(day.)
    // }
    
return <>
<Tabs />

    {/* {days.map((day: Day) => (
        <Cards day={day} key={day.day}/>
    ))} */}
    <div className={s.days}>
                {days.map((day: Day, index: number) => (
                    <div key={index} onClick={() => handleDayClick(day)}>
                        <Cards day={day} />
                    </div>
                ))}
    </div>
    {selectedDay && <Popup day={selectedDay} onClose={clearSelectedDay} city={city}/>}
</>
}