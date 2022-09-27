import { useHoverAnimation } from "./useHoverAnimation"

export const Button = (
  { id, over, deleteDoo }: { id: number, over: boolean, deleteDoo: (id: number) => void }
) => {

  const buttonRef = useHoverAnimation<HTMLButtonElement>(over)

  return (
    <button
      ref={buttonRef}
      className="del" 
      onClick={() => deleteDoo(id)}
    >
      ✕
    </button>
  )
}