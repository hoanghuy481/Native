import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native';

const App = () => {
  let operations = ['D','+', '-', '*', '/'];

  const [resultText, setResultText] = useState("");
  const [calculationText, setCalculationText] = useState("");

  const calculateResult = () => {
    const text = resultText
    console.log(text, eval(text));
    setCalculationText(eval(text))
  }

  const buttonPressed = (text) => {
    if(text == '='){
      return calculateResult()
    } else if (text == 'AC'){
      return setResultText("")
    } else {
      setResultText(resultText+text)
    }
  }

  const operate = (operation) => {
    switch(operation) {
      case 'D':
        let text = resultText.split('') //phẩn tách chuỗi thành mảng
        text.pop() //xóa phần tử cuối
        setResultText(text.join('')) //tạo ra một chuỗi mới bằng các nối tất cả các phần tử của mảng
        break
      case '+':
        const lastChar = resultText.split('').pop()
        if(operations.indexOf(lastChar) > 0) return //ngăn không cho thêm operation và chuỗi khi phía trước không có số
        if(resultText == "") return //ngăn không cho thêm operation vào chuỗi operation khi không có số nào trong chuỗi
        setResultText(resultText + operation)
        break        
      case '-':
        if(operations.indexOf(lastChar) > 0) return 
        if(resultText == "") return 
        setResultText(resultText + operation)
        break
      case '*':
        if(operations.indexOf(lastChar) > 0) return
        if(resultText == "") return
        setResultText(resultText + operation)
        break
      case '/':
        if(operations.indexOf(lastChar) > 0) return
        if(resultText == "") return
        setResultText(resultText + operation)
        break
    }
  }

  let rows = []
  let nums = [['AC', '+/-', '%'], [1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
  for(let i = 0; i < 5; i++){
    let row = []
    for(let j = 0; j < 3; j++){
      row.push(
        <TouchableOpacity onPress={() => buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>
      )
    }
    rows.push(<View style={styles.row}>{row}</View>)
  }

  
  let ops = []
  for(let i = 0; i < 5; i++){
    ops.push(
      <TouchableOpacity style={styles.btn} onPress={() => operate(operations[i])}>
        <Text style={styles.btntext, styles.white}>{operations[i]}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.caculation}>
        <Text style={styles.caculationText}>{calculationText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          {rows}
        </View>
        <View style={styles.operations}>
            {ops}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultText: {
    fontSize: 60,
    color: 'white'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  
  btntext: {
    fontSize: 35
  },
  caculationText: {
    fontSize: 70,
    color: 'white'
  },
  white: {
    color: 'white',
    fontSize: 35,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  caculation: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'darkgray'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'orange',
  }
})

export default App;
