import classNames from 'classnames'
import { FormikProps, useFormik } from 'formik'
import { HTMLAttributes, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCountdown } from 'usehooks-ts'
import { boolean, object, Schema, string } from 'yup'

import Button from '@/components/UI/Button'
import CustomCheckbox from '@/components/UI/CustomCheckbox'
import CustomInput from '@/components/UI/CustomInput'

import { loginOrSignUp, sendCode } from '@/store/auth/authActions'
import { IAuthFormValues } from '@/store/auth/authTypes'
import { useAppDispatch } from '@/store/hooks'

import styles from './style.module.scss'

type SchemaObject = {
  [key in keyof IAuthFormValues]: Schema<unknown>
}

const validationSchema = object().shape<SchemaObject>({
  email: string().email('Invalid email').required('Email is required'),
  code: string()
    .min(6, 'Verification code must be 6 characters')
    .required('Verification code is required'),
  referal_code: string().optional(),
  agreeToTerms: boolean().oneOf(
    [true],
    'You must agree to the terms and conditions'
  ),
})

const Auth: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const [hasSent, setHasSent] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 30,
  })

  useEffect(() => {
    if (count === 0) {
      resetCountdown()
      setHasSent(false)
    }
  }, [count, resetCountdown])

  const formik: FormikProps<IAuthFormValues> = useFormik<IAuthFormValues>({
    initialValues: {
      email: '',
      code: '',
      referal_code: '',
      agreeToTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values: IAuthFormValues) => {
      formik.resetForm()
      dispatch(loginOrSignUp(values))
      navigate('/account')
    },
  })

  const sendCodeDispatch = () => {
    const email = formik.values.email
    dispatch(sendCode(email))
    setHasSent(true)
    startCountdown()
  }

  return (
    <div className={classNames(styles['auth'], className)}>
      <div className={classNames(styles['auth__wrapper'])}>
        <div className={classNames(styles['auth__body'])}>
          <h4 className={classNames(styles['auth__title'])}>
            Welcome to best <br /> play-to-earn project!
          </h4>
          <form
            className={classNames(styles['auth__form'], styles['auth-form'])}
            onSubmit={formik.handleSubmit}
          >
            <div className={classNames(styles['auth-form__wrapper'])}>
              <CustomInput
                className={classNames(styles['auth-form__group'])}
                placeholder="Your email address"
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                hasError={!!(formik.touched.email && formik.errors.email)}
                errorText={formik.errors.email}
              />
              <CustomInput
                className={classNames(styles['auth-form__group'])}
                placeholder="Verification code"
                type="text"
                id="code"
                name="code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.code}
                hasError={!!(formik.touched.code && formik.errors.code)}
                errorText={formik.errors.code}
                button={
                  <button
                    type="button"
                    disabled={
                      !formik.values.email || !!formik.errors.email || hasSent
                    }
                    onClick={sendCodeDispatch}
                  >
                    {hasSent
                      ? `00:${count.toString().padStart(2, '0')}`
                      : 'Send Code'}
                  </button>
                }
              />
              <CustomInput
                className={classNames(styles['auth-form__group'])}
                placeholder="Referral ID (Optional)"
                type="text"
                id="referal_code"
                name="referal_code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.referal_code}
              />
              <CustomCheckbox
                className={classNames(styles['auth-form__checkbox'])}
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.agreeToTerms}
                hasError={
                  !!(formik.touched.agreeToTerms && formik.errors.agreeToTerms)
                }
                errorText={formik.errors.agreeToTerms}
              >
                I agree to RUN&RUSH Terms of Use & Privacy Policy
              </CustomCheckbox>
            </div>
            <Button
              className={classNames(styles['auth-form__submit'])}
              type="submit"
              disabled={formik.isSubmitting}
            >
              Login / Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
