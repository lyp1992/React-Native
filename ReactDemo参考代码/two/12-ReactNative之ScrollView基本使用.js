/**
 * Created by xiaomage on 2017/5/13.
 */
/**
 * Created by xiaomage on 2017/5/7.
 */

/**
 * Created by xiaomage on 2017/5/7.
 */
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
    Dimensions,
    ScrollView
}from 'react-native'

import LoginView from './one/LoginView'

// 在JS中,加载本地文件,通过require

var screenW = Dimensions.get('window').width;

// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    constructor(props){
        super(props);

        this.state = {
            listData:[]
        }
    }

    // 组件加载完成的时候调用:加载数据
    componentDidMount() {

        // 加载本地数据
        // 请求网络数据 () 服务器
        var listData = require('./Res/zhubo.json');

        // console.log(listData);
        this.setState({
            listData:listData
        })

    }

    // 当scrollView一滚动的时候就会调用
    // 在RN中,滚动的时候,不会去直接修改scrollView.props.contentOffset

    // 所有监听scrollView滚动的事件,默认都会传入一个合成事件e,
    // 合成事件:原生App中产生事件对象,这个合成事件对象有个原生事件对象
    // e.nativeEvent
    // 原生事里面,一般都会有想要的属性
    _onScroll(e){
        // console.log('onScroll')

        // 获取原生事件
        var nativeEvent =  e.nativeEvent;

        var contentOffset = nativeEvent.contentOffset;

        console.log(contentOffset);

        // // 获取scrollView
        // var scrollView = this.refs.scrollView;
        //
        // console.log(scrollView.props.contentOffset.y)

    }
    // 开始滚动的时候就会调用
    _onMomentumScrollBegin(){
        console.log('_onMomentumScrollBegin')
    }

    // 滚动结束的时候调用,拖拽的时候会有惯性,惯性结束的时候就会执行
    _onMomentumScrollEnd(){
        console.log('_onMomentumScrollEnd')
    }

    // 开始拖拽的时候调用
    _onScrollBeginDrag(){
        console.log('_onScrollBeginDrag')
    }
    // 结束拖拽的时候调用
    _onScrollEndDrag(){
        console.log('_onScrollEndDrag')
    }
    render(){

        return (
            <ScrollView style={{flex:1}}
                        onScroll={this._onScroll.bind(this)}
                        scrollEventThrottle={1}
                        onMomentumScrollBegin={this._onMomentumScrollBegin.bind(this)}
                        onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                        onScrollBeginDrag={this._onScrollBeginDrag.bind(this)}
                        onScrollEndDrag={this._onScrollEndDrag.bind(this)}
                        ref="scrollView"
                        contentOffset={{x:0,y:10}}
            >
                {/*添加子控件*/}
                {this._renderChildView(this.state.listData)}
            </ScrollView>
        )

    }

// ES5  , (ES6)

// Node.js ES5

    // 添加子控件
    _renderChildView(listData){

        // for (i in listData) {
        //     var zhubo = listData[i];
        //     console.log(zhubo);
        // }

        var imgs = [];
        //  forEach:参数 回调函数:value,i
        listData.forEach((zhubo,i)=>{
            imgs.push(
                <Image source={{uri:zhubo.icon}}
                       style={{width:screenW,height:300}}
                       key={i}
                />
            )
        })

        return imgs;
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