/**
 * Created by xiaomage on 2017/5/13.
 */


export default class Person {


    static defaultProps = {
        abc:10
    }


    // 定义属性 : =
    age=10;

    // 定义方法
    eat(){
        console.log('吃');
    }

    static money = 10;

    static eat(){
        console.log('类方法-吃');
    }

}