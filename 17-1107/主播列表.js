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
    ListView,
    Platform
}
    from 'react-native'
var listData = require('./Res/live.json')
var screenW = Dimensions.get('window').width;

// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    //设置数据
    constructor(props) {
        super(props);
        //创建数据源
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>{r1 != r2}
    })
        //  设置数据
        ds = ds.cloneWithRows(listData);

        //改变数据
        this.state = {
            ds:ds
        };
    }
    //设置行数据
    _renderRow(rowData){

        return(

            <View>
            {/*顶部*/}
            < View style = {styles.topViewStyle}>
        {/*头像*/}
    <Image source={{uri:rowData.creator.portrait}} style = {{width:35,height:35, marginLeft
        :10}}></Image>
        {/*名字地址*/}
    <View style={{marginLeft:10,justifyContent:'space-between',height:35}}>

    <Text style = {styles.nameStyle}>{rowData.creator.nick}</Text>
        <Text style = {styles.nameStyle}>{rowData.city}</Text>
        </View>
        {/*多少人观看*/}
    <Text style = {{position:'absolute',right:0,color:'red'}}>

        {rowData.online_users}<Text style={{color:'black'}}>人在看</Text>
        </Text>
        </View>
        {/*图片*/}
    <Image source = {{uri:rowData.creator.portrait}} style = {{height:300,width:screenW,backgroundColor:'yellow'}}></Image>
        </View>
    )
    }

    render(){

        return(

            <ListView dataSource = {this.state.ds}
        renderRow = {this._renderRow.bind(this)}
        style = {{marginTop:Platform.OS=='ios'?20:0 }}
        />
    )
    }
}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    topViewStyle:{
        height:50,
        width:screenW,
        flexDirection:'row',
        alignItems:'center'
    },
    nameStyle:{
        fontSize:13
    }

})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);