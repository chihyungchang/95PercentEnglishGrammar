import { forwardRef } from 'react'

const Page20 = forwardRef((_, ref) => {
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
            十
          </span>
          <h2 className="font-serif text-xl font-black">非谓语</h2>
          <p className="text-sm text-gray-500 mt-1">Non-finite Verbs (Participles)</p>
        </div>

        {/* 分词概述 */}
        <div className="bg-[#e8f0fe] border border-[#2d5aa0]/30 rounded-lg p-3 mb-4">
          <p className="text-sm font-bold text-center mb-2">分词</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded p-2 text-center">
              <span className="bg-[#1e8449] text-white px-2 py-0.5 rounded text-xs font-mono">doing</span>
              <p className="text-xs mt-1 font-bold">现在分词</p>
              <p className="text-[10px] text-gray-500">和主句主语为<span className="text-[#1e8449] font-bold">主动</span>关系</p>
            </div>
            <div className="bg-white rounded p-2 text-center">
              <span className="bg-[#8e44ad] text-white px-2 py-0.5 rounded text-xs font-mono">done</span>
              <p className="text-xs mt-1 font-bold">过去分词</p>
              <p className="text-[10px] text-gray-500">和主句主语为<span className="text-[#8e44ad] font-bold">被动</span>关系</p>
            </div>
          </div>
        </div>

        {/* 例1：现在分词 */}
        <Section title="现在分词" tag="doing" color="#1e8449">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-xs mb-2">
              <span className="underline">The boy</span>{' '}
              <span className="underline decoration-wavy">was</span>{' '}
              <span className="underline decoration-double">lost</span>,{' '}
              <span className="bg-[#1e8449] text-white px-1 rounded">failing</span>{' '}
              to find the way back home.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-2">
              <span className="bg-gray-100 px-1.5 py-0.5 rounded">主句：The boy was lost</span>
              <span>+</span>
              <span className="bg-[#1e8449]/20 text-[#1e8449] px-1.5 py-0.5 rounded">非谓语</span>
            </div>
            <div className="bg-[#1e8449]/10 rounded p-2">
              <p className="text-xs">
                <span className="font-bold text-[#1e8449]">主动关系：</span>
                男孩没能找到回家的路
              </p>
              <p className="text-[10px] text-gray-500 mt-1">（男孩主动去找，但没找到）</p>
            </div>
          </div>
        </Section>

        {/* 例2：过去分词 */}
        <Section title="过去分词" tag="done" color="#8e44ad">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-xs mb-2">
              <span className="underline">The boy</span>{' '}
              <span className="underline decoration-wavy">was</span>{' '}
              <span className="underline decoration-double">lost</span>,{' '}
              <span className="bg-[#8e44ad] text-white px-1 rounded">failed</span>{' '}
              by his poor memory.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-2">
              <span className="bg-gray-100 px-1.5 py-0.5 rounded">主句：The boy was lost</span>
              <span>+</span>
              <span className="bg-[#8e44ad]/20 text-[#8e44ad] px-1.5 py-0.5 rounded">非谓语</span>
            </div>
            <div className="bg-[#8e44ad]/10 rounded p-2">
              <p className="text-xs">
                <span className="font-bold text-[#8e44ad]">被动关系：</span>
                男孩被他的差记忆给害得迷路
              </p>
              <p className="text-[10px] text-gray-500 mt-1">（男孩被记忆力所害，被动承受）</p>
            </div>
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-xs text-gray-400">20</div>
      </div>
    </div>
  )
})

function Section({ title, tag, color, children }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-gray-500">例：</span>
        <span className="font-serif text-sm font-bold">{title}</span>
        <span
          className="px-1.5 py-0.5 rounded text-white text-[10px] font-mono"
          style={{ backgroundColor: color }}
        >
          {tag}
        </span>
      </div>
      {children}
    </div>
  )
}

Page20.displayName = 'Page20'
export default Page20
