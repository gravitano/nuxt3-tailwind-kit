export interface DropdownProps {
  modelValue: boolean
  btnProps: any
  label: string
  right: boolean
  items?: DropdownItemProps[]
}

export interface DropdownItemProps {
  text: string
  to?: string
  href?: string
  icon?: string
  newTab?: boolean
}