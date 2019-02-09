# react-click-outsider
inspired by [tj/react-click-outside](https://github.com/tj/react-click-outside) but supported by TypeScript and React Hooks!

## install

```
yarn add 'react-click-outsider'
```

NOTE: Make sure your application is using react >= 16.8 

## API

### `ClickOutside`
Wrapp your component that you want to enhance with click outside detection:

```js
import ClickOutside from 'react-click-outsider'
import React, { setState } from 'react'

function App() {
  const [isOpen, setOpen] = useState(true)

  return (
    <ClickOutside onClickOutside={() => setOpen(false)}>
      <div>Something to close when clicking outside eg. modal, tooltip, etc.</div>
    </ClickOutside>
  )
}
```

### `useClickOutside(ref: React.RefObject<HTMLElement>, function: (e: MouseEvent | TouchEvent) => void`

A custom hook dealing with clicks outside. `ClickOutside` uses this custom hook internally.

```js
import {useClickOutside} from 'react-click-outsider'
import React, { setState, useRef } from 'react'

function App() {
  const container = useRef(null)
  const [isOpen, setOpen] = useState(true)

  useClickOutside(container, () => setOpen(false))

  return (
    <div ref={container}>Something to close when clicking outside eg. modal, tooltip, etc.</div>
  )
}
```
