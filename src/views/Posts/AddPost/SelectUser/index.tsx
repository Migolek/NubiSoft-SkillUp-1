import { CircularProgress } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useGetUsersQuery } from '@/services/users.service';

import styles from './SelectUser.module.scss';

interface Props {
  userId: number;
  handleSelect: (event: SelectChangeEvent) => void;
}

export default function SelectUser({ userId, handleSelect }: Props) {
  const { data = [], isFetching } = useGetUsersQuery();

  const renderOptions = () => {
    return data.map(user => (
      <MenuItem key={user.id} value={user.id}>
        {user.name}
      </MenuItem>
    ));
  };

  return (
    <section className={styles.section}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={String(userId)}
          label="User"
          onChange={handleSelect}>
          {renderOptions()}
        </Select>
      </FormControl>
      {isFetching && <CircularProgress />}
    </section>
  );
}
