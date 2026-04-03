import { forwardRef } from 'react'

const CoverPage = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      data-density="hard"
      className="hard w-full h-full bg-gradient-to-br from-slate-800 to-accent text-white"
    >
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <div className="w-16 h-0.5 bg-white/50 mb-10" />
        <h1 className="font-serif text-4xl font-black tracking-wider mb-4">
          英语语法笔记
        </h1>
        <p className="text-base opacity-80 mb-10">
          掌握 95% 的英语语法
        </p>
        <div className="w-16 h-0.5 bg-white/50 mb-10" />
        <p className="text-sm opacity-60">Grammar Notes</p>
      </div>
    </div>
  )
})

CoverPage.displayName = 'CoverPage'
export default CoverPage
