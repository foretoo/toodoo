import { gsap } from "gsap"
import { useRef } from "preact/hooks"

export const useHoverAnimation = (
  over: boolean
) => {

  const overRef = useRef(false)
  const elementRef = useRef(null)

  if (overRef.current !== over) {
    overRef.current = over
    over && gsap.to(elementRef.current, { opacity: 1 })
    !over && gsap.to(elementRef.current, { opacity: 0 })
  }
  
  return elementRef
}