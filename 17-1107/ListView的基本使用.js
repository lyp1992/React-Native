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
    ListView
}
    from 'react-native'

// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    constructor(props) {
        super(props);

        //创建数据源对象,必须使用New
        var  datas = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>{r1 != r2}
    })
        // 设置数据
        // cloneWithRows:返回一个新的并且已经赋值好的数据源对象
        datas = datas.cloneWithRows(['row1','row2']);

        this.state = {
            datas:datas
        };

    }


    render() {

        return(
            <ListView dataSource = {this.state.datas}
        style = {{marginTop:20,backgroundColor:'white'}}
        renderRow = {this._renderRow.bind(this)}
        renderFooter={this._renderFooterView.bind(this)}
        renderHeader = {this._renderheaderView.bind(this)}
        onScroll ={(e)=>{

            console.log(e.nativeEvent);
        }}
        />

    )

    }

    _renderFooterView(){

        return (<View style={{backgroundColor:'blue',height:200}}></View>)
    }
    _renderheaderView(){

        return (<View style={{backgroundColor:'red',height:200}}></View>)

    }
    _renderSeparator(){

        return (
            <View style={{height:1,backgroundColor:'#e8e8e8'}}>

    </View>
    )
    }
//    设置每一行的样式
    // highlightRow:高亮函数,告诉她哪一行需要高亮,函数需要传入两个参数,组ID,行ID
    _renderRow(rowData,sectionID,rowID,highlightRow) {
        return (

            <TouchableOpacity>
            <View style = {{height:44,
            justifyContent:'center',
            backgroundColor:'green',
            borderBottomColor:'#e8e8e8',
            borderLeftWidth:1
        }} onPress={()=>{
            console.log(rowData)
        }}>

    <Text>{rowData}</Text>
        </View>

        </TouchableOpacity>
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