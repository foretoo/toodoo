import { useLayoutEffect, useRef, useState } from "preact/hooks"
import { gsap } from "gsap"

export const useAnimation = (trigger: boolean) => {

  const [ animateTrigger, setAnimateTrigger ] = useState(trigger)

  const ref = useRef<HTMLButtonElement>(null!)
  const widthRef = useRef<number>(null!)

  useLayoutEffect(() => {
    widthRef.current = ref.current.getBoundingClientRect().width
    ref.current.style.marginRight = `${-widthRef.current}px`
  }, [])

  if (trigger !== animateTrigger) {
    setAnimateTrigger(trigger)
    gsap.to(ref.current, { marginRight: trigger ? 0 : -widthRef.current })
  }

  return ref
}