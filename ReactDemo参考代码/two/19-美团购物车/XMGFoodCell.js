/**
 * Created by xiaomage on 2017/5/14.
 */

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
    Dimensions,
    ListView,
    PixelRatio,
    DeviceEventEmitter
}
    from 'react-native'

// 获取像素比
var pixelRatio = PixelRatio.get();

export default class XMGFoodCell extends Component {

    static propTypes = {
        rowData:PropTypes.object
    }

    constructor(props){
        super(props);

        this.state = {
            count:this.props.rowData.count,
            disabled:true
        }
    }

    // 添加食物
    addFood(){

        var count = this.state.count;

        count += 1;

        // 记录当前数量
        this.props.rowData.count = count;

        this.setState({
            count:count,
            disabled:false
        })

        // 通知底部合计View 修改价格
        DeviceEventEmitter.emit('addFood',this.props.rowData);

    }

    // 移除食物
    removeFood(){
        var count = this.state.count;

        count -= 1;

        if (count == 0) {
            this.setState({
                disabled:true
            })
        }

        // 记录当前数量
        this.props.rowData.count = count;

        // 修改界面
        this.setState({
            count:count
        })

        // 通知底部合计View 修改价格
        DeviceEventEmitter.emit('removeFood',this.props.rowData);
    }

    render(){
        return(
            <View style={styles.cellStyle}>
                <Image source={{uri:this.props.rowData.image}} style={styles.imageStyle}/>
                {/*middle*/}
                <View style={{justifyContent:'space-around',marginLeft:10}}>
                    <Text style={{fontSize:18}}>{this.props.rowData.name}</Text>
                    <Text  style={{fontSize:15,color:'red'}}>{'$'+this.props.rowData.money}</Text>
                </View>
                {/*右边*/}
                <View style={styles.countStyle}>
                    {/* - */}
                    <TouchableOpacity onPress={this.removeFood.bind(this)}
                                      disabled={this.state.disabled}
                    >
                        <Text style={[styles.textCountStyle,{color:this.state.disabled?'#e8e8e8':'black'}]}>-</Text>
                    </TouchableOpacity>

                    {/*count*/}
                    <Text style={styles.textCountStyle}>{this.state.count}</Text>

                    {/* + */}
                    <TouchableOpacity onPress={this.addFood.bind(this)}>
                        <Text style={styles.textCountStyle}>+</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

}

var styles = StyleSheet.create({
    imageStyle:{
        width:80,
        height:80,
        borderRadius:5
    },
    cellStyle:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#e5e5e5',
        flexDirection:'row',

    },
    countStyle:{
        position:'absolute',
        right:10,
        alignSelf:'center',
        flexDirection:'row'
    },
    textCountStyle:{
        fontSize:19,
        width:30,
        height:30,
        borderWidth:1/pixelRatio,
        borderColor:'#e8e8e8',
        textAlign:'center',
        lineHeight:30
    }
})
