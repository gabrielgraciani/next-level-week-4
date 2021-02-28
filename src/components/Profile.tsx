import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/42574064?v=4"
        alt="Gabriel Graciani"
      />
      <div>
        <strong>Gabriel Graciani</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}


export default Profile
