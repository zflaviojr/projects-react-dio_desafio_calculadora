import { InputContainer } from "./styles";

const Input = ({value}) => {
    return (
      <InputContainer>
         <input id='displayCalc' disabled value={value} />
      </InputContainer>
    );
  }
  
export default Input;
  