import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { JobCondition } from '@/types/job';
import { ChangeEvent, useState } from 'react';
import { checkJobConditions } from '@/utils/condition';

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

interface ConditionCheckModalProps {
  visible: boolean;
  jobConditions?: JobCondition[];
  onClose?: VoidFunction;
}

interface IForm {
  title: string;
  description: string;
}

interface Result {
  state: 'pass' | 'fail';
  count: number;
}

const ConditionCheckModal = ({
  visible,
  jobConditions = [],
  onClose,
}: ConditionCheckModalProps) => {
  const [form, setForm] = useState<IForm>({
    title: '',
    description: '',
  });
  const [result, setResult] = useState<Result>();

  const handleFormChange =
    (key: keyof IForm) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm((prevForm) => ({
        ...prevForm,
        [key]: e.target.value,
      }));
    };

  const check = () => {
    const pass = checkJobConditions(
      form.title,
      form.description,
      jobConditions
    );

    setResult((prevResult) => {
      let count = (prevResult?.count ?? 0) + 1;

      if (
        (prevResult?.state === 'pass' && !pass) ||
        (prevResult?.state === 'fail' && pass)
      ) {
        count = 1;
      }

      const state: Result['state'] = pass ? 'pass' : 'fail';

      return {
        state,
        count,
      };
    });
  };

  if (!visible) return null;

  return (
    <Container data-testid="conditionCheckModal">
      <ModalHeader>
        <Typography variant="h6">Condition Checker</Typography>
        <IconButton onClick={onClose} data-testid="conditionCheckModalCloseBtn">
          <CloseIcon />
        </IconButton>
      </ModalHeader>
      <ModalBody>
        <TextField
          data-testid="title"
          fullWidth
          label="Job Title"
          variant="filled"
          onChange={handleFormChange('title')}
          value={form.title}
        />
        <TextField
          data-testid="desc"
          multiline
          fullWidth
          rows={15}
          label="Job Description"
          variant="filled"
          onChange={handleFormChange('description')}
          value={form.description}
        />
      </ModalBody>
      <ModalFooter>
        {result && (
          <>
            <Typography variant="body2">RESULT:</Typography>
            <Typography
              variant="body2"
              color={result.state === 'pass' ? 'primary.main' : 'error.main'}
              sx={{ textTransform: 'uppercase' }}
            >
              {`${result.state} (${result.count})`}
            </Typography>
          </>
        )}
        <Button
          data-testid="checkBtn"
          variant="contained"
          size="small"
          onClick={check}
        >
          Check
        </Button>
      </ModalFooter>
    </Container>
  );
};

export default ConditionCheckModal;
