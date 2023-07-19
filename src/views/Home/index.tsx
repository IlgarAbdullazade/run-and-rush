import classNames from 'classnames'

import Footer from '@/layouts/components/Footer'

import styles from './style.module.scss'
import GmtSection from './components/GmtSection'
import TeamSection from './components/TeamSection'
import HelloSection from './components/HelloSection'
import AboutSection from './components/AboutSection'
import StepsSection from './components/StepsSection'
import SneakersSection from './components/SneakersSection'
import AdvisorsSection from './components/AdvisorsSection'
import PartnersSection from './components/PartnersSection'
import ReferralSection from './components/ReferralSection'
import CommunitySection from './components/CommunitySection'
import UniquenessSection from './components/UniquenessSection'
import AmbassadorsSection from './components/AmbassadorsSection'
import RoadmapSection from './components/RoadmapSection'

const HomeView = () => {
  return (
    <>
      <div className={classNames(styles['home'])}>
        <HelloSection className={classNames(styles['home__hello'])} />
        <AboutSection className={classNames(styles['home__about'])} />
        <SneakersSection className={classNames(styles['home__sneakers'])} />
        <StepsSection className={classNames(styles['home__steps'])} />
        <TeamSection className={classNames(styles['home__team'])} />
        <GmtSection className={classNames(styles['home__gmt'])} />
        <AdvisorsSection className={classNames(styles['home__advisors'])} />
        <UniquenessSection className={classNames(styles['home__uniqueness'])} />
        <AmbassadorsSection
          className={classNames(styles['home__ambassadors'])}
        />
        <PartnersSection className={classNames(styles['home__partners'])} />
        <RoadmapSection className={classNames(styles['home__roadmap'])} />
        <ReferralSection className={classNames(styles['home__referral'])} />
        <CommunitySection className={classNames(styles['home__community'])} />
      </div>
      <Footer />
    </>
  )
}

export default HomeView
