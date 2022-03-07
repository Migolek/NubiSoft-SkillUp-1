import { SyntheticEvent } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import { Post } from '@/models/Post';

import styles from './UserPost.module.scss';

interface Props {
  post: Post;
  expanded: number | null;
  handleExpand: (postId: number) => (event: SyntheticEvent, isExpanded: boolean) => void;
}

export default function UserPost({ post, expanded, handleExpand }: Props) {
  return (
    <article className={styles.article}>
      <Accordion expanded={expanded === post.id} onChange={handleExpand(post.id)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <strong>{post.title}</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{post.body}</Typography>
        </AccordionDetails>
      </Accordion>
    </article>
  );
}
