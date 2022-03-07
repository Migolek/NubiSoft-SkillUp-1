import { useSearchParams } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material';
import { stringify } from 'query-string';

import SelectAlbum from './SelectAlbum';
import UserAlbum from './UserAlbum';

import styles from './UserAlbums.module.scss';

export default function UserAlbums() {
  const [searchParams, setSearchParams] = useSearchParams();
  const albumId = searchParams.get('albumId') || '';

  const handleSelectAlbum = (event: SelectChangeEvent) => {
    const mergedParams = {
      ...searchParams,
      albumId: event.target.value,
    };

    setSearchParams(stringify(mergedParams));
  };

  return (
    <section className={styles.section}>
      <div className={styles.selectWrapper}>
        <SelectAlbum selectedAlbum={albumId} handleSelect={handleSelectAlbum} />
      </div>

      {albumId && <UserAlbum albumId={albumId} />}
    </section>
  );
}
