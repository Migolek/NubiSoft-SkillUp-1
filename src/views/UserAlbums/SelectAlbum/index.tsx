import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useGetUserAlbumsQuery } from '@/services/users.service';

import styles from './SelectAlbum.module.scss';

interface Props {
  selectedAlbum: string;
  handleSelect: (event: SelectChangeEvent) => void;
}

export default function SelectAlbum({ selectedAlbum, handleSelect }: Props) {
  const { userId } = useParams();
  const { data = [], isFetching } = useGetUserAlbumsQuery(Number(userId));

  const renderOptions = () => {
    return data.map(album => (
      <MenuItem key={album.id} value={album.id}>
        {album.title}
      </MenuItem>
    ));
  };

  return (
    <section className={styles.section}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Album</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedAlbum}
          label="Album"
          onChange={handleSelect}>
          {renderOptions()}
        </Select>
      </FormControl>
      {isFetching && <CircularProgress />}
    </section>
  );
}
