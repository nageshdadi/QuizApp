/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-class-members */
/* eslint-disable no-labels */
import React, {Component} from 'react';
import {RadioButton} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const questions: any[] = [
  {
    id: 1,
    qes: 'Which type of JavaScript language is ___',
    a: 'Object-Oriented',
    b: 'Object-Based',
    c: 'Assembly-language',
    d: 'High-level',
    correct: 'Object-Based',
    userAns: '',
  },
  {
    id: 2,
    qes: ' When interpreter encounters an empty statements, what it will do:',
    a: 'Shows a warning',
    b: 'Prompts to complete the statement',
    c: 'Throws an error',
    d: 'Ignores the statements',
    correct: 'Ignores the statements',
  },
  {
    id: 3,
    qes: 'Which of the following keywords is used to define a variable in Javascript?',
    a: 'var',
    b: 'let',
    c: 'Both A and B',
    d: 'None of These',
    correct: 'Both A and B',
  },
  {
    id: 4,
    qes: 'How can a datatype be declared to be a constant type?',
    a: 'const',
    b: 'var',
    c: 'let',
    d: 'constant',
    correct: 'const',
  },
  {
    id: 5,
    qes: ' When interpreter encounters an empty statements, what it will do:',
    a: 'Shows a warning',
    b: 'Prompts to complete the statement',
    c: 'Throws an error',
    d: 'Ignores the statements',
    correct: 'Ignores the statements',
  },
  {
    id: 6,
    qes: 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
    a: 'boolean',
    b: 'undefined',
    c: 'object',
    d: 'string',
    correct: 'object',
  },
  {
    id: 7,
    qes: 'Which of the following are closures in Javascript?',
    a: 'variables',
    b: 'functions',
    c: 'objects',
    d: 'All of the above',
    correct: 'All of the above',
  },
  {
    id: 8,
    qes: ' When interpreter encounters an empty statements, what it will do:',
    a: 'Shows a warning',
    b: 'Prompts to complete the statement',
    c: 'Throws an error',
    d: 'Ignores the statements',
    correct: 'Ignores the statements',
  },
  {
    id: 9,
    qes: 'Which type of JavaScript language is ___',
    a: 'Object-Oriented',
    b: 'Object-Based',
    c: 'Assembly-language',
    d: 'High-level',
    correct: 'Object-Based',
  },
  {
    id: 10,
    qes: 'How can a datatype be declared to be a constant type?',
    a: 'const',
    b: 'var',
    c: 'let',
    d: 'constant',
    correct: 'const',
  },
];
const prevChecked: any[] = [];
let topIndex: number = 0;
interface IProps {
  navigation?: any;
}
interface IState {
  checked: string;
  errorMsg: string;
  initialIndex: number;
  score: number;
}
class SecondQes extends Component<IProps, IState> {
  state = {
    checked: '',
    errorMsg: '',
    initialIndex: 0,
    score: 0,
  };
  onPressNextBtn = () => {
    const {initialIndex, checked} = this.state;
    console.log(topIndex);
    console.log(prevChecked.length);
    console.log(prevChecked.length <= topIndex);
    if (prevChecked.length <= topIndex) {
      prevChecked[initialIndex] = checked;
      topIndex = topIndex + 1;
      if (checked === '') {
        this.setState({errorMsg: '*Please Select Option'});
      } else {
        if (checked === questions[initialIndex].correct) {
          this.setState({score: this.state.score + 1});
          if (initialIndex < questions.length - 1) {
            this.setState({
              initialIndex: this.state.initialIndex + 1,
              checked: '',
            });
          }
        } else {
          if (initialIndex < questions.length - 1) {
            this.setState({
              initialIndex: this.state.initialIndex + 1,
              checked: '',
            });
          }
        }
      }
    }
  };

  onPressPrevBtn = () => {
    const {initialIndex} = this.state;
    const val: string = prevChecked[initialIndex - 1];
    if (initialIndex > 0) {
      this.setState({
        initialIndex: this.state.initialIndex - 1,
        checked: val,
      });
      if (val === questions[initialIndex - 1].correct) {
        this.setState({score: this.state.score - 1});
      }
    }
  };

