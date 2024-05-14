import { getDraftTaskFormData } from '@/utils/storage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectDraftPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getDraftTaskFormData().then((data) => {
      if (data) {
        navigate(
          `/task-form?isEdit=${data.isEdit.toString()}&id=${data.taskId || ''}`
        );
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default RedirectDraftPage;
