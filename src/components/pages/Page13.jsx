import { forwardRef } from 'react'

const Page13 = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="w-full h-full bg-[#fdfcf8] relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(#e8e4dc 1px, transparent 1px)',
        backgroundSize: '100% 28px',
        backgroundPosition: '0 50px'
      }}
    >
      {/* Red margin line */}
      <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-red-300/60" />

      <div className="p-6 pl-14 h-full overflow-y-auto">
        {/* Title */}
        <div className="text-center mb-4 pb-2 border-b-2 border-[#1a1a2e]">
          <span className="inline-block bg-[#1a1a2e] text-[#fdfcf8] px-3 py-1 rounded text-xs tracking-widest mb-1.5">
            七
          </span>
          <h2 className="font-serif text-xl font-black">三个特殊句式</h2>
          <p className="text-sm text-gray-500 mt-1">其实就是对六种基本句型的操纵</p>
        </div>

        {/* 1) 强调句 */}
        <Section num={1} title="强调句" en="Emphatic Sentence">
          <div className="space-y-3">
            {/* 例子1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="space-y-1.5">
                <p className="text-xs text-gray-500">他打了我：</p>
                <p className="font-mono text-sm">He hit me.</p>
                <p className="text-xs text-gray-500 mt-2">是<span className="text-[#c0392b] font-bold">他</span>打了我：</p>
                <p className="font-mono text-sm">
                  It <span className="text-[#8e44ad]">was</span> <span className="bg-[#c0392b] text-white px-1.5 py-0.5 rounded text-xs">him</span> that hit me.
                </p>
              </div>
            </div>

            {/* 例子2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="space-y-1.5">
                <p className="text-xs text-gray-500">我通过这个网站了解了这个项目：</p>
                <p className="font-mono text-xs">I learned about this project through this site.</p>
                <p className="text-xs text-gray-500 mt-2">就是<span className="text-[#2d5aa0] font-bold">通过这个网站</span>我才了解了这个项目：</p>
                <p className="font-mono text-xs">
                  It <span className="text-[#8e44ad]">was</span> <span className="bg-[#2d5aa0] text-white px-1.5 py-0.5 rounded text-[10px]">through this site</span> that I learned about this project.
                </p>
              </div>
            </div>

            {/* 公式 */}
            <div className="bg-[#fef9e7] border border-[#d4a017] rounded-lg p-3">
              <p className="text-xs font-bold text-[#d4a017] mb-2">强调句公式：</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span>It is</span>
                  <span className="bg-[#c0392b] text-white px-2 py-1 rounded">名</span>
                  <span>that</span>
                  <span className="bg-[#1e8449]/20 text-[#1e8449] px-2 py-1 rounded">动(名)</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span>It is</span>
                  <span className="bg-[#2d5aa0] text-white px-2 py-1 rounded">介宾</span>
                  <span>that</span>
                  <span className="bg-[#1e8449]/20 text-[#1e8449] px-2 py-1 rounded">主谓(宾)</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mt-2 text-center">↑ 被强调的内容</p>
            </div>
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-xs text-gray-400">13</div>
      </div>
    </div>
  )
})

function Section({ num, title, en, children }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-6 h-6 bg-[#2d5aa0] text-white text-xs font-mono font-semibold rounded-full flex items-center justify-center">
          {num}
        </span>
        <span className="font-serif text-base font-bold">{title}</span>
        <span className="text-xs text-gray-400">{en}</span>
      </div>
      {children}
    </div>
  )
}

Page13.displayName = 'Page13'
export default Page13
