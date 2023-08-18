import Moment, { MomentProps } from 'react-moment'

const initialFormat = 'DD/MM/YYYY, HH:mm'
type DateStringProps = MomentProps

const DateString: React.FC<DateStringProps> = ({
  children,
  format = initialFormat,
  ...props
}) => {
  return (
    <Moment format={format} {...props}>
      {children}
    </Moment>
  )
}

export default DateString
