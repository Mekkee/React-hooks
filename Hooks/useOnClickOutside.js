import { useEffect } from 'react'

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = ev => {
        if (!ref.current || ref.current.contains(ev.target)) {
          return
        }
        handler(ev)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('mousedown', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new
    // function on every render that will cause this effect
    // callback/cleanup to run every render. It's not a big deal
    // but to optimize you can wrap handler in useCallback before
    // passing it into this hook.
    [ref, handler]
  )
}

/*
  Usage:

  Can be used to close || swap focus from a visual component 
  by clicking anywhere else on the screen.

  In this usecase i used the state of show/hide (false/true) toggle btn:
  Send the state through props to the visual component.

  import { useRef } from 'react'
  const Component = ({ setToggle }) =>
  const ref = useRef()

  Instead of passing only 'setToggle' (which will return undefined, which is a 'falsy' value), 
  we pass it in as an arrow function and set the value to the boolean value of false.

  useOnClickOutside(ref, () => setToggle(false))
*/

export { useOnClickOutside }
