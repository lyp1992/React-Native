
/**
 * Created by xiaomage on 2017/5/7.
 *
 *
 */

/*
 *   TabNavigator: TabBar跨平台,可以用于iOS和安卓
 * */

import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    TextInput,
    Image,
    Dimensions
}
    from 'react-native'

import TabNavigator from 'react-native-tab-navigator';


// 3.自定义 程序入口组件([[UIView alloc] init])

// renderIcon: 传入一个函数,返回值 Image组件
class ReactDemo extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedIndex:0
        }

    }


    render(){

        return (
            <TabNavigator >
                <TabNavigator.Item
                    selected={this.state.selectedIndex == 0}
                    title="消息"
                    renderIcon={() => <Image source={{uri:'tab_recent_nor'}} style={{width:25,height:25}}/>}
                    badgeText="10"
                    selectedTitleStyle={{color:'orange'}}
                    onPress={() => {
                        this.setState({
                            selectedIndex:0
                        })
                    }}
                >

                    {/*存放一个组件*/}
                    <View style={{backgroundColor:'green',flex:1}}/>

                </TabNavigator.Item>
                <TabNavigator.Item
                    title="联系人"
                    renderIcon={() => <Image source={{uri:'tab_buddy_nor'}} style={{width:25,height:25}}/>}
                    onPress={() => {
                        this.setState({
                            selectedIndex:1
                        })
                    }}
                    selected={this.state.selectedIndex == 1}
                >

                    {/*存放一个组件*/}
                    <View style={{backgroundColor:'red',flex:1}}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="动态"
                    renderIcon={() => <Image source={{uri:'tab_qworld_nor'}} style={{width:25,height:25}}/>}
                    onPress={() => {
                        this.setState({
                            selectedIndex:2
                        })
                    }}
                    selected={this.state.selectedIndex == 2}

                >

                    <View style={{backgroundColor:'yellow',flex:1}}/>
                    {/*存放一个组件*/}

                </TabNavigator.Item>
            </TabNavigator>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({

})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);