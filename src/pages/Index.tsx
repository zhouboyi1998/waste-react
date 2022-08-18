import React from 'react'
import { Breadcrumb, Layout, Menu } from 'antd'
import { HomeOutlined, PieChartOutlined, CopyrightOutlined } from '@ant-design/icons'
import 'antd/dist/antd.min.css'

import './Index.css'
import Home from './home/Home'

const { Header, Content, Footer } = Layout

let menus = new Array(3)

menus.push({ key: 1, label: '首页', icon: <HomeOutlined/> })
menus.push({ key: 2, label: '统计', icon: <PieChartOutlined/> })
menus.push({ key: 3, label: '关于', icon: <CopyrightOutlined/> })

const Index: React.FC = () => (
    <Layout className="layout">
        <Header>
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={ ['1'] }
                items={ menus }
            />
        </Header>
        <Content style={ { padding: '0 50px' } }>
            <Breadcrumb style={ { margin: '16px 2px' } }>
                <Breadcrumb.Item/>
            </Breadcrumb>
            <div className="site-layout-content"><Home props={ '' }/></div>
        </Content>
        <Footer style={ { textAlign: 'center' } }>
            Waste Classification Query ©2022 Created by React and Ant Design
        </Footer>
    </Layout>
)

export default Index
