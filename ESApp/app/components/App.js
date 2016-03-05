var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity,
  Component,
} = React;
var Icon = require('react-native-vector-icons/Ionicons');

import TopicList from './topic/List';
import UserList from './user/List';
import ExploreList from './explore/List';

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
                  <NavigatorIOS
                      style={styles.navigator}
                      initialRoute={{
                        component: ExploreList,
                        title: "发现"
                      }}/>      
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
                  <NavigatorIOS
                      style={styles.navigator}
                      initialRoute={{
                        component: TopicList,
                        title: "话题"
                      }}/>               
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
                  <NavigatorIOS
                      style={styles.navigator}
                      initialRoute={{
                        component: UserList,
                        title: "用户"
                      }}/>      
                </Icon.TabBarItem>
            </TabBarIOS>
        )
    }
}

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
  button: {
    marginTop: 20,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});


export default App;