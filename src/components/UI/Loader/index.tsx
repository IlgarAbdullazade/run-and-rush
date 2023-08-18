import BeatLoader from 'react-spinners/BeatLoader'
import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../../../tailwind.config'

type LoaderProps = {
  loading: boolean
  color?: string
  size?: number
}

const Loader: React.FC<LoaderProps> = ({ loading, color, size }) => {
  const fullConfig = resolveConfig(tailwindConfig)
  const defaultColor = fullConfig.theme?.colors?.customBlue as string

  return (
    <div className="flex justify-center h-full items-center">
      <BeatLoader
        loading={loading}
        color={color ?? defaultColor}
        size={size ?? 8.0}
        speedMultiplier={0.6}
        aria-label="Loading Spinner"
      />
    </div>
  )
}

export default Loader
