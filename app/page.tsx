import Image from 'next/image'
import styles from './pageHome.module.css'
import Img from './assets/sportivnyj-bmw.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to NextJS world</h1>
      <Image
        src={Img}
        alt="sportCar"
        // width={600} // если вот так src={Img} то width height не нужны
        // height={500}
        priority // значит приоритет у картинки
      />
      {/* <Image
        src={'https://avatarzo.ru/wp-content/uploads/derevo-na-zakate.jpg'}
        alt="sportCar"
        width={600} // если вот так src={Img} то width height не нужны
        height={500}
        priority // значит приоритет у картинки
      /> */}
    </div>
  )
}
