import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const Li = styled('li')`
  padding: 4px;
`;

const options = ["Option 1", "Option 2"];

const ControlledStates = () => {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <section>
      <h1>Controlled States</h1>
      <ul>
        <Li>{`value (사용자가 선택한 값) : ${value != null ? `'${value}'` : "null"}`}</Li>
        <Li>{`inputValue (TextField에 보여지는 값) : '${inputValue}'`}</Li>
      </ul>

      <br />

      <Autocomplete
        /*
         * 'Value/onChange' props 조합 state ('Value') : 사용자가 선택한 값.
         * ex) Enter 누를 때
         */
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        /*
         * 'inputValue/onInputChange' props 조합 state ('inputValue') : TextField에 보여지는 값
         * ex) TextField에 키보드로 입력하고 있는 값을 보여줌
         */
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </section>
  );
};

export default ControlledStates;
