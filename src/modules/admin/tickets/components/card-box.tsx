import type { ReactNode } from "react"

type CardBoxProps = {
  children: ReactNode
  className?: string
}

export function CardBox ({children, className}: CardBoxProps){
  return (
    <div className={`${className} pb-5`}>{children}</div>
  )
}