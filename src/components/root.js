import React from 'react';
// 定义了要输出的类 MenuList （这个要用于路由配置中）
class Root extends React.Component {
    state = {
    };
    render() {
        return (
            <div className="root">
                {this.props.children}
            </div>

        );
    }
};
export default Root;