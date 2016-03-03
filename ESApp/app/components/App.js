var React = require('react-native');
var {
    Component,
    NavigatorIOS,
    TabBarIOS,
    Navigation,
} = React;
var Icon = require('react-native-vector-icons/Ionicons');

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
                <Icon.TabBarItem
                  title="发现"
                  iconName="navicon-round"
                  selectedIconName="navicon-round"
                  selected={this.state.selectedTab === "发现"}
                  onPress={() => {
                    this.setState({
                      selectedTab: "发现",
                    });
                  }}>
                  <Topic />
                </Icon.TabBarItem>
                <Icon.TabBarItem
                  title="话题"
                  iconName="chatboxes"
                  selectedIconName="chatboxes"
                  selected={this.state.selectedTab === "话题"}
                  onPress={() => {
                    this.setState({
                      selectedTab: "话题",
                    });
                  }}>
                  <Topic />
                </Icon.TabBarItem>
                <Icon.TabBarItem
                  title="用户"
                  iconName="person-stalker"
                  selectedIconName="person-stalker"
                  selected={this.state.selectedTab === "用户"}
                  onPress={() => {
                    this.setState({
                      selectedTab: "用户",
                    });
                  }}>
                  <User />
                </Icon.TabBarItem>
            </TabBarIOS>
        )
    }
}

export default App;