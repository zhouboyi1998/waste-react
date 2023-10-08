import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Breadcrumb, Layout, Menu } from 'antd'
import { CopyrightOutlined, HomeOutlined, PieChartOutlined } from '@ant-design/icons'
import 'antd/dist/antd.min.css'
import './Layout.css'
import RouterView from '../router'

// 获取布局组件
const { Header, Content, Footer } = Layout

// 新建顶部菜单数组
let menus = new Array(3)
menus.push({ key: '/', label: '首页', icon: <HomeOutlined/> })
menus.push({ key: '/statistic', label: '统计', icon: <PieChartOutlined/> })
menus.push({ key: '/about', label: '关于', icon: <CopyrightOutlined/> })

const LayoutView: React.FC = () => {

    // 获取路由导航 hook
    const navigate = useNavigate()

    // 菜单点击事件
    const handleClickMenu = (menu: { key: string }) => {
        navigate(menu.key)
    }

    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={ ['1'] }
                    items={ menus }
                    onClick={ handleClickMenu }
                />
            </Header>
            <Content style={ { padding: '0 50px' } }>
                <Breadcrumb style={ { margin: '16px 2px' } }>
                    <Breadcrumb.Item/>
                </Breadcrumb>
                <div className="site-layout-content">
                    <RouterView/>
                </div>
            </Content>
            <Footer style={ { textAlign: 'center' } }>Waste Classification Search System ©2022 Created by React and Ant Design</Footer>
        </Layout>
    )
}

export default LayoutView
