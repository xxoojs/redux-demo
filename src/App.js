import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Avatar from './components/avatar';
import connectHoc from './hoc/connect';

// import DragExtendHoc from './hoc/drag.extend';
// const DragExtendComponent = DragExtendHoc(Avatar);

import DragPropsHoc from './hoc/drag.prop';
const DragPropsComponent = DragPropsHoc(Avatar);

@connectHoc(({ dsReducer: { ds } }) => ({
	dataSource: ds
}))
class App extends Component{
	componentDidMount(){
		this.search();
	}

	search = () => {
		const { dispatch } = this.props;
		
		dispatch({
			type: 'GET_DATASOURCE',
			payload: {}
		});

		// dispatch({
		// 	type: 'REQUEST_POSTS',
		// 	dispatch: dispatch
		// });
	}

	render(){
		const { dataSource } = this.props;
		return (
			<div style={{padding: 100}}>
				{/* 普通写法 */}
				{/* {
					dataSource && dataSource.map(item => <Avatar key={item.id} dataSource={item}/>)
				} */}

				{/* 反向继承高阶写法 */}
				{/* {
					dataSource && dataSource.map(item => <DragExtendComponent key={item.id} dataSource={item}/>)
				} */}

				{/* 属性代理高阶写法 */}
				{
					dataSource && dataSource.map(item => <DragPropsComponent key={item.id} dataSource={item}/>)
				}
			</div>
		);
	}
}

// export default connect(({ ds }) => ({
// 	ds: ds
// }))(App);
export default App;
