import React, { Component } from 'react';

const DragPropsHoc = WrappedComponent => {
    return class extends Component{
        componentDidMount(){
            console.log(this.comp);

            this.dragEvtBind();
        }

        dragEvtBind = () => {
            let el = this.comp.dragBox;
            this.initDragStyle(el);

            let mousedownEvt = e => {
                let style = el.style,
                    doc = document,
                    disTop = e.pageY - parseInt(style.top),
                    disLeft = e.pageX - parseInt(style.left);

                let moumoveEvt = e => {
                    let style = el.style;
                    style.top = e.pageY - disTop + 'px';
                    style.left = e.pageX - disLeft + 'px';
                }

                doc.addEventListener('mousemove', moumoveEvt);

                let mouseUpEvt = () => {
                    doc.removeEventListener('mousemove', moumoveEvt);
                }
                doc.addEventListener('mouseup', mouseUpEvt);
            }

            el.addEventListener('mousedown', mousedownEvt);
        }

        initDragStyle = (el) => {
            let style = el.style;
            style.position = 'absolute';
            style.top = el.offsetTop + 'px';
            style.left = el.offsetLeft + 'px';
        }

        render(){
            return <WrappedComponent ref={comp => this.comp = comp} {...this.props} /> 
        }
    } 
}

export default DragPropsHoc;