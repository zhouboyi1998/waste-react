import React from 'react'
import style from '../about/About.module.scss'

interface AboutProps {

}

interface AboutState {

}

class About extends React.Component<AboutProps, AboutState> {
    render = () => {
        return (
            <div className={ style.about }>
                关于
            </div>
        )
    }
}

export default About
