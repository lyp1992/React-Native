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
    Dimensions
}
    from 'react-native'

// react-native-swiper

// cocoapods      NPM:
// pod install  npm install
// podfile      package.json
// pod search   npm search(不好用)
//  npm install react-native-swiper

import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

// 3.自定义 程序入口组件([[UIView alloc] init])
class ReactDemo extends Component {

    constructor(props){
        super(props);

        this.state = {
            listData:[]
        }
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

    }
    render(){

        return (
            <Swiper height={260}
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{
                        bottom: -23, left: null, right: 10
                    }}
                    showsButtons={true}
                    autoplay={true}
                    autoplayTimeout={1}

            >
                {this._renderChildView(this.state.listData)}
            </Swiper>
        )

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
                <View key={i} style={styles.slide} title={<Text numberOfLines={1}>{zhubo.title}</Text>}>
                    <Image  resizeMode='stretch' style={styles.image} source={{uri:zhubo.icon}} />
                </View>
            )
        });

        return imgs;
    }
}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },



    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        flex: 1
    }
})

// 5.注册程序入口组件: 注册哪个组件,程序启动的时候,就会自动去加载注册组件
// 第一个参数:模块名称,随意填,与iOS模块名称一一名称
// 第二个参数:函数,箭头函数 ES6 需要返回组件类名
// 箭头函数: => 左边:函数参数,右边 函数返回值
AppRegistry.registerComponent('ReactDemo',()=>ReactDemo);