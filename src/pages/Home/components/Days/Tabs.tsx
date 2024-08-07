import s from './Days.module.scss';

interface Props {}

export const Tabs = (props: Props) => {
    const tabs = [
        {
        value: 'На 5 днів. На 18:00',
        },
        // {
        // value: 'На 10 днів',
        // },
        // {
        // value: 'На місяць',
        // },
    ];
return (
    <div className={s.tabs}>
        <div className={s.tabs__wrapper}>
        {tabs.map(tab => (
        <div className={s.tab + ' ' + s.active} key={tab.value}>
            {tab.value}
        </div>
        ))}
        </div>
        {/* <div className={s.cancel}>Відмінити</div> */}
    </div>
);
};