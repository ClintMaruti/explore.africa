import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

interface Props {
  logoUrl: number | Media
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      alt="Explorer africa"
      width={200}
      height={50}
      loading={loading}
      fetchPriority={priority}
      className={clsx('max-w-[9.375rem] w-full h-[45px]', className)}
      src={
        typeof props.logoUrl === 'object' &&
        props.logoUrl !== null &&
        'url' in props.logoUrl &&
        typeof props.logoUrl.url === 'string'
          ? props.logoUrl.url
          : typeof props.logoUrl === 'string'
            ? props.logoUrl
            : '/placeholder-logo.png'
      }
      unoptimized
    />
  )
}
