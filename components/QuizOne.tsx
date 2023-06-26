import React, {Component} from 'react';
import {RadioButton} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
interface IProps {
  navigation?: any;
}
interface IState {
  checked: string;
  errorMsg: string;
}
class QuizOne extends Component<IProps, IState> {
  state = {
    checked: '',
    errorMsg: '',
  };
  onPressNext = () => {
    const {checked} = this.state;
    if (checked === '') {
      this.setState({errorMsg: '*Plese Select Option'});
    } else {
      if (checked === 'Object-Based') {
        this.props.navigation.navigate('secondQes', {totalScore: 1});
      } else {
        this.props.navigation.navigate('secondQes', {totalScore: 0});
      }
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.mainCantainer}>
        <View style={styles.quizCrad}>
          <Text style={styles.javaScriptHead}>Javascript Quiz</Text>
          <View style={styles.QuestionCrad}>
            <Text style={styles.questionHead}> Question 1 </Text>
            <Text style={styles.qusetinText}>
              Which type of JavaScript language is ___?
            </Text>
            <View style={styles.optinsCrad}>
              <RadioButton
                value="Object-Oriented"
                status={
                  this.state.checked === 'Object-Oriented'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() =>
                  this.setState({checked: 'Object-Oriented', errorMsg: ''})
                }
              />
              <Text style={styles.optionsText}>Object-Oriented</Text>
            </View>
            <View style={styles.optinsCrad}>
              <RadioButton
                value="Object-Based"
                status={
                  this.state.checked === 'Object-Based'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() =>
                  this.setState({checked: 'Object-Based', errorMsg: ''})
                }
              />
              <Text style={styles.optionsText}>Object-Based</Text>
            </View>
            <View style={styles.optinsCrad}>
              <RadioButton
                value="Assembly-language"
                status={
                  this.state.checked === 'Assembly-language'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() =>
                  this.setState({checked: 'Assembly-language', errorMsg: ''})
                }
              />
              <Text style={styles.optionsText}>Assembly-language</Text>
            </View>
            <View style={styles.optinsCrad}>
              <RadioButton
                value="High-level"
                status={
                  this.state.checked === 'High-level' ? 'checked' : 'unchecked'
                }
                onPress={() =>
                  this.setState({checked: 'High-level', errorMsg: ''})
                }
              />
              <Text style={styles.optionsText}>High-level</Text>
            </View>
            <Text style={styles.errorMsg}>{this.state.errorMsg}</Text>
            <TouchableOpacity style={styles.nextBtn} onPress={this.onPressNext}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainCantainer: {
    flex: 1,
  },
  quizCrad: {
    flex: 1,
  },
  javaScriptHead: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 20,
  },
  QuestionCrad: {
    flex: 1,
    padding: 20,
  },
  questionHead: {
    fontSize: 30,
    width: 300,
    padding: 10,
    borderBottomColor: '#a4aaab',
    borderBottomWidth: 2,
    marginLeft: 20,
    marginBottom: 20,
  },
  qusetinText: {
    fontSize: 20,
  },
  optinsCrad: {
    flexDirection: 'row',
    margin: 10,
  },
  optionsText: {
    fontSize: 17,
    marginTop: 5,
    marginLeft: 10,
    width: 200,
  },
  nextBtn: {
    backgroundColor: '#0758e3',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 20,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 20,
  },
  errorMsg: {
    color: '#e32117',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default QuizOne;
