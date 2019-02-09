import React, { useEffect, useRef } from 'react'

interface Props {
  onClickOutside: (e: MouseEvent | TouchEvent) => void
  children: React.ReactNode
}

export default function ClickOutside(props: Props) {
  const container = useRef<HTMLDivElement>(null)
  const isTouch = useRef(false)
  const { onClickOutside, ...restProps } = props

  useEffect(() => {
    document.addEventListener('touchend', handler, true)
    document.addEventListener('click', handler, true)
    return () => {
      document.removeEventListener('touchend', handler, true)
      document.removeEventListener('click', handler, true)
    }
  })

  const handler = (e: MouseEvent | TouchEvent) => {
    if (e.type === 'touchend') isTouch.current = true
    if (e.type === 'click' && isTouch.current) return
    const el = container.current
    if (el && e.target && !el.contains(e.target as Node))
      props.onClickOutside(e)
  }

  return (
    <div {...restProps} ref={container}>
      {props.children}
    </div>
  )
}
