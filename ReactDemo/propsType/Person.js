/**
 * Created by xiaomage on 2017/5/13.
 */

export default class Person{

  // 定义属性
    age = 10;
    //定义放到
    eat(){

        console.log('吃');
    }
    //这种定义是类内部的属性，外界拿不到
    // static money = 10;
    static chi(){

        console.log('类方法吃');
    }
}