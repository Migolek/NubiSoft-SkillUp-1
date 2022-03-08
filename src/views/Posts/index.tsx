import { SyntheticEvent, useState } from 'react';
import { Box, Button, CircularProgress, Dialog } from '@mui/material';

import { useGetAllPostsQuery } from '@/services/posts.service';

import AddPost from './AddPost';
import SinglePost from './SinglePost';

import styles from './Posts.module.scss';

export default function Posts() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (postId: number) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? postId : null);
  };

  const { data = [], isFetching } = useGetAllPostsQuery();

  return (
    <section className={styles.section}>
      <div className={styles.addUserWrapper}>
        <Button variant="contained" onClick={() => setOpenDialog(true)}>
          Add new post
        </Button>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <AddPost close={() => setOpenDialog(false)} />
        </Dialog>
      </div>

      {isFetching ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.postsWrapper}>
          {data.map(post => (
            <SinglePost key={post.id} expanded={expanded} post={post} handleExpand={handleChange} />
          ))}
        </div>
      )}
    </section>
  );
}
