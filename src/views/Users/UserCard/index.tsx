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
          <Button size="small">Show albums</Button>
          <Button size="small">Show posts</Button>
        </CardActions>
      </Card>
    </section>
  );
}
