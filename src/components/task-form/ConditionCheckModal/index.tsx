import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

const Container = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  right: 8px;
  bottom: 8px;
  background-color: #fff;
  border-radius: 4px;
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`;

const ModalBody = styled.div`
  flex: 1;
`;

const ModalFooter = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: flex-end;
  column-gap: 4px;

  *:last-child {
    margin-left: 8px;
  }
`;

const ConditionCheckModal = () => {
  return (
    <Container>
      <ModalHeader>
        <Typography variant="h6">Condition Checker</Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </ModalHeader>
      <ModalBody>
        <TextField fullWidth label="Job Title" variant="filled" />
        <TextField
          multiline
          fullWidth
          rows={15}
          label="Job Description"
          variant="filled"
        />
      </ModalBody>
      <ModalFooter>
        <Typography variant="body2">RESULT:</Typography>
        <Typography variant="body2" color="primary.main">
          PASS (2)
        </Typography>
        <Button variant="contained" size="small">
          Check
        </Button>
      </ModalFooter>
    </Container>
  );
};

export default ConditionCheckModal;
