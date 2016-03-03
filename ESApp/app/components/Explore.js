var React = require('react-native');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
var {
    Component,
    Text,
    View,
} = React;

export default class Explore extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	return (
    		<View>
    			<Text>发现</Text>
    		</View>
    	)
    }
}