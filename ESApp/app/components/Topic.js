var React = require('react-native');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
var {
    Component,
    Text,
    View,
} = React;

export default class Topic extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    	return (
    		<View>
    			<Text>话题</Text>
    		</View>
    	)
    }
}