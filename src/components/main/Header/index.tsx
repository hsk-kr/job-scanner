import { GitHub } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface HeaderProps {
  onGithubClick?: VoidFunction;
}

const Header = ({ onGithubClick }: HeaderProps) => {
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
          <GitHub />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
