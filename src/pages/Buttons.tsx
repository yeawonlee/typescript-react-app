// import { NextPage } from 'next';
import Stack from '@mui/material/Stack';
import BasicButtons from '../components/atoms/buttons/BasicButtons';
import LoadingButtons from '../components/atoms/buttons/LoadingButtons';
import IconButtons from '../components/atoms/buttons/IconButtons';
import SplitButtons from '../components/atoms/buttons/SplitButtons';

const Buttons = () => {
  return (
    <Stack spacing={1}>
        <BasicButtons />
        <LoadingButtons />
        <IconButtons />
        <SplitButtons />
    </Stack>
  );
};

export default Buttons;
