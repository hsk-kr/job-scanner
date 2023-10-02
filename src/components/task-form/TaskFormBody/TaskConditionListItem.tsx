import { ComponentProps, Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { ConditionOperator, ConditionTarget, JobCondition } from '@/types/job';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

interface ITaskConditionListItemForm {
  not: boolean;
  caseInsensitive: boolean;
  target: ConditionTarget;
  operator: ConditionOperator;
  frequency: number;
  text: string;
}

interface TaskConditionListItemProps {
  subConditions: JobCondition['subConditions'];
  deleteHidden?: boolean;
  onDelete?: VoidFunction;
  onConditionDelete?: (id: string) => void;
  onConditionAdd?: (condition: JobCondition['subConditions'][0]) => void;
}

const TaskConditionListItem = ({
  subConditions,
  deleteHidden,
  onDelete,
  onConditionDelete,
  onConditionAdd,
}: TaskConditionListItemProps) => {
  const [form, setForm] = useState<ITaskConditionListItemForm>({
    not: false,
    caseInsensitive: false,
    target: 'title',
    frequency: 1,
    operator: '>=',
    text: '',
  });

  const handleConditionDelete = (id: string) => () => {
    onConditionDelete?.(id);
  };

  const handleCheckboxChange =
    (
      key: 'not' | 'caseInsensitive'
    ): ComponentProps<typeof Checkbox>['onChange'] =>
    (e) => {
      setForm((prevForm) => ({
        ...prevForm,
        [key]: e.target.checked,
      }));
    };

  const handleSelectChange =
    (key: 'target' | 'operator'): ComponentProps<typeof Select>['onChange'] =>
    (e) => {
      setForm((prevForm) => ({
        ...prevForm,
        [key]: e.target.value,
      }));
    };

  const handleTextChange =
    (key: 'text' | 'frequency'): ComponentProps<typeof TextField>['onChange'] =>
    (e) => {
      const value =
        key === 'frequency' ? Number(e.target.value) : e.target.value;

      setForm((prevForm) => ({
        ...prevForm,
        [key]: value,
      }));
    };

  const handleConditionAdd = () => {
    const condition: JobCondition['subConditions'][0] = {
      id: uuidv4(),
      not: form.not ?? false,
      caseInsensitive: form.caseInsensitive ?? false,
      target: form.target ?? 'title',
      operator: form.operator ?? '>=',
      frequency:
        form.frequency === undefined || Number.isNaN(form.frequency)
          ? 1
          : form.frequency,
      text: form.text ?? '',
    };

    onConditionAdd?.(condition);
  };

  return (
    <Box
      p={1}
      display="flex"
      flexDirection="column"
      rowGap={1}
      sx={{ backgroundColor: '#eee', borderRadius: 2 }}
      data-testid="taskConditionListItem"
    >
      <Box display="flex" justifyContent="space-between">
        <FormGroup row>
          <FormControlLabel
            data-testid="not"
            control={
              <Checkbox
                onChange={handleCheckboxChange('not')}
                value={form.not}
              />
            }
            label="Not"
          />
          <FormControlLabel
            data-testid="ci"
            control={
              <Checkbox
                onChange={handleCheckboxChange('caseInsensitive')}
                value={form.caseInsensitive}
              />
            }
            label="Case insensitive"
          />
        </FormGroup>
        {!deleteHidden && (
          <Button
            data-testid="jobConditionRemoveBtn"
            color="error"
            size="small"
            variant="contained"
            onClick={onDelete}
          >
            delete
          </Button>
        )}
      </Box>
      <FormGroup row sx={{ columnGap: 1 }}>
        <Select
          data-testid="target"
          sx={{ flex: 1 }}
          size="small"
          onChange={handleSelectChange('target')}
          value={form.target}
        >
          <MenuItem value="title">Job Title</MenuItem>
          <MenuItem value="description">Job Description</MenuItem>
        </Select>
        <Select
          data-testid="operator"
          size="small"
          onChange={handleSelectChange('operator')}
          value={form.operator}
        >
          <MenuItem value="=">=</MenuItem>
          <MenuItem value="!=">!=</MenuItem>
          <MenuItem value="<">{'<'}</MenuItem>
          <MenuItem value=">">{'>'}</MenuItem>
          <MenuItem value=">=">{'>='}</MenuItem>
          <MenuItem value="<=">{'<='}</MenuItem>
        </Select>
        <TextField
          data-testid="frequency"
          sx={{ flex: 1 }}
          label="Frequency"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChange('frequency')}
          value={form.frequency}
        />
      </FormGroup>
      <TextField
        data-testid="text"
        fullWidth
        label="Text"
        onChange={handleTextChange('text')}
        value={form.text}
      />
      <Box display="flex" justifyContent="center">
        <IconButton
          data-testid="conditionAddBtn"
          size="small"
          onClick={handleConditionAdd}
        >
          <Add />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column" rowGap={1}>
        {subConditions.map((condition, conditionIdx) => {
          let conditionText = '';
          conditionText += condition.not ? 'not, ' : '';
          conditionText += condition.caseInsensitive ? 'ci, ' : '';
          conditionText +=
            condition.target === 'title' ? 'Job Title, ' : 'Job Description, ';
          conditionText += `${condition.operator}, `;
          conditionText += `${condition.frequency}, `;
          conditionText += `"${condition.text}"`;

          return (
            <Fragment key={condition.id}>
              <Tooltip title={conditionText}>
                <Chip
                  data-testid="chip"
                  label={conditionText}
                  variant="outlined"
                  onDelete={handleConditionDelete(condition.id)}
                />
              </Tooltip>
              {conditionIdx < subConditions.length - 1 && (
                <Typography
                  variant="body2"
                  color="primary.main"
                  textAlign="center"
                >
                  OR
                </Typography>
              )}
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

export default TaskConditionListItem;
