import classNames from 'classnames'

import AboutSection from './components/AboutSection'
import AdvisorsSection from './components/AdvisorsSection'
import AmbassadorsSection from './components/AmbassadorsSection'
import CommunitySection from './components/CommunitySection'
import GmtSection from './components/GmtSection'
import HelloSection from './components/HelloSection'
import PartnersSection from './components/PartnersSection'
import ReferralSection from './components/ReferralSection'
import RoadmapSection from './components/RoadmapSection'
import SneakersSection from './components/SneakersSection'
import StepsSection from './components/StepsSection'
import TeamSection from './components/TeamSection'
import UniquenessSection from './components/UniquenessSection'
import styles from './style.module.scss'
import Footer from '@/layouts/components/Footer'

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
