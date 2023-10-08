import React from 'react'
import style from '../statistic/Statistic.module.scss'

interface StatisticProps {

}

interface StatisticState {

}

class Statistic extends React.Component<StatisticProps, StatisticState> {
    render = () => {
        return (
            <div className={ style.statistic }>
                统计
            </div>
        )
    }
}

export default Statistic
