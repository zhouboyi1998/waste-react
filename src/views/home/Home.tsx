import React from 'react'
import { Button, Input } from 'antd'
import { RestOutlined, SearchOutlined } from '@ant-design/icons'
import 'antd/dist/antd.min.css'
import axios from 'axios'

import style from './Home.module.scss'

// 返回值类型
type Waste = {
    id: number
    waste_name: string
    image: string | undefined
    classification_id: number
    classification_name: string
    description: string
    include: string
    regulation: string
    icon: string
}

// 颜色常量
const colorList: [
    { colorItem: string },
    { colorItem: string },
    { colorItem: string },
    { colorItem: string }
] = [
    { colorItem: '#3F6BA8' },
    { colorItem: '#B43953' },
    { colorItem: '#8F6F55' },
    { colorItem: '#2F3D39' }
]

interface HomeProps {

}

interface HomeState {
    inputValue: string
    waste: Waste | undefined
    hidden: boolean
    color: string
}

class Home extends React.Component<HomeProps, HomeState> {

    waste: Waste | undefined

    constructor(props: HomeProps) {
        super(props)
        this.state = {
            inputValue: '',
            waste: this.waste,
            hidden: true,
            color: ''
        }
    }

    setInputValue = (e: { target: { value: any } }) => {
        this.setState({ inputValue: e.target.value })
    }

    // 点击搜索按钮
    handleSearch = () => {
        axios.get('http://127.0.0.1:8000/waste/search/' + this.state.inputValue)
            .then(response => {
                this.setState({
                    waste: response.data,
                    hidden: false,
                    color: colorList[response.data.classification_id - 1].colorItem
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    // 按下键盘回车
    handleEnter = (e: { charCode: number }) => {
        console.log(e)
        if (e.charCode === 13) {
            this.handleSearch()
        }
    }

    render = () => {
        return (
            <div className={style.home}>
                <h1 className={style.title}>垃圾分类查询</h1>
                <div className={style.search}>
                    <Input
                        className={style.input}
                        size="large" placeholder="输入垃圾名称" prefix={<RestOutlined/>}
                        value={this.state.inputValue}
                        onChange={this.setInputValue.bind(this)}
                        onKeyPress={(e) => this.handleEnter(e)}
                    />
                    <Button
                        className={style.button}
                        size="large" type="primary" icon={<SearchOutlined/>}
                        onClick={this.handleSearch.bind(this)}>
                        搜索
                    </Button>
                </div>
                <div className={style.result} hidden={this.state.hidden}>
                    <h1>
                        <span className={style.waste}>{this.state.waste?.waste_name}</span>
                        <span className={style.span}>&nbsp;是&nbsp;</span>
                        <span
                            className={style.span}
                            style={{ color: `${this.state.color}` }}>
                            {this.state.waste?.classification_name}
                        </span>
                    </h1>
                </div>
                <div className={style.bottom}>
                    <img src={''} alt={''} className={style.img}/>
                    <img src={''} alt={''} className={style.img}/>
                    <img src={''} alt={''} className={style.img}/>
                    <img src={''} alt={''} className={style.img}/>
                </div>
            </div>
        )
    }
}

export default Home
