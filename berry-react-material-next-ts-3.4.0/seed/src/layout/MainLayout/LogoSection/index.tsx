import Link from 'Link';
// material-ui
import { Link as MuiLink } from '@mui/material';

// project imports
import { DASHBOARD_PATH } from 'config';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
  <MuiLink component={Link} href={DASHBOARD_PATH} aria-label="theme-logo">
    <Logo />
  </MuiLink>
);

export default LogoSection;
