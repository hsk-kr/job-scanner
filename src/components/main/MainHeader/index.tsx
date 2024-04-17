import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface MainHeaderProps {
  onViewerClick?: VoidFunction;
  onGithubClick?: VoidFunction;
}

const MainHeader = ({ onGithubClick, onViewerClick }: MainHeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" flexGrow={1}>
          Job Scanner
        </Typography>
        <IconButton data-testid="viewer" onClick={onViewerClick}>
          <PreviewIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton data-testid="github" onClick={onGithubClick}>
          <GitHubIcon sx={{ color: 'white' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
