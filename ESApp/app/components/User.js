var React = require('react-native');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
var {
    Component,
    Text,
    View,
} = React;

export default class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	return (
    		<View>
    			<Text>用户</Text>
    		</View>
    	)
    }
}