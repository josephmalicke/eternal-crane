import React, { HTMLAttributes } from 'react'
import { cn } from '@/theme/utils/cn'

type H1Props = HTMLAttributes<HTMLHeadingElement>

export const H1: React.FC<H1Props> = ({ className, children, ...props }) => {
  const classes = cn(
    'font-decorative text-3xl md:text-5xl lg:text-7xl mt-4 font-extrabold',
    className,
  )

  return (
    <h1 className={classes} {...props}>
      {children}
    </h1>
  )
}
