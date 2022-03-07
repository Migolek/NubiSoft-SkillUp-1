import { ChangeEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { useCreatePostMutation } from '@/services/posts.service';

import SelectUser from './SelectUser';

import styles from './AddPost.module.scss';

interface Props {
  close: () => void;
}

interface PostForm {
  userId: number;
  title: string;
  body: string;
}

export default function AddPost({ close }: Props) {
  const [formData, setFormData] = useState<PostForm>({ userId: 0, title: '', body: '' });
  const [createPost] = useCreatePostMutation();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, stateName: string) => {
    setFormData({ ...formData, [stateName]: event.target.value });
  };

  const handleSelectUser = (event: SelectChangeEvent) => {
    setFormData({ ...formData, userId: Number(event.target.value) });
  };

  const handleSavePost = () => {
    createPost(formData);
    close();
  };

  return (
    <section className={styles.section}>
      <p className={styles.title}>Add new post</p>
      <SelectUser userId={formData.userId} handleSelect={handleSelectUser} />
      <TextField
        required
        id="outlined-required"
        label="Title"
        value={formData.title}
        onChange={e => handleChange(e, 'title')}
      />
      <TextField
        id="filled-multiline-static"
        label="Content"
        required
        multiline
        rows={8}
        variant="outlined"
        value={formData.body}
        onChange={e => handleChange(e, 'body')}
      />

      <div className={styles.actionsWrapper}>
        <Button variant="contained" onClick={handleSavePost}>
          Save post
        </Button>
      </div>
    </section>
  );
}
