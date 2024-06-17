
import { GlobalSvgSelector } from '../../../../assets/images/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';


interface Props{}

export const ThisDay = (props: Props) => {
    return (
    <header className={s.this__day}>
        <div className={s.top__block}>
            <div className={s.top__block_wrapper}>
                <div className={s.this__temp}>25°</div>
                <div className={s.this__day_name}>Сьогодні</div>
            </div>
        <GlobalSvgSelector id="sun"/>
        </div>
        <div className={s.bottom__block}>
            <div className={s.this__time}>Година: <span>04:20</span></div>
            <div className={s.this__city}>Місто: <span>Львів</span></div>
        </div>
    </header>
    )

}