var React = require('react-native');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
var Utils = require('../util');

import * as actions from '../../actions/user';

import Item from './Item';

var {
    Component,
    Text,
    View,
    ListView,
    TouchableOpacity,
    StyleSheet,
} = React;

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class List extends Component {
    constructor(props) {
        super(props);
        this._loadPage = this._loadPage.bind(this);
        this._renderRow = this._renderRow.bind(this);
        this.onEndReached = this.onEndReached.bind(this);
    }

    componentDidMount() {
        const userAction = this.props.userAction;
        userAction.getUser(1, []);
    }

    _renderRow(row){
        return (
            <Item user={row} />
        );
    }

    _loadPage(row) {
    }

    onEndReached() {
        const {userAction, user} = this.props;
        if(user.isFetching) return;
        userAction.getUser(user.page, user.items);
    }

    render() {
        const {user} = this.props;
        const items = user.items;
    	return (
    		<View style={styles.outSideContainer}>
             {user.isFetching && Utils.loading }
    		  <ListView
                dataSource={ds.cloneWithRows(items)}
                renderRow={this._renderRow}
                keyboardDismissMode="on-drag"
                automaticallyAdjustContentInsets={false}
                onEndReachedThreshold={400}
                onEndReached={this.onEndReached}
                keyboardShouldPersistTaps={true}
                showsVerticalScrollIndicator={true}/>	
            </View>
    	)
    }
}

const mapStateToProps = (state) => ({
    user: state.user.toJS()
});

const mapDispatchToProps = (dispatch) => ({
    userAction: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

var styles = StyleSheet.create({
    outSideContainer: {
        paddingTop: 60,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
    }
});
