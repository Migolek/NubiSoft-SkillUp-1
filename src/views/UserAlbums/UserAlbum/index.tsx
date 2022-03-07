import { CircularProgress } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useGetAlbumPhotosQuery } from '@/services/albums.service';

import styles from './UserAlbum.module.scss';

interface Props {
  albumId: string;
}

export default function UserAlbum({ albumId }: Props) {
  const { data = [], isFetching } = useGetAlbumPhotosQuery({ albumId: Number(albumId) });

  return (
    <section className={styles.section}>
      <ImageList cols={4} rowHeight={164}>
        {isFetching && <CircularProgress />}
        {!isFetching &&
          data.map(image => (
            <ImageListItem key={image.id}>
              <img src={image.thumbnailUrl} srcSet={image.url} alt={image.title} loading="lazy" />
            </ImageListItem>
          ))}
      </ImageList>
    </section>
  );
}
