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

/*
 *
 * 使用ListView步骤
 * 1.创建数据源对象 new ListView.DataSource()
 * 2.设置数据 cloneWithRow []
 * 3.实现渲染每一行方法 renderRow
 * */


class ReactDemo extends Component {

    constructor(props){
        super(props);

        // 创建对象,必须使用New
        // 创建数据源
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>{r1 != r2}
        })

        // 设置数据
        // cloneWithRows:返回一个新的并且已经赋值好的数据源对象
        ds = ds.cloneWithRows(['row1','row2']);

        // dataBlob =  {s1:['row1','row2']}

        console.log(ds)

        this.state = {
            ds:ds
        }

    }

    // contentSize:总行的高度+头部+尾部 88 + 300 + 200 588
    // ListView的contentSize包含分割线
    render(){

        return (
            <ListView dataSource={this.state.ds}
                      renderRow={this._renderRow.bind(this)}
                      style={{marginTop:20,backgroundColor:'red'}}
                      renderHeader={this._renderHeader.bind(this)}
                      renderFooter={this._renderFooter.bind(this)}
                      onScroll={(e)=>{
                          console.log(e.nativeEvent);
                      }}
            />

        )


    }



    _renderHeader(){
        return ( <View style={{backgroundColor:'blue',height:300}}></View>)
    }

    _renderFooter(){
        return (<View style={{backgroundColor:'yellow',height:200}}></View>)
    }

    // 渲染分割线
    _renderSeparator(){
        return (
            <View style={{height:1,backgroundColor:'#e8e8e8'}}>

            </View>
        )
    }

    // highlightRow:高亮函数,告诉她哪一行需要高亮,函数需要传入两个参数,组ID,行ID
    // 返回每一行的外观
    _renderRow(rowData,sectionID,rowID,highlightRow){
        console.log(sectionID,rowID,rowData);

        return (
            <TouchableOpacity>
                <View style={{
                    height:44,
                    justifyContent:'center',
                    backgroundColor:'green',
                    borderBottomWidth:1,
                    borderBottomColor:'#e8e8e8'
                }} onPress={()=>{

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