import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { CTABlock } from './CTA_Block'
import { HeroBlock } from './HeroBlock'
import { ImageBlock } from './ImageBlock'
import { GalleryBlock } from './GalleryBlock/GalleryBlock'
import { TextBlock } from './TextBlock'
import { MapEmbedBlock } from './MapEmbedBlock'
import { TwoColumnBlock } from './TwoColumnBlock'

const blockComponents = {
  hero: HeroBlock,
  textBlock: TextBlock,
  imageBlock: ImageBlock,
  gallery: GalleryBlock,
  cta: CTABlock,
  mapEmbed: MapEmbedBlock,
  twoColumnBlock: TwoColumnBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
