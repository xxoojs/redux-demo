目的：
    1.简单集成redux，了解redux数据流，中间件简单实现并接入
    2.高阶组件的应用场景：
        2.1 属性代理
        2.2 反向继承
    3.如何使用高阶组件实现redux的connect
    4.整合rxjs写一个高阶组件为wappedComponent增加拖拽功能

分享解决问题：
1.react高阶组件的两种实现方式
2.如何通过redux来实现数据双向绑定
3.redux的异步数据流如何实现
4.redux中间件如何实现并介入
5.dva的@connect装饰器，如何用高阶组件+redux来实现

准备工作：
1. npx create-react-app redux-demo搭建的项目
2. 开发容器组件：APP.js
3. 开发展示组件：avatar.js


一. 集成react-redux维护数据源:
npm install --save redux
npm install --save react-redux

整合redux：gitbook  https://cn.redux.js.org/docs

Redux的搭建步骤：
1. 安装依赖 npm install —save redux react-redux
2. 入口文件配置
	import { Provider } from 'react-redux'
	import { createStore } from 'redux'
	import reducers from './redux/reducers'
	import initState from './redux/initState'
	
	let store = createStore(reducers, initState);
	ReactDom.render(
		<Provider store={store}>
        			<App />
    		</Provider>,
		document.getElementById(‘root’)
	)
3. connect连接，注入props
    import { connect } from 'react-redux'
    export default connect(({ ds }) => ({
        ds: ds
    }))(App);

Redux的异步action处理：请看 redux/reducers.js下的 postReducer

Redux的applyMiddleware中间件logger接入：
    import { createStore, applyMiddleware } from 'redux'
    let store = createStore(Reducers, initState, applyMiddleware(logger));

    logger的实现参考middleware/logger.js


二. babel decorator集成
    1. \node_modules\babel-preset-react-app\create.js 中找到plugins添加对decorator支持
      [
        require('@babel/plugin-proposal-decorators').default,
        { legacy: true },
      ]
    
    这样就支持了装饰器模式