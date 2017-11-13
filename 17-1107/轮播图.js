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

    updateUI(){
        //    获取当当前页
        var page = this.state.curPage;

        //    页数加1
        page += 1;
        var animate = true;
        if (page>=this.state.listData.length){
            page = 0;
            animate = false;
        }

        this.setState({

            curPage:page,
        })
        var scrollView = this.refs.scrollView;
        var offSetx = page * screenW;
        //    scrollview滚动到指定偏移值
        scrollView.scrollTo({x:offSetx,y:0, animated:animate})

    }

// {/*创建属性*/}
    constructor(props) {
        super(props);
        this.state = {

            listData:[],
        };
    }

    //组件即将销毁的时候调用
    componentWillUnmount() {

    }
// {/*控件在家完成的时候调用网络请求*/}
    componentDidMount()
    {
        var listData = require('./Res/zhubo.json');
        this.setState({
            listData:listData,
            curPage:0
        })
//    创建定时器
        this.timer = setInterval(this.updateUI.bind(this),3000);

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
    _onMomentumScrollBegin(e){

    }

// 滚动结束的时候调用,拖拽的时候会有惯性,惯性结束的时候就会执行
    _onMomentumScrollEnd(e) {

        var OffsetX = e.nativeEvent.contentOffset.x;
//计算当前页
        var curpage = OffsetX/screenW;
        this.setState({

            curPage:curpage,
        })
    }

// 开始拖拽的时候调用
    _onScrollBeginDrag(){
        clearInterval(this.timer);
    }
// 结束拖拽的时候调用
    _onScrollEndDrag(){

        //    创建定时器
        this.timer = setInterval(this.updateUI.bind(this),3000);
    }
    render(){

        return(
            <View>
            {/*父控件受子控件的大小影响*/}
            <ScrollView style = {{width:screenW,height:240, backgroundColor:'red'}}
        onScroll = {this._onScroll.bind(this)}
        onMomentumScrollBegin = {this._onMomentumScrollBegin.bind(this)}
        onMomentumScrollEnd = {this._onMomentumScrollEnd.bind(this)}
        onScrollBeginDrag = {this._onScrollBeginDrag.bind(this)}
        onScrollEndDrag = {this._onScrollEndDrag.bind(this)}
        ref = "scrollView"
        horizontal = {true}
        pagingEnabled = {true}
        showsHorizontalScrollIndicator = {false}>

            {/*添加子控件*/}
        {this._renderChildView(this.state.listData)}

    </ScrollView>

        <View style={styles.bottomStyle}>

        {/* 标题*/}
    <Text style ={{color:'white'}}>{this._getzhuboTitle()}</Text>

        {/*指示器*/}
    <View style = {{flexDirection:'row', marginLeft: 5, alignItems:'center'}} >
        {this._getIndicatorView()}</View>

        </View>
        </View>

    )
    }

//   添加标题
    _getzhuboTitle(){

        var zhubo = this.state.listData[this.state.curPage];
        if  (zhubo == undefined) return '';
        return zhubo.title;
    }

//    生成指示器
    _getIndicatorView(){

        var listData = this.state.listData;
        var childs = [];

        listData.forEach((zhubo,i)=>{

            childs.push(
        <View style={i == this.state.curPage? styles.activeDotStyle:styles.dotStyle}/>
    )

    });
        return childs;
    }
//    添加子控件
    // 添加子控件
    _renderChildView(listData){

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

var styles = StyleSheet.create({

    bottomStyle:{
        backgroundColor:'rgba(0,0,0,0.5)',
        width:screenW,
        height:35,
        position:'absolute',
        bottom:0,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'

    },
    dotStyle:{
        width:6,
        height:6,
        borderRadius:3,
        backgroundColor:'white',
        marginLeft:4
    },
    activeDotStyle:{
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:'red',
        marginLeft:4
    }

})

AppRegistry.registerComponent('ReactDemo',() => ReactDemo );