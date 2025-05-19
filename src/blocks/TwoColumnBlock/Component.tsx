'use client'

import React from 'react'
import { Media } from '@/payload-types'
import { RichText } from '@/components/RichText'
import Image from 'next/image'
import Link from 'next/link'

interface TwoColumnBlockProps {
  image: Media
  title: string
  subheading?: string
  description: any // RichText type
  ctaButton?: {
    text: string
    url: string
  }
  reverse?: boolean
}

export const TwoColumnBlock: React.FC<TwoColumnBlockProps> = ({
  image,
  title,
  subheading,
  description,
  ctaButton,
  reverse = false,
}) => {
  return (
    <section className="w-full">
      <div
        className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} min-h-[60vh]`}
      >
        {/* Image Column */}
        <div className="w-full md:w-1/2 h-72 md:h-auto relative">
          {image?.url && (
            <Image
              src={image.url}
              alt={image.alt || title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          )}
        </div>
        {/* Content Column */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center bg-[#f7f4ec] relative px-6 py-12 md:py-0"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* SVG Pattern Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.15 }}
          >
            <path d="M0 0L800 600" stroke="#d6d1c2" strokeWidth="2" />
            <path d="M800 0L0 600" stroke="#d6d1c2" strokeWidth="2" />
            <path d="M400 0L400 600" stroke="#d6d1c2" strokeWidth="1" />
            <path d="M0 300L800 300" stroke="#d6d1c2" strokeWidth="1" />
            {/* Add more subtle lines for a topo effect if desired */}
          </svg>
          <div className="relative z-10 max-w-xl w-full space-y-6 text-center md:text-left">
            {subheading && (
              <div className="text-lg md:text-xl tracking-widest uppercase text-[#bfae7c] font-semibold mb-2">
                {subheading}
              </div>
            )}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#bfae7c] mb-2 leading-tight">
              {title}
            </h2>
            <div className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              <RichText content={description} />
            </div>
            {ctaButton && (
              <Link
                href={ctaButton.url}
                className="inline-block px-10 py-3 border-2 border-[#bfae7c] text-[#bfae7c] rounded-full font-semibold tracking-widest bg-transparent hover:bg-[#bfae7c]/10 transition-colors duration-200"
              >
                {ctaButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
