export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  background?: boolean
}
