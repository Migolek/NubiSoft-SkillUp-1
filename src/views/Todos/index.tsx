import { useCallback, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useTypedDispatch, useTypedSelector } from '@/store';
import { fetchTodos } from '@/store/todos.slice';

import styles from './Todos.module.scss';

export default function Todos() {
  const dispatch = useTypedDispatch();
  const todos = useTypedSelector(state => state.todos.data);
  const isFetching = useTypedSelector(state => state.todos.isFetching);

  const fetchTodosData = useCallback(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    fetchTodosData();
  }, [fetchTodosData]);

  return (
    <section className={styles.section}>
      {isFetching && <CircularProgress />}

      <div className={styles.todoList}>
        <List sx={{ width: '100%' }}>
          {!isFetching &&
            todos.map(todo => {
              const labelId = `checkbox-list-label-${todo.userId}`;

              return (
                <ListItem key={todo.id} disablePadding>
                  {/* <ListItemButton role={undefined} onClick={handleToggle(value)} dense> */}
                  <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={todo.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      </div>
    </section>
  );
}
