import s from './Home.module.scss'
import { Days } from './components/Days/Days'
import { Tabs } from './components/Days/Tabs'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'


interface Props {}

export const Home = (props: Props) => {
    return (
    <div className={s.home}>
        <div className={s.wrapper}>
                <ThisDay />
                <ThisDayInfo />
                
        </div>
        <Days />
    </div>
    )
}