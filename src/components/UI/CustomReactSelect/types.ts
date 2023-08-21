import type { GroupBase, PropsValue } from 'react-select'
import type { PublicBaseSelectProps } from 'react-select/base'

declare type StateManagedPropKeys =
  | 'inputValue'
  | 'menuIsOpen'
  | 'onChange'
  | 'onInputChange'
  | 'onMenuClose'
  | 'onMenuOpen'
  | 'value'
declare type SelectPropsWithOptionalStateManagedProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
> = Omit<PublicBaseSelectProps<Option, IsMulti, Group>, StateManagedPropKeys> &
  Partial<PublicBaseSelectProps<Option, IsMulti, Group>>
export interface StateManagerAdditionalProps<Option> {
  defaultInputValue?: string
  defaultMenuIsOpen?: boolean
  defaultValue?: PropsValue<Option>
}
export declare type StateManagerProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = SelectPropsWithOptionalStateManagedProps<Option, IsMulti, Group> &
  StateManagerAdditionalProps<Option>

export type CustomOptionType<T extends string = string> = {
  label: string
  value: T
}

export type GroupedOptionType = {
  label: string
  options: CustomOptionType[]
}

export type CustomSelectOnChangeTypes =
  | CustomOptionType
  | readonly CustomOptionType[]
  | null
