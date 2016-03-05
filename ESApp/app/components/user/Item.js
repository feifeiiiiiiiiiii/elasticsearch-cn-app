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
        const item = this.props.user;
        const meta = `威望: ${item.prestige} 积分: ${item.score} 赞同: ${item.agree} 感谢: ${item.thank}`;
        return (
          <View>
            <TouchableHighlight >
              <View style={styles.row}>
                <Image
                  source={{uri: item.img}}
                  style={styles.cellImage} />
                <View style={styles.textContainer}>
                  <Text style={styles.tagTitle} numberOfLines={1}>
                    {item.nickname} 
                  </Text>
                  <Text style={styles.tagDesc} numberOfLines={1}>
                    {meta}
                  </Text>
                  <Text style={styles.tagDesc} numberOfLines={1}>
                    擅长话题: {item.desc}
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
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 2,
  },
  tagDesc: {
    marginTop: 4,
    color: '#999999',
    fontSize: 14,
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