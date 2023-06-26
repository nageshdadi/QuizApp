/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface IProps {
  navigation?: any;
  route?: any;
}
class ScoreCrad extends Component<IProps> {
  render() {
    console.log(this.props.route.params);
    const {totalScore} = this.props.route.params;
    const feedBack: string =
      totalScore === 10 ? 'Congratulations' : 'Better luck next time';
    const col: string = totalScore === 10 ? '#2fbd53' : '#bd5e2f';
    return (
      <View style={styless.scoreCrad}>
        <View style={styless.scoreMainCrad}>
          <Text style={styless.scoreHead}> Score</Text>
          <Text style={styless.scoreText}>{totalScore}/10</Text>
          <Text style={{fontSize: 20, color: `${col}`}}>{feedBack}</Text>
        </View>
      </View>
    );
  }
}

const styless = StyleSheet.create({
  scoreCrad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreMainCrad: {
    height: 400,
    width: 300,
    backgroundColor: '#e8b8a0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  scoreHead: {
    fontSize: 30,
  },
  scoreText: {
    fontSize: 60,
    margin: 20,
    color: '#ffffff',
  },
});

export default ScoreCrad;
