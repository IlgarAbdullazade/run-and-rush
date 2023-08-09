import { HTMLAttributes } from 'react'

import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormikProps, useFormik } from 'formik'
import { boolean, object, Schema, string } from 'yup'

import Button from '@/components/UI/Button'
import { login } from '@/store/slices/authSlice'
import CustomInput from '@/components/UI/CustomInput'
import CustomCheckbox from '@/components/UI/CustomCheckbox'

import styles from './style.module.scss'

interface IAuthFormValues {
  email: string
  verification: string
  referral?: string
  agreeToTerms: boolean
}

type SchemaObject = {
  [key in keyof IAuthFormValues]: Schema<unknown>
}

const validationSchema = object().shape<SchemaObject>({
  email: string().email('Invalid email').required('Email is required'),
  verification: string()
    .min(6, 'Verification code must be 6 characters')
    .required('Verification code is required'),
  referral: string().optional(),
  agreeToTerms: boolean().oneOf(
    [true],
    'You must agree to the terms and conditions'
  ),
})

const Auth: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formik: FormikProps<IAuthFormValues> = useFormik<IAuthFormValues>({
    initialValues: {
      email: '',
      verification: '',
      referral: '',
      agreeToTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values: IAuthFormValues) => {
      formik.resetForm()
      handleLogin(values)
      navigate('/account')
    },
  })

  const handleLogin = (user: IAuthFormValues) => {
    dispatch(login(user))
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
                id="verification"
                name="verification"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.verification}
                hasError={
                  !!(formik.touched.verification && formik.errors.verification)
                }
                errorText={formik.errors.verification}
              />
              <CustomInput
                className={classNames(styles['auth-form__group'])}
                placeholder="Referral ID (Optional)"
                type="text"
                id="referral"
                name="referral"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.referral}
              />
              <CustomCheckbox
                className={classNames(styles['auth-form__checkbox'])}
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.referral}
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
