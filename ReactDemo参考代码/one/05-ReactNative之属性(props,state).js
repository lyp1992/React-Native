/**
 * Created by xiaomage on 2017/5/6.
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View
}

    from 'react-native'

// 什么时候使用{},包装对象的时候使用{}
// 什么时候使用{},表达式都需要使用{}
// 什么时候使用{},变量也需要使用{}包起来
// 什么时候使用(),保证组件标签的时候,必须使用()

// js:属性动态添加

// 每个组件都有一个props属性,自动生成属性,都会放入到这个属性中

// 显示所有工资

class XMGView extends Component {

    updateMoney(){

        // 获取钱
        var money = this.state.money;

        money += 100000;

        this.setState({
            money:money,
        })

        console.log(this.state.age)
    }


    // 组件构造方法
    constructor(props){
        super(props);

        // 定义state
        this.state = {
            money:0,
            age:1
        }

        console.log(this)

        // 开启定时器,
        // 第一个参数:函数,每隔一端时间,需要做什么事情
        // 第二个参数:时间,毫秒 1000 = 1秒
        // bind:给当前方法指定一个方法调用者,并且返回方法本身

        setInterval(this.updateMoney.bind(this),1000);

    }

    render(){
        return (
            <View style={styles.xmgViewStyle}>
                <Text>共有 + {this.state.money}</Text>
            </View>
        )
    }
}

// 什么时候使用,分隔符,当在对象里面,分割属性的时候,需要使用,

// 怎么获取生成属性,props
//  props:不能再自己的组件中修改,只能在父组件修改

// 如果想在自己的组件中,修改属性? state



// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {



    // 当一个组件要显示的时候,就会自动调用render,渲染组件
    render(){
        var str = 'gogogogogogogogogogogo'
        return (
            <View style={styles.mainStyle}>
                {/*<XMGView name="yz" age={1}/>*/}
                <XMGView/>
            </View>

        )

    }


}

//  flexDirection:column,默认主轴:垂直
//  flexWrap:换行

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    mainStyle:{
        // 占据全屏
        flex:1,
        backgroundColor:'red',
        marginTop:20,
    },
    xmgViewStyle:{
        width:100,
        height:100,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    }
})


// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);

