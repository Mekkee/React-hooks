import { useLayoutEffect } from 'react'

function useBodyScrollLock() {
  useLayoutEffect(() => {
    // GET original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    //console.log('originalStyle: ', originalStyle)
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmount
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, []) //Empty array ensures effect is only run on mount and unmount
}

/*
  Usage:

  Lets say the user opens a popup form and you want the rest of the page to stay in its place.
  Then this can be used to prevent any background scrolling while the form is open.
  
  Just:
  import { useBodyScrollLock } from './Hooks/useBodyScrollLock'
  and call
  useBodyScrollLock()
  inside of the popup component
*/

export { useBodyScrollLock }
