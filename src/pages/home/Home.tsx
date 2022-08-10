import React from 'react'
import { Input, Button } from 'antd'
import { AppleOutlined, SearchOutlined } from '@ant-design/icons'
import 'antd/dist/antd.min.css'
import axios from 'axios'

import style from './Home.module.scss'

interface HomeProps {
    props: string
}

interface HomeState {
    inputValue: string
}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    setInputValue = async (e: { target: { value: any } }) => {
        await this.setState({ inputValue: e.target.value })
    }

    handleSearch = async () => {
        await axios.get('http://127.0.0.1:8000/waste/search/' + this.state.inputValue)
            .then((result: any) => {
                console.log(result)
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    render = () => {
        return (
            <div className={ style.home }>
                <h1 className={ style.h1 }>垃圾分类查询</h1>
                <div className={ style.search }>
                    <Input
                        className={ style.input }
                        size="large" placeholder="输入垃圾名称" prefix={ <AppleOutlined/> }
                        value={ this.state.inputValue }
                        onChange={ this.setInputValue.bind(this) }
                    />
                    <Button
                        className={ style.button }
                        size="large" type="primary" icon={ <SearchOutlined/> }
                        onClick={ this.handleSearch.bind(this) }
                    >
                        搜索
                    </Button>
                </div>
            </div>
        )
    }
}

export default Home
