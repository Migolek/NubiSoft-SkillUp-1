import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { useGetUsersQuery } from '@/services/users.service';

import UserCard from './UserCard';

import styles from './Users.module.scss';

export default function Users() {
  const {
    data = [],
    isFetching,
    ...rest
  } = useGetUsersQuery(
    {}
    //   {
    //     // pollingInterval: 1000,
    //     // skip: false,
    //     // refetchOnMountOrArgChange: true,
    //     // refetchOnFocus: true,
    //     // refetchOnReconnect: true,
    //   }
  );

  console.log('🚀 ~ file: index.tsx ~ line 12 ~ Users ~ rest', rest);

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