  onPressSubmitBtn = () => {
    const {initialIndex, checked} = this.state;
    if (checked === '') {
      this.setState({errorMsg: '*Please Select Option'});
    } else {
      if (checked === questions[initialIndex].correct) {
        this.props.navigation.navigate('scoreCrad', {
          totalScore: this.state.score + 1,
        });
      } else {
        this.props.navigation.navigate('scoreCrad', {
          totalScore: this.state.score,
        });
      }
    }
  };
  render() {
    const {initialIndex, score} = this.state;
    const scorbarWidth: number = (initialIndex + 1) * 10;
    // console.log(score);
    // console.log(this.state.checked);
    return (
      <SafeAreaView style={styles.mainCantainer}>
        <View style={styles.quizCrad}>
          <Text style={styles.javaScriptHead}>Javascript Quiz</Text>
          <View
            style={{
              height: 5,
              backgroundColor: '#2c9609',
              width: `${scorbarWidth}%`,
            }}>
            <Text>.</Text>
          </View>
          {questions && (
            <View style={styles.QuestionCrad}>
              <Text style={styles.questionHead}>
                {' '}
                Question {questions[initialIndex].id}{' '}
              </Text>
              <Text style={styles.qusetinText}>
                {questions[initialIndex].qes}
              </Text>
              <View style={styles.optinsCrad}>
                <RadioButton
                  value={questions[initialIndex].a}
                  status={
                    this.state.checked === `${questions[initialIndex].a}`
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() =>
                    this.setState({
                      checked: `${questions[initialIndex].a}`,
                      errorMsg: '',
                    })
                  }
                />
                <Text style={styles.optionsText}>
                  {questions[initialIndex].a}
                </Text>
              </View>
              <View style={styles.optinsCrad}>
                <RadioButton
                  value={questions[initialIndex].b}
                  status={
                    this.state.checked === `${questions[initialIndex].b}`
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() =>
                    this.setState({
                      checked: `${questions[initialIndex].b}`,
                      errorMsg: '',
                    })
                  }
                />
                <Text style={styles.optionsText}>
                  {questions[initialIndex].b}
                </Text>
              </View>
              <View style={styles.optinsCrad}>
                <RadioButton
                  value={questions[0].a}
                  status={
                    this.state.checked === `${questions[initialIndex].c}`
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() =>
                    this.setState({
                      checked: `${questions[initialIndex].c}`,
                      errorMsg: '',
                    })
                  }
                />
                <Text style={styles.optionsText}>
                  {questions[initialIndex].c}
                </Text>
              </View>
              <View style={styles.optinsCrad}>
                <RadioButton
                  value={questions[0].d}
                  status={
                    this.state.checked === `${questions[initialIndex].d}`
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() =>
                    this.setState({
                      checked: `${questions[initialIndex].d}`,
                      errorMsg: '',
                    })
                  }
                />
                <Text style={styles.optionsText}>
                  {questions[initialIndex].d}
                </Text>
              </View>
              <Text style={styles.errorMsg}>{this.state.errorMsg}</Text>
              {questions[initialIndex].id !== 10 && (
                <TouchableOpacity
                  style={styles.nextBtn}
                  onPress={this.onPressNextBtn}>
                  <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
              )}
              {questions[initialIndex].id === 10 && (
                <TouchableOpacity
                  style={styles.nextBtn}
                  onPress={this.onPressSubmitBtn}>
                  <Text style={styles.btnText}>submit</Text>
                </TouchableOpacity>
              )}
              {questions[initialIndex].id !== 1 && (
                <TouchableOpacity
                  style={styles.prevBtn}
                  onPress={this.onPressPrevBtn}>
                  <Text style={styles.btnText}>Previous</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
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
  prevBtn: {
    backgroundColor: '#bfb345',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 20,
  },
});

export default SecondQes;
