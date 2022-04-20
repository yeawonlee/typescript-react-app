import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

/* type buttonType = {

}; */

/* const ButtonOnClick = (buttonType: string) => {
  console.log(`${buttonType} Button Clicked`);
} */

const Stacks = styled(Stack)`
  margin: 10px 0; // [top-bottom] [left-right]
`;

const ButtonOnClick = () => {
  console.log(`Button Clicked`);
};

const BasicButtons = () => {
  return (
    <section>
      <h1>Basic Buttons</h1>

      {/* Text 버튼 (기본 버튼) */}
      <Stacks spacing={2} direction="row">
        <Button variant="text" onClick={ButtonOnClick}>
          Text Button
        </Button>
        <Button>Primary Text Button</Button>
        <Button disabled>Disabled Text Button</Button>
        <Button href="https://mui.com/material-ui/react-button">Link Text Button</Button>
      </Stacks>

      {/* Contained 버튼 */}
      <Stacks spacing={2} direction="row">
        <Button variant="contained" onClick={ButtonOnClick}>
          Primary Contained Button
        </Button>
        <Button variant="contained" disabled>
          Disabled Contained Button
        </Button>
        <Button variant="contained" href="https://mui.com/material-ui/react-button">
          Link Contained Button
        </Button>
      </Stacks>

      {/* Outlined 버튼 */}
      <Stacks spacing={2} direction="row">
        <Button variant="outlined" onClick={ButtonOnClick}>
          Primary Outlined Button
        </Button>
        <Button variant="outlined" disabled>
          Disabled Outlined Button
        </Button>
        <Button variant="outlined" href="https://mui.com/material-ui/react-button">
          Link Outlined Button
        </Button>
      </Stacks>

      {/* Color 버튼 */}
      <Stacks spacing={2} direction="row">
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>
        <Button variant="contained" color="success">
          Success Contained Button
        </Button>
        <Button variant="contained" color="error">
          Error Outlined Button
        </Button>
      </Stacks>
    </section>
  );
};

export default BasicButtons;
