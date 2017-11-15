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
    Platform,
    PixelRatio
}
    from 'react-native'

var screenW = Dimensions.get('window').width;

// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    constructor(props) {
      super(props);

      //创建数据源
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>{r1 != r2},
            sectionHeaderHasChanged:(s1,s2)=>{s1 != s2}
        });
      //  获取数据源
        // 加载数据
        var citys = require('./Res/城市列表.json')
      //  解析处理数据
        var sectionData = this._resolveData(citys);
        ds = ds.cloneWithRowsAndSections(sectionData)
      this.state = {
            ds:ds
      };
    }
    //处理数据 {A:[a,b],B:[c,d]}
    _resolveData(cityData){
        var sectionDatas = {};

        cityData.forEach((provice,index)=>{

            var provicename = provice.name;

            var cityList = provice.sub;
            var cityes=[];

            cityList.forEach((city,i)=>{
                cityes.push(city.name);
            })

            sectionDatas[provicename] = cityes;
        })
            return sectionDatas;
    }

    _renderRow(rowData,sectionID,rowID){

    return (
        <View style={{height:44, borderBottomWidth:1/PixelRatio.get(), justifyContent:'center',borderBottomColor:'#e5e5e5'}}>
            <Text style={{fontSize: 18}}>{rowData}</Text>
        </View>
    )
    }

_renderSectionHeader(sectionData,sectionID){

    return(

        <View style={{backgroundColor:'#e8e8e8'}}>
            <Text style={{fontSize:20}}>{sectionID}</Text>
            </View>
    )
}
    render(){
        return(
            <ListView dataSource = {this.state.ds}
                        renderRow = {this._renderRow.bind(this)}
                        renderSectionHeader = {this._renderSectionHeader.bind(this)}
                        style = {{marginTop: 20}}
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