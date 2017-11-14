

import React, {Component,PropTypes} from 'react'

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
    Dimensions
}
    from 'react-native'

/*
*   PropTypes:
*      ↔作用:暴露属性,让外界有提示功能
*       作用:检测类型
*       不会生成这个属性
* */

export default class YPCompoent extends Component{

    // 暴露一些属性出去
    // PropTypes:在React中才有,只能用于组件
    // 必须前面添加static
    // propTypes:定义属性, 但不会真正生成属性
    static propTypes = {
        name: PropTypes.string,
        click:PropTypes.func
    }

    // 生成属性,初始化值,给props初始化值
    // defaultProps : 底层就会把类属性defaultProps里面的值赋值给props
    static defaultProps = {
        name:'lyp',
        click:()=>{
        console.log('点击了')
    }
    }
    money:10;

    render(){
        console.log(this);
        this.props.click();
        return(
            <View style = {{backgroundColor:'red',flex:1,alignItems:'center',justifyContent:'center'}}>

                <Text>{this.props.name}</Text>

            </View>

        )

}
}