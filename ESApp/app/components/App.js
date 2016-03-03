var React = require('react-native');
var {
    Component,
    NavigatorIOS,
    TabBarIOS,
    Navigation,
} = React;

import Topic from './Topic';
import User from './User';
import Explore from './Explore';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: '发现'};
    }
    render() {
        return(
            <TabBarIOS>
                <TabBarIOS.Item
                    title="发现"
                    selected={this.state.selectedTab === '发现'}
                    onPress={() => {
                            this.setState({
                                selectedTab: "发现"
                            })
                        }
                    }>
                <Explore />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="话题"
                    selected={this.state.selectedTab === '话题'}
                    onPress={() => {
                            this.setState({
                                selectedTab: "话题"
                            })
                        }
                    }>
                <Topic />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="用户"
                    selected={this.state.selectedTab === '用户'}
                    onPress={() => {
                            this.setState({
                                selectedTab: "用户"
                            })
                        }
                    }>
                <User />
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}

export default App;