var React = require('react-native');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/explore';

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
    }

    componentDidMount() {
        const exploreAction = this.props.exploreAction;
        exploreAction.getExplore(1);
    }

    _renderRow(row){
        return (
            <Item explore={row} />
        );
    }

    _loadPage(row) {
    }

    render() {
        const {explore} = this.props;
        const items = explore.items;
    	return (
    		<View style={styles.outSideContainer}>
    		  <ListView
                dataSource={ds.cloneWithRows(items)}
                renderRow={this._renderRow}
                keyboardDismissMode="on-drag"
                automaticallyAdjustContentInsets={false}
                onEndReachedThreshold={300}
                pageSize={10}
                keyboardShouldPersistTaps={true}
                showsVerticalScrollIndicator={true}/>	
            </View>
    	)
    }
}

const mapStateToProps = (state) => ({
    explore: state.explore.toJS()
});

const mapDispatchToProps = (dispatch) => ({
    exploreAction: bindActionCreators(actions, dispatch)
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
