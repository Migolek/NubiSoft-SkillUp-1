import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { useGetUsersQuery } from '@/services/users.service';

import UserCard from './UserCard';

import styles from './Users.module.scss';

export default function Users() {
  const { data = [], isFetching } = useGetUsersQuery({});

  return (
    <section className={styles.section}>
      {isFetching ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardsWrapper}>
          {data.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </section>
  );
}
