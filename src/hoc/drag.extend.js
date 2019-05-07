const DragExtendHoc = WrappedComponent => {
    return class extends WrappedComponent{
        render(){
            return super.render();
        }
    }
}

export default DragExtendHoc;