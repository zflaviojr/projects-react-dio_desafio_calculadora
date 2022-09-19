import { Container, Content, Row, Column } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0'); //estado inicial 0
  const [firstNumber, setFirstNumber] = useState('0');
  const [currentOperator, setCurrentOperator] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${currentNumber === '0' ? '' : prev}${number}`);
  }

  const handleOnClear = () => {
    clearDisplay();
    setCurrentNumber('0');
    setFirstNumber('0');
    setCurrentOperator('');
  }

  const clearDisplay = () => {
    setCurrentNumber('');
  }

  const handleOperation = (operator) => {
    if( firstNumber === '0' ){
      setFirstNumber(currentNumber);
      clearDisplay();
    }
    setCurrentOperator(operator);
  }

  const handleOnEquals = () => {
    switch( currentOperator ) {
      case '+' :
        setCurrentNumber(parseInt(firstNumber) + parseInt(currentNumber));
        setFirstNumber('0');
        break;
      case '-' :
        setCurrentNumber(parseInt(firstNumber) - parseInt(currentNumber));
        setFirstNumber('0');
        break;
      case '*' :
        setCurrentNumber(parseInt(firstNumber) * parseInt(currentNumber));
        setFirstNumber('0');
        break;
      case '/' :
        setCurrentNumber(parseInt(firstNumber) / parseInt(currentNumber));
        setFirstNumber('0');
        break;
      default :
        setCurrentOperator("");
        break;
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
          <Row>
            <Button label={"1"} onClick={() => handleAddNumber("1")}/>
            <Button label={2} onClick={() => handleAddNumber("2")}/>
            <Button label={3} onClick={() => handleAddNumber("3")}/>
            <Button label={"+"} onClick={() => handleOperation("+")}/>
          </Row>
          <Row>
            <Button label={"4"} onClick={() => handleAddNumber("4")}/>
            <Button label={5} onClick={() => handleAddNumber("5")}/>
            <Button label={6} onClick={() => handleAddNumber("6")}/>
            <Button label={"-"} onClick={() => handleOperation("-")}/>
          </Row>
          <Row>
            <Button label={"7"} onClick={() => handleAddNumber("7")}/>
            <Button label={8} onClick={() => handleAddNumber("8")}/>
            <Button label={9} onClick={() => handleAddNumber("9")}/>
            <Button label={"*"} onClick={() => handleOperation("*")}/>
          </Row>
          <Row>
            <Button label={"C"} onClick={handleOnClear}/>
            <Button label={0} onClick={() => handleAddNumber("0")}/>
            <Button label={"/"} onClick={() => handleOperation("/")}/>
            <Button label={"="} onClick={handleOnEquals}/>
          </Row>
      </Content>
       
    </Container>
  );
}

export default App;
