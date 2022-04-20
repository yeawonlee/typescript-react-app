import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

const LoadingButtons = () => {

  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setLoading(true);
  }

    return (
      <section>
        <h1>Loading Buttons</h1>

        {/* 로딩 버튼 */}
        <Box>
          <FormControlLabel
            sx={{
              display: 'block',
            }}
            control={<Switch checked={loading} onChange={() => setLoading(!loading)} name="loading" color="primary" />}
            label="Loading"
          />

          <Stack spacing={2} direction="row" marginY={2}>
            <LoadingButton onClick={handleClick} loading={loading} variant="outlined" disabled>
              disabled
            </LoadingButton>

            <LoadingButton onClick={handleClick} loading={loading} loadingIndicator="Loading..." variant="outlined">
              Fetch data
            </LoadingButton>

            <LoadingButton
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              Send
            </LoadingButton>

            <LoadingButton
              color="secondary"
              onClick={handleClick}
              loading={loading}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              Save
            </LoadingButton>
          </Stack>
        </Box>
      </section>
    );
  };
  
  export default LoadingButtons;