
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
// import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
// import { ThisDayItems } from '../../pages/Home/components/ThisDayInfo/ThisDayItems';
import s from './Popup.module.scss';


interface Props{
}

export const Popup = ({}: Props) => {
    // const items = [
    //     {
    //         icon_id: 'temp',
    //         name: 'Температура',
    //         value: '25° - відчувається як 23°'
    //     },
    //     {
    //         icon_id: 'pressure',
    //         name: 'Тиск',
    //         value: '765 мм ртутного стовпа - нормальне'
    //     },
    //     {
    //         icon_id: 'precipitation',
    //         name: 'Опади',
    //         value: 'Без опадів'
    //     },
    //     {
    //         icon_id: 'wind',
    //         name: 'Вітер',
    //         value: '3 м/с південно-західний - легкий вітер'
    //     }
    // ];
    return (
    <>
        <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>25°</div>
                    <div className={s.day__name}>Сьогодні</div>
                    <div className={s.img}>
                    <GlobalSvgSelector id='sun' />
                    </div>
                    <div className={s.day__time}>Година: <span>4:20</span></div>
                    <div className={s.day__city}>Місто: <span>Львів</span></div>
                </div>
                <div className={s.this__day_info_items}>
                        {/* {items.map((item: Item) => {
                            return(<ThisDayItems key={item.icon_id} item={item}/>)
                        })} */}
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id='close' />
                </div>
            </div>
            
    </>
    );

}