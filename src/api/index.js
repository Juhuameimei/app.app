//当前模块：所有API接口进行统一管理
import requests from './request';

//三级联动的接口
///api/product/getBaseCategoryList get请求 无参数
//发起请求:axios发起请求返回结构是promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
