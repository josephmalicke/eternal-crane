import { cn } from '@/theme/util/cn'
import Image from 'next/image'

export function ResponsiveImage({
  src,
  alt,
  priority = false,
  className,
  width,
  height,
}: {
  src: string
  alt: string
  priority?: boolean
  className?: string
  width: number
  height: number
}) {
  return (
    <div className={cn('relative', className)}>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        priority={priority}
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  )
}
