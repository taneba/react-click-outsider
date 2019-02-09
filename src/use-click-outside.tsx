import React, { useEffect, useRef } from 'react'

function useClickOutside(
  containerRef: React.RefObject<HTMLElement>,
  onClickOutside: (e: MouseEvent | TouchEvent) => void
) {
  const isTouch = useRef(false)

  useEffect(() => {
    document.addEventListener('touchend', handler, true)
    document.addEventListener('click', handler, true)
    return () => {
      document.removeEventListener('touchend', handler, true)
      document.removeEventListener('click', handler, true)
    }
  })

  function handler(e: MouseEvent | TouchEvent) {
    if (e.type === 'touchend') {
      isTouch.current = true
    }
    if (e.type === 'click' && isTouch.current) {
      return
    }
    const el = containerRef.current
    if (el && e.target && !el.contains(e.target as Node)) {
      onClickOutside(e)
    }
  }
}

export default useClickOutside
