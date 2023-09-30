import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

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

interface LogViewerProps {
  visible: boolean;
  message?: string;
  onClose?: VoidFunction;
}

const LogViewer = ({ message, visible, onClose }: LogViewerProps) => {
  if (!visible) return null;

  return (
    <Container data-testid="conditionCheckModal">
      <ModalHeader>
        <Typography variant="h6">Log Viewer</Typography>
        <IconButton onClick={onClose} data-testid="conditionCheckModalCloseBtn">
          <CloseIcon />
        </IconButton>
      </ModalHeader>
      <ModalBody>
        <TextField
          data-testid="desc"
          multiline
          fullWidth
          disabled
          rows={20}
          label="Log"
          variant="filled"
          value={message}
        />
      </ModalBody>
    </Container>
  );
};

export default LogViewer;
