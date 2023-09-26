import GitHubIcon from '@mui/icons-material/Github';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface MainHeaderProps {
  onGithubClick?: VoidFunction;
}

const MainHeader = ({ onGithubClick }: MainHeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" flexGrow={1}>
          LinkedIn Job Scanner
        </Typography>
        <div
          role="button"
          style={{ cursor: 'pointer' }}
          data-testid="github"
          onClick={onGithubClick}
        >
          <GitHubIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
