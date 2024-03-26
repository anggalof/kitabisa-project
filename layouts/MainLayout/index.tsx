import Type from './type';
import styles from './style.module.css';

export default function Layout(props: Type.Layout) { 
  return (
    <div className={styles.root}>
      {props.children}
    </div>
  )
}
