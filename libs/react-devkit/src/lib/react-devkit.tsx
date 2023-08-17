import styles from './react-devkit.module.css';

/* eslint-disable-next-line */
export interface ReactDevkitProps {}

export function ReactDevkit(props: ReactDevkitProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactDevkit!</h1>
    </div>
  );
}

export default ReactDevkit;
