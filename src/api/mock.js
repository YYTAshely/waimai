import Mock from 'mockjs'
import homeApi from './mockData/homeapi'
import storeApi from './mockData/storeApi'
Mock.mock('home/getHomeData',homeApi.getHomeData)
Mock.mock('home/getStoreData',storeApi.getStoreData)