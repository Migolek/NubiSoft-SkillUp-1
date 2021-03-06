import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { useGetUsersQuery } from '@/services/users.service';

import UserCard from './UserCard';

import styles from './Users.module.scss';

export default function Users() {
  const {
    data = [],
    isFetching,
    // isLoading, only for first fetch data
    // refetch,
    ...rest
  } = useGetUsersQuery(undefined, {
    // pollingInterval: 1000,
    // skip: true,
    // refetchOnMountOrArgChange: true, // always fetch data on render
    // refetchOnFocus: true,
    // refetchOnReconnect: true,
  });

  //eslint-disable-next-line
  console.log('🚀 ~ file: index.tsx ~ line 12 ~ Users ~ rest', rest);

  return (
    <section className={styles.section}>
      {/* <button type="button" onClick={() => refetch()}>
        Test refetch
      </button> */}
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
