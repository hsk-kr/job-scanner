import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface TaskFormHeaderProps {
  taskName?: string;
  onBack?: VoidFunction;
}

const Container = styled.div`
  .MuiToolbar-root {
    padding: 0px;
  }
`;

const TaskFormHeader = ({ taskName, onBack }: TaskFormHeaderProps) => {
  return (
    <Container>
      <AppBar position="static" sx={{ padding: 0 }}>
        <Toolbar>
          <Box flexGrow={1} display="flex" columnGap={1} alignItems="center">
            <IconButton onClick={onBack} data-testid="backBtn">
              <ArrowBackIosNewIcon sx={{ color: '#fff' }} />
            </IconButton>
            <Typography variant="h6" component="div" flexGrow={1}>
              Task Form {taskName && `[${taskName}]`}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default TaskFormHeader;
