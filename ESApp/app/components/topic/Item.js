var React = require('react-native');
var {
    Component,
    Text,
    View,
    ListView,
    TouchableOpacity,
    StyleSheet,
    Image,
    TouchableHighlight,
} = React;

export default class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.topic;
        return (
          <View>
            <TouchableHighlight onPress={this.props.onSelect} >
              <View style={styles.row}>
                <Image
                  source={{uri: item.img}}
                  style={styles.cellImage} />
                <View style={styles.textContainer}>
                  <Text style={styles.tagTitle} numberOfLines={1}>
                    {item.tag} 
                  </Text>
                  <Text style={styles.tagDesc} numberOfLines={1}>
                    {item.talk}
                  </Text>
                  <Text style={styles.tagDesc} numberOfLines={1}>
                      {item.desc}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
      );
    }
};

var styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  tagTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  tagDesc: {
    marginTop: 5,
    color: '#999999',
    fontSize: 12,
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
  },
  cellImage: {
    backgroundColor: '#dddddd',
    height: 50,
    marginRight: 10,
    width: 50,
  },
});