
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../public/images/profileExamplePic.jpg';
import styles from  '../../styles/Profile.module.css';




export default function Profile(){
    return(
        <>
            <h1 className={styles.title}>This is profile home</h1>
            <Link href="/">Click here to go home</Link>
            <Image src={profilePic} alt="profile pic"/>
        </>
    )
}