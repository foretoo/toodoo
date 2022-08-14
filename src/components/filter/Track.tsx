import { MutableRef, useLayoutEffect, useRef } from "preact/hooks"
import { gsap } from "gsap"

export const Track = (
  { refs }: { refs: MutableRef<HTMLLabelElement[]> },
) => {

  const trackRef = useRef<HTMLDivElement>(null)
  const filter = useRef(false)
  const labels = refs.current

  useLayoutEffect(() => {
    const size = labels[0].offsetWidth
    const track = trackRef.current!
    track.style.width = `${size}px`
    track.style.height = `${size}px`
    track.style.transform = "scale(0)"
  }, [])

  useLayoutEffect(() => {
    const track = trackRef.current!
    const active = labels.find((label) => label.className === "active")

    if (active && !filter.current) {
      filter.current = true
      track.style.left = `${active.offsetLeft}px`
      gsap.to(track, { scale: 1 })
    }
    else if (active) {
      gsap.to(track, { left: active.offsetLeft })
    }
    else if (filter.current) {
      filter.current = false
      gsap.to(track, { scale: 0 })
    }
  })

  return (
    <div ref={trackRef} className="track"></div>
  )
}