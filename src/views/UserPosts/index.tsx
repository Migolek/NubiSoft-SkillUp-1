import { SyntheticEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

import { useGetUserPostsQuery } from '@/services/users.service';

import UserPost from './UserPost';

import styles from './UserPosts.module.scss';

export default function UserPosts() {
  const { userId } = useParams();
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (postId: number) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? postId : null);
  };

  const { data = [], isFetching } = useGetUserPostsQuery({ userId: Number(userId) });

  return (
    <section className={styles.section}>
      {isFetching ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.postsWrapper}>
          {data.map(post => (
            <UserPost key={post.id} expanded={expanded} post={post} handleExpand={handleChange} />
          ))}
        </div>
      )}
    </section>
  );
}
