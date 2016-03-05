var React = require('react-native');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
var Utils = require('../util');

import * as actions from '../../actions/topic';

import Item from './Item';
import WebView from '../WebView';

var {
    Component,
    Text,
    View,
    ListView,
    TouchableOpacity,
    StyleSheet,
} = React;

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Topic extends Component {
    constructor(props) {
        super(props);
        this._loadPage = this._loadPage.bind(this);
        this._renderRow = this._renderRow.bind(this);
    }

    componentDidMount() {
        const topicAction = this.props.topicAction;
        topicAction.users(1, []);
    }

    _renderRow(row){
        return (
          <Item topic={row} onSelect={() => this._loadPage(row)} />
        );
    }

    _loadPage(row) {
        console.log(this.props.navigator)
        this.props.navigator.push({
          component: WebView,
          passProps:{
            backName: '话题',
            title: row.tag,
            source: "http://elasticsearch.cn/explore/ajax/list/sort_type-new__topic_id-38,6__page-2"
          }
        });
    }

    render() {
        const {topic} = this.props;
        const items = topic.items;
    	return (
            <View style={styles.outSideContainer}>
              {topic.isFetching && Utils.loading }
             {!topic.isFetching && 
    		  <ListView
                dataSource={ds.cloneWithRows(items)}
                renderRow={this._renderRow}
                keyboardDismissMode="on-drag"
                automaticallyAdjustContentInsets={false}
                onEndReachedThreshold={300}
                pageSize={10}
                keyboardShouldPersistTaps={true}
                showsVerticalScrollIndicator={true}/>
                }	
            </View>
    	)
    }
}

const mapStateToProps = (state) => ({
    topic: state.topic.toJS()
});

const mapDispatchToProps = (dispatch) => ({
    topicAction: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topic)

var styles = StyleSheet.create({
    outSideContainer: {
        paddingTop: 60,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
    }
});
