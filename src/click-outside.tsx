import React, { useRef } from 'react'
import useClickOutside from './use-click-outside'

interface Props {
  onClickOutside: (e: MouseEvent | TouchEvent) => void
  children: React.ReactNode
}

function ClickOutside(props: Props) {
  const container = useRef<HTMLDivElement>(null)
  const { onClickOutside, ...restProps } = props

  useClickOutside(container, onClickOutside)

  return (
    <div {...restProps} ref={container}>
      {props.children}
    </div>
  )
}

export default ClickOutside
