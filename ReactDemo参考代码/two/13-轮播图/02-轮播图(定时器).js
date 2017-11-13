/**
 * Created by xiaomage on 2017/5/13.
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
}
    from 'react-native'

var screenW = Dimensions.get('window').width;
// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    // 每隔一秒更新界面
    updateUI(){

        // 获取当前页码
        var page = this.state.curPage;

        page += 1;

        var animated = true;

        if (page >= this.state.listData.length) {
            page = 0;
            animated = false;
        }

        this.setState({
            curPage:page
        })


        var scrollView = this.refs.scrollView;

        var offsetX = page * screenW;

        // 滚动
        scrollView.scrollTo({x:offsetX,y:0,animated:animated})

    }

    // 开始拖拽
    _onScrollBeginDrag(){
        clearInterval(this.timer)
    }

    _onScrollEndDrag(){
        // 创建定时器
        this.timer =  setInterval(this.updateUI.bind(this),1000);
    }

    constructor(props){
        super(props);

        this.state = {
            listData:[],
            curPage:0
        }
    }

    // 当组件即将销毁的时候调用
    componentWillUnmount() {
        clearInterval(this.timer)
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

        // 创建定时器
        this.timer =  setInterval(this.updateUI.bind(this),1000);

    }
    // RN,一个View默认尺寸,由子控件决定.
    // 如果有子控件设置了position,不算做父控件尺寸,都是父控件没有设置尺寸的情况
    render(){
        console.log('render'+' '+this.state.listData[this.state.curPage])
        return (
            <View>
                <ScrollView style={{width:screenW,height:240,backgroundColor:'red'}}
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                            ref="scrollView"
                            onScrollBeginDrag = {this._onScrollBeginDrag.bind(this)}
                            onScrollEndDrag = {this._onScrollEndDrag.bind(this)}

                >
                    {this._renderChildView(this.state.listData)}
                </ScrollView>
                <View style={styles.bottomStyle}>
                    {/*左边文字*/}
                    <Text style={{color:'white'}}>{this.getzhuboTitle()}</Text>

                    {/*指示器*/}
                    <View style={{flexDirection:'row',marginRight:5,alignItems:'center'}}>
                        {this._renderIndicatorView()}
                    </View>


                </View>
            </View>
        )

    }

    getzhuboTitle() {
        var zhubo = this.state.listData[this.state.curPage];

        if (zhubo == undefined) return '';

        return zhubo.title;
    }

    // 添加指示器
    _renderIndicatorView(){
        var listData = this.state.listData;

        var childs = [];
        listData.forEach((zhubo,i)=>{
            // 生成指示器
            childs.push(
                <View key={i} style={i == this.state.curPage?styles.activeDotStyle:styles.dotStyle}/>
            )
        });

        return childs;

    }

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
        });

        return imgs;
    }

    // 滚动完成的时候调用
    _onMomentumScrollEnd(e){
        // 获取偏移量
        var offsetX = e.nativeEvent.contentOffset.x;
        // 计算当前页
        var curPage = offsetX / screenW;

        this.setState({
            curPage: curPage
        })

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
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

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);