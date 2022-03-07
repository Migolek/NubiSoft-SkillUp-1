import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { User } from '@/models/User';

import styles from './UserCard.module.scss';

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <section className={styles.section}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.company.name}
          </Typography>
          <Typography variant="h6" component="div">
            {user.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="subtitle2" color="text.secondary">
            {user.email}
          </Typography>
          <Typography variant="body2">{user.company.catchPhrase}</Typography>
        </CardContent>
        <CardActions>
          <NavLink className={styles.link} to={`/users/${user.id}/albums`}>
            <Button variant="contained">Albums</Button>
          </NavLink>
          <NavLink className={styles.link} to={`/users/${user.id}/posts`}>
            <Button variant="contained">Posts</Button>
          </NavLink>
        </CardActions>
      </Card>
    </section>
  );
}
