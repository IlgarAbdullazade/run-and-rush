import { useId } from 'react'
import { GoTriangleDown } from 'react-icons/go'
import { HiCheckCircle } from 'react-icons/hi'
import Select, { components } from 'react-select'

import type {
  CustomOptionType,
  GroupedOptionType,
  StateManagerProps,
} from './types'

type CustomReactSelectPropsType = StateManagerProps<
  CustomOptionType,
  false | true,
  GroupedOptionType
>

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <GoTriangleDown />
    </components.DropdownIndicator>
  )
}

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
      instanceId={useId()}
      components={{ Option: CustomOption, DropdownIndicator }}
      {...props}
    />
  )
}

export default CustomReactSelect
