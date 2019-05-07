import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Avatar extends PureComponent{
    style = {
        box: { width: 300, height: 48, lineHeight: '48px', boxShadow: '4px 4px 8px #999', marginBottom: 50, borderTopLeftRadius: 24, borderBottomLeftRadius: 24 },
        img: { width: 48, height: 48, borderRadius: '50%'},
        label: { verticalAlign: 'text-bottom', marginLeft: 10, fontSize: 26, color: '#666', fontFamily: 'fantasy' }
    }

    render(){
        const { dataSource } = this.props;
        const { box, img, label } = this.style;

        return (
            <div style={box} ref={dragBox => this.dragBox = dragBox}>
                <img style={img} src={dataSource.avatar} alt={dataSource.desc} />
                <span style={label}>{dataSource.nickName}</span>
            </div>
        )
    }
}

Avatar.propTypes = {
    dataSource: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        nickName: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    })
}

export default Avatar;