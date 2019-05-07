import { connect } from 'react-redux';

const connectHoc = fn => wrappedComponent => {
    return connect(fn)(wrappedComponent);
}

export default connectHoc;