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

var screenW = Dimensions.get('window').width
var screenH = Dimensions.get('window').height

class ReactDemo extends Component{

// {/*创建属性*/}
    constructor(props) {
     super(props);
     this.state = {

         listData:[],
        };
    }

// {/*控件在家完成的时候调用网络请求*/}
componentDidMount()
{
    var listData = require('./Res/zhubo.json');
    this.setState({
        listData:listData,
    })
}

// 当scrollView一滚动的时候就会调用
// 在RN中,滚动的时候,不会去直接修改scrollView.props.contentOffset

// 所有监听scrollView滚动的事件,默认都会传入一个合成事件e,
// 合成事件:原生App中产生事件对象,这个合成事件对象有个原生事件对象
// e.nativeEvent
// 原生事里面,一般都会有想要的属性
_onScroll(e){

    // 获取原生事件
    var nativeEvent =  e.nativeEvent;

    var contentOffset = nativeEvent.contentOffset;

    console.log(contentOffset);
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

        return(
            <ScrollView style = {{flex: 1}}
                    onScroll = {this._onScroll.bind(this)}
                    onMomentumScrollBegin = {this._onMomentumScrollBegin.bind(this)}
                        onMomentumScrollEnd = {this._onMomentumScrollEnd.bind(this)}
                            onScrollBeginDrag = {this._onScrollBeginDrag.bind(this)}
                                onScrollEndDrag = {this._onScrollEndDrag.bind(this)}
                                    ref = "scrollView"
                                        contentOffset={{x:0,y:10}}>

            {/*添加子控件*/}
         {this._renderChildView(this.state.listData)}

            </ScrollView>

        )
    }

//    添加子控件
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

AppRegistry.registerComponent('ReactDemo',() => ReactDemo );