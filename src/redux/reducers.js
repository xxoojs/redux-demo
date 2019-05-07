import { combineReducers } from 'redux';
import fetch from 'cross-fetch'
import {
	GET_DATASOURCE,
	REQUEST_POSTS,
	RECEIVE_POSTS,
	SET_DATASOURCE
} from './actions'

const dsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_DATASOURCE:
			return Object.assign({}, state, {
				ds: [{
					id: 1,
					avatar: 'https://cdn.nlark.com/yuque/0/2019/jpeg/anonymous/1557137977726-6119ea8b-5eed-4e01-b03e-8297d359cb9a.jpeg?x-oss-process=image/resize,m_fill,w_48,h_48/format,png',
					nickName: 'WHOAMI',
					desc: 'WHOAMI'
				},{
					id: 2,
					avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
					nickName: 'ANTDESIGN',
					desc: 'ANTDESIGN'
				}]
			})
		case SET_DATASOURCE:
			return Object.assign({}, state, action);
		default:
			return state
	}
}

const postReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_POSTS:
		case REQUEST_POSTS:
			return fetch(`/mock.json`).then(response => {
				return response.json();
			}).then(json => {
				// 用这一行代码无法实现state更新
				return Object.assign({}, state, json);

				// callback再dispatch解决redux异步action问题，有个问题是dispatch哪里来
				// action.dispatch({
				// 	type: 'SET_DATASOURCE',
				// 	...json
				// });
			}).catch(e => {
				console.warn(e);
			});
		default:
			return state
	}
}

const rootReducer = combineReducers({
	postReducer,
	dsReducer
})

export default rootReducer;