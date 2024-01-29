import classNames from 'classnames'

import styles from './style.module.scss'
import Footer from '@/layouts/components/Footer'

const TermsOfUseView = () => {
  return (
    <>
      <section className={classNames(styles['terms'])}>
        <div className={classNames(styles['terms__container'])}>
          <div className={classNames(styles['terms__wrapper'])}>
            <h1 className={classNames(styles['terms__title'], 'text-gradient')}>
              Terms of Use
            </h1>
            <div className={classNames(styles['terms__body'])}>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  1. Acceptance of Terms
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  By accessing or using the RUN&RUSH mobile application
                  (&quot;the App&quot;), you agree to comply with and be bound
                  by these Terms of Use. If you do not agree with these terms,
                  please do not use the App.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  2. User Eligibility
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  You must be at least 18 years old or have reached the legal
                  age of majority in your jurisdiction to use the App. By using
                  the App, you confirm that you meet these eligibility
                  requirements.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  Account Registration
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  To access certain features of the App, you may be required to
                  register for an account. You agree to provide accurate,
                  current, and complete information during the registration
                  process. You are responsible for maintaining the
                  confidentiality of your account credentials and are liable for
                  any activities conducted through your account.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  Move-to-Earn Tokenomics
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  The App operates on a Move-to-Earn tokenomics model. By
                  participating in physical activities and achieving goals,
                  users can earn tokens (&quot;MTE Tokens&quot;). These tokens
                  can be used within the App for various purposes as outlined in
                  the App&apos;s features.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  5. Partner Program
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  The Partner Program allows users to invite friends to the App.
                  Participants in the program earn a percentage of MTE Tokens
                  based on the activities of users they have personally invited.
                  Additional terms and conditions for the Partner Program are
                  available within the App.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  6. Use of Tokens
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  MTE Tokens have no cash value and can only be used within the
                  App. Users can redeem tokens for in-app items, including
                  sneakers, and participate in various promotions and
                  challenges.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  7. Conversion to Real Money
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  Subject to the terms outlined in the App, users may have the
                  option to convert earned MTE Tokens to real money,
                  withdrawable to cryptocurrency wallets or linked bank cards.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  8. User Conduct
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  Users agree not to engage in any activities that may disrupt
                  the operation of the App or violate applicable laws.
                  Prohibited activities include, but are not limited to,
                  cheating, fraud, or any form of abuse of the App&apos;s
                  features.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  9. Privacy Policy
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  The collection and use of personal information are governed by
                  our Privacy Policy. By using the App, you consent to the terms
                  outlined in the Privacy Policy.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  10. Changes to Terms
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  We reserve the right to update or modify these Terms of Use at
                  any time. Users will be notified of significant changes.
                  Continued use of the App after such modifications constitutes
                  acceptance of the revised terms.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  11. Termination
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  We may terminate or suspend your account and access to the App
                  without prior notice for violations of these Terms of Use or
                  any other applicable policies.
                </p>
              </div>
              <div className={classNames(styles['terms__item'])}>
                <strong
                  className={classNames(
                    styles['terms__caption'],
                    'text-gradient'
                  )}
                >
                  12. Contact Information
                </strong>
                <p className={classNames(styles['terms__text'])}>
                  For questions or concerns regarding these Terms of Use, please
                  contact us at support@runrush.io.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default TermsOfUseView
