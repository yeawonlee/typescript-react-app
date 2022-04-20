import Stack from '@mui/material/Stack';
import BasicComboBox from '../components/atoms/comboBoxs/BasicComboBox';
import Playground from '../components/atoms/comboBoxs/Playground';
import CountrySelect from '../components/atoms/comboBoxs/CountrySelect';
import ControlledStates from '../components/atoms/comboBoxs/ControlledStates';
import Grouped from '../components/atoms/comboBoxs/Grouped';

const ComboBoxs = () => {
  return (
    <Stack spacing={1}>
      <BasicComboBox />
      <Playground />
      <CountrySelect />
      <ControlledStates />
      <Grouped />
    </Stack>
  );
};

export default ComboBoxs;
