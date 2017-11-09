import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter
}
    from 'react-native'

// 什么时候使用{},包装对象的时候使用{}
// 什么时候使用{},表达式都需要使用{}
// 什么时候使用{},变量也需要使用{}包起来
// 什么时候使用(),保证组件标签的时候,必须使用()
// 3.自定义 程序入口组件([[UIView alloc] init])

class LifeComponent extends Component {
    // 1.构造方法
    constructor(props){
        super(props);

        console.log('constructor')

        this.state = {
            money:0
        }

    }

    // 2.即将加载组件的方法
    componentWillMount() {
        console.log('componentWillMount')
    }

    // 3.render:渲染组件
    render(){
        console.log('render')
        return (
            <View style={styles.mainStyle}>
                <Text onPress={this.changeMoney.bind(this)}>修改金钱</Text>
                <Text>{this.state.money}</Text>
                <Text>{this.props.age}岁</Text>
            </View>
        )

    }

    // 4.加载组件完成的方法
    componentDidMount() {
        console.log('componentDidMount')
    }

    // 5.0 接收到新传入的props
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }

    // 5.1 是否刷新界面:返回值,true,fales
    // 当state修改,传入新的props 就会执行
    shouldComponentUpdate(state) {
        console.log('shouldComponentUpdate')
        return true;
    }

    // 6.即将刷新组件
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    // 7.刷新完成
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    // 8.组件销毁的时候调用
    componentWillUnmount() {
        // 1.移除定时器
        // 2.移除观察者 移除通知
        // 3.清楚缓存
    }

    changeMoney(){
        var money = this.state.money;

        money += 100;

        this.setState({
            money:money
        })

    }

}

class ReactDemo extends Component {
    constructor(props){
        super(props);

        this.state = {
            age:18
        }
    }

    // 3.render:渲染组件
    render(){

        return (
            <View style={styles.mainStyle}>
                <Text onPress={this.changeAge.bind(this)}>修改年级</Text>
                <LifeComponent age={this.state.age}/>
            </View>
        )

    }

    changeAge(){
        var age = this.state.age;

        age += 1;

        this.setState({
            age:age
        })


    }

}

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    mainStyle:{
        // 占据全屏
        flex:1,
        backgroundColor:'red',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },

})



// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);