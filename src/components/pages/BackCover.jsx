import { forwardRef } from 'react'

const BackCover = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      data-density="hard"
      className="hard w-full h-full bg-gradient-to-br from-slate-800 to-accent text-white"
    >
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <div className="w-16 h-0.5 bg-white/50 mb-6" />
        <p className="text-lg font-serif font-bold mb-2">The End</p>
        <p className="text-sm opacity-70 mb-5">感谢阅读</p>
        <div className="w-16 h-0.5 bg-white/50" />
      </div>
    </div>
  )
})

BackCover.displayName = 'BackCover'
export default BackCover
