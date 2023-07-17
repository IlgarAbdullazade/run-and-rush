import Select, { components } from 'react-select'

import { HiCheckCircle } from 'react-icons/hi'
import { GoTriangleDown } from 'react-icons/go'
import { StateManagerProps } from 'node_modules/react-select/dist/declarations/src/useStateManager'

import { CustomOptionType, GroupedOptionType } from './types'

type CustomReactSelectPropsType = StateManagerProps<
  CustomOptionType,
  false | true,
  GroupedOptionType
>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <GoTriangleDown />
    </components.DropdownIndicator>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomOption = (props: any) => {
  return (
    <components.Option {...props}>
      <div className="react-select__option-wrapper">
        <HiCheckCircle className={props.isSelected ? 'visible' : 'invisible'} />
        {props.children}
      </div>
    </components.Option>
  )
}

const CustomReactSelect: React.FC<CustomReactSelectPropsType> = ({
  ...props
}) => {
  return (
    <Select
      unstyled
      className="react-select"
      classNamePrefix="react-select"
      components={{ Option: CustomOption, DropdownIndicator }}
      {...props}
    />
  )
}

export default CustomReactSelect
