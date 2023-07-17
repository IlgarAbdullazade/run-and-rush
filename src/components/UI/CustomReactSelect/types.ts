export type CustomOptionType = {
  label: string
  value: string
}

export type GroupedOptionType = {
  label: string
  options: CustomOptionType[]
}

export type CustomSelectOnChangeTypes =
  | CustomOptionType
  | readonly CustomOptionType[]
  | null
