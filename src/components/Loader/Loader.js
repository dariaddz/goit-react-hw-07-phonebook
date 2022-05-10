import { TailSpin } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.container}>
      <TailSpin color="#3f51b5" height={50} width={50} />
    </div>
  );
}
