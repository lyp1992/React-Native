/**
 * Created by xiaomage on 2017/5/14.
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
    PixelRatio,
    DeviceEventEmitter
}
    from 'react-native'

// 获取像素比
var pixelRatio = PixelRatio.get();

var screenH = Dimensions.get('window').height;
var screenW = Dimensions.get('window').width;

var foods = require('./Res/food.json')

import XMGFoodCell from './XMGFoodCell'

// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    constructor(props){
        super(props);

        // 创建数据源
        // != !==
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1 != r2
        })

        // 设置数据
        foods.forEach((food,i)=>{
            food.count = 0;
        });

        // 保存数据源
        this.state = {
            ds:ds.cloneWithRows(foods),
            foods:[],
            foodTotalPrice:0
        }

    }

    // 监听到添加食物
    addFood(food) {
        // 计算总计
        var foodTotalPrice = this.state.foodTotalPrice;

        // 字符串转Int
        // var money =  parseInt(food.money);

        foodTotalPrice += parseInt(food.money);

        this.setState({
            foodTotalPrice:foodTotalPrice
        })


        // 保存选中食物
        var foods = this.state.foods;

        // 判断下之前有没有当前食物,
        var flag = false;

        for (var i =0; i < foods.length; i++){
            var f = foods[i];
            if (f.name == food.name) {
                flag = true;
                break;
            }
        }

        if (flag == false) {
            // 保存食物
            foods.push(food);
        }



    }

    removeFood(food){


        var foods = this.state.foods;

        // 修改数组
        if (food.count == 0) {

            var index = 0;

            // 获取角标
            for (var i =0; i < foods.length; i++){
                var f = foods[i];
                if (food.name = f.name) {
                    index = i;
                    break;
                }
            }

            foods.splice(index,1);

        }

        console.log(foods)

        // 修改界面
        var foodTotalPrice = this.state.foodTotalPrice;

        // 字符串转Int
        // var money =  parseInt(food.money);

        foodTotalPrice -= parseInt(food.money);

        this.setState({
            foodTotalPrice:foodTotalPrice
        })

    }

    componentDidMount() {

        // 从数组中移除数据
        var arr = [0,1,2,3];

        // i:2
        arr.splice(2,1);

        console.log(arr);


        // 监听添加食物通知
        DeviceEventEmitter.addListener('addFood',this.addFood.bind(this));

        DeviceEventEmitter.addListener('removeFood',this.removeFood.bind(this));
    }

    render(){

        return (
            <View style={{flex:1}}>
                <ListView style={{marginTop:20,height:screenH,width:screenW}}
                          dataSource={this.state.ds}
                          renderRow={this._renderRow.bind(this)}
                          contentInset={{top: 0, left: 0, bottom: 35, right: 0}}
                />
                {/*底部合计View*/}
                <View style={styles.bottomStyle}>
                    <Text style={{fontSize:15}}>
                        合计:
                        <Text style={{color:'red'}}>{' '+ '$' + this.state.foodTotalPrice}</Text>
                    </Text>
                    <TouchableOpacity style={styles.bottomRightStyle}>
                        <Text style={{fontSize:18, color:'white'}}>去结算</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )

    }

    // 渲染每一行数控
    _renderRow(dataRow,sectionID,rowID){

        return (
            <XMGFoodCell rowData={dataRow}/>
        )
    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    bottomStyle:{
        position:'absolute',
        bottom:0,
        height:35,
        width:screenW,
        backgroundColor:'rgba(255,255,255,0.9)',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    bottomRightStyle:{
        backgroundColor:'red',
        width:80,
        height:35,
        justifyContent:'center',
        alignItems:'center'
    }
})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);