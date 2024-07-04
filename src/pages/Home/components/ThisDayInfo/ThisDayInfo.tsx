import s from './ThisDayInfo.module.scss';
import cloud from "../../../../assets/images/cloud.png"
import { ThisDayItems } from './ThisDayItems';
import { useEffect, useState } from 'react';
import { useWeather } from '../../../../context/WeatherContext';

interface Props{}

export interface Item {
    icon_id: string,
    name: string,
    value: string,
}



export const ThisDayInfo:React.FC<Props> = (props: Props) => {
    const { data } = useWeather();
    const [items, setItems] = useState<Item[]>([]);

    const rainInfo = data?.rain && data.rain['1h'] ? `${data.rain['1h']} мм` : 'Без опадів'

    useEffect(() => {
        if (data) {
            const pressureInNmHg = Math.floor(data.main.pressure * 0.75006375541921);
            const newItems: Item[] = [
                {
                    icon_id: 'temp',
                    name: 'Температура',
                    value: `${Math.floor(data.main.temp)}°C - Відчувається як ${Math.floor(data.main.feels_like)}°C`,
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
                    value: `${data.wind.speed} південно-західний - легкий вітер`
                }
            ];
            setItems(newItems)
        }
    }, [data])



    return (
    <div className={s.this__day_info}>
        <div className={s.this__day_info_items}>
            {items.map((item: Item) => {
                return(<ThisDayItems key={item.icon_id} item={item}/>)
            })}
        </div>
        <img className={s.cloud} src={cloud} alt="Хмара" />
    </div>
    )
}