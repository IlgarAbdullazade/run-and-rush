import classNames from 'classnames'

import styles from './style.module.scss'
import Footer from '@/layouts/components/Footer'

const PrivacyPolicyView = () => {
  return (
    <>
      <section className={classNames(styles['privacy'])}>
        <div className={classNames(styles['privacy__container'])}>
          <div className={classNames(styles['privacy__wrapper'])}>
            <h1
              className={classNames(styles['privacy__title'], 'text-gradient')}
            >
              Privacy Policy
            </h1>
            <div className={classNames(styles['privacy__body'])}>
              <div className={classNames(styles['privacy__item'])}>
                <strong
                  className={classNames(
                    styles['privacy__caption'],
                    'text-gradient'
                  )}
                >
                  Collection of information
                </strong>
                <p className={classNames(styles['privacy__text'])}>
                  We may collect information that you provide while using the
                  Application, such as your name, email address and payment
                  information. We may also collect information related to your
                  device, including unique device identifiers, device type,
                  operating system, and network information.
                </p>
              </div>
              <div className={classNames(styles['privacy__item'])}>
                <strong
                  className={classNames(
                    styles['privacy__caption'],
                    'text-gradient'
                  )}
                >
                  Use of information
                </strong>
                <p className={classNames(styles['privacy__text'])}>
                  We use the information we collect to provide our services and
                  to improve our application. We may use your information to
                  contact you regarding our services and update our terms and
                  policies. We may use information about your device to provide
                  you with personalized recommendations and advertisements.
                </p>
              </div>
              <div className={classNames(styles['privacy__item'])}>
                <strong
                  className={classNames(
                    styles['privacy__caption'],
                    'text-gradient'
                  )}
                >
                  Information disclosure
                </strong>
                <p className={classNames(styles['privacy__text'])}>
                  We may disclose your information to third parties only if it
                  is necessary to provide our services, if we are required to do
                  so by law, or if you have given your consent to such
                  disclosure.
                </p>
              </div>
              <div className={classNames(styles['privacy__item'])}>
                <strong
                  className={classNames(
                    styles['privacy__caption'],
                    'text-gradient'
                  )}
                >
                  Information disclosure
                </strong>
                <p className={classNames(styles['privacy__text'])}>
                  We may disclose your information to third parties only if it
                  is necessary to provide our services, if we are required to do
                  so by law, or if you have given your consent to such
                  disclosure.
                </p>
              </div>
              <div className={classNames(styles['privacy__item'])}>
                <strong
                  className={classNames(
                    styles['privacy__caption'],
                    'text-gradient'
                  )}
                >
                  Information Security
                </strong>
                <p className={classNames(styles['privacy__text'])}>
                  We take steps to protect your information from unauthorized
                  access, use, modification or disclosure. We restrict access to
                  your information to only those employees, agents and
                  contractors who need access to provide our services.
                </p>
              </div>
              <div className={classNames(styles['privacy__item'])}>
                <strong
                  className={classNames(
                    styles['privacy__caption'],
                    'text-gradient'
                  )}
                >
                  Privacy policy updates
                </strong>
                <p className={classNames(styles['privacy__text'])}>
                  We may update our privacy policy from time to time. We will
                  notify you of any changes by posting a new version of the
                  privacy policy in our application.
                </p>
              </div>
              <div className={classNames(styles['privacy__item'])}>
                <strong
                  className={classNames(
                    styles['privacy__caption'],
                    'text-gradient'
                  )}
                >
                  Your rights
                </strong>
                <p className={classNames(styles['privacy__text'])}>
                  You have the right to request access to your information, make
                  changes to your information, delete your information, or
                  restrict its use. You may also withdraw your consent to the
                  use of your information at any time. If you would like to
                  exercise any of these rights, please contact us via the email
                  address provided in the application.
                </p>
              </div>
              <div className={classNames(styles['privacy__item'])}>
                <strong
                  className={classNames(
                    styles['privacy__caption'],
                    'text-gradient'
                  )}
                >
                  Contact Us
                </strong>
                <p className={classNames(styles['privacy__text'])}>
                  If you have questions or comments regarding our privacy policy
                  or the handling of your information, please contact us via the
                  email provided in our application.
                </p>
              </div>
              <div className={classNames(styles['privacy__item'])}>
                <strong
                  className={classNames(
                    styles['privacy__caption'],
                    'text-gradient'
                  )}
                >
                  Agreement
                </strong>
                <p className={classNames(styles['privacy__text'])}>
                  By using our application, you agree to our privacy policy and
                  the collection, use and disclosure of your information in
                  accordance with this policy.
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

export default PrivacyPolicyView
