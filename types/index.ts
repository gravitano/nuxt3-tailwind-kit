export interface Post extends Record<string, any> {}

export interface NavigationItem extends Record<string, any> {
  title: string
  to: string
  children?: NavigationItem[]
}
