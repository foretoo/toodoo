export const Button = (
  { id, over, deleteDoo }: { id: number, over: boolean, deleteDoo: (id: number) => void }
) => {

  return (
    <button
      className="del" 
      onClick={() => deleteDoo(id)}
    >
      ✕
    </button>
  )
}