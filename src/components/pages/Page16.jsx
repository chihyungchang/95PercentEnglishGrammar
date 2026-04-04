import { forwardRef } from 'react'

const Page16 = forwardRef((_, ref) => {
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
          <span className="inline-block bg-[#1a1a2e] text-[#fdfcf8] px-3 py-1 rounded text-sm tracking-widest mb-1.5">
            八
          </span>
          <h2 className="font-serif text-xl font-black">时 态</h2>
          <p className="text-base text-gray-500 mt-1">Tenses</p>
        </div>

        {/* 1) 一般时态 */}
        <Section num={1} title="一般时态" en="Simple Tense" subtitle="习惯性">
          <Timeline
            past={{ verb: 'did', cn: '做了' }}
            present={{ verb: 'do / does', cn: '通常做' }}
            future={{ verb: 'will do / be going to do', cn: '将要做' }}
          />
        </Section>

        {/* 2) 进行时态 */}
        <Section num={2} title="进行时态" en="Continuous Tense" subtitle="正在发生">
          <Timeline
            past={{ verb: 'was/were doing', cn: '当时正在做' }}
            present={{ verb: 'am/is/are doing', cn: '现在正在做' }}
            future={{ verb: 'will be doing', cn: '将会正在做' }}
          />
          <div className="bg-[#e8f0fe] border border-[#2d5aa0]/30 rounded-lg p-2 mt-2">
            <p className="font-mono text-sm">
              I <span className="bg-[#2d5aa0] text-white px-1 rounded text-xs">will be sleeping</span> by the time you come back.
            </p>
            <p className="text-xs text-gray-500 mt-1">你回来的时候我会在睡觉。</p>
          </div>
        </Section>

       

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">16</div>
      </div>
    </div>
  )
})

function Section({ num, title, en, subtitle, children }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-6 h-6 bg-[#2d5aa0] text-white text-sm font-mono font-semibold rounded-full flex items-center justify-center">
          {num}
        </span>
        <span className="font-serif text-lg font-bold">{title}</span>
        <span className="text-sm text-gray-400">{en}</span>
        {subtitle && (
          <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">({subtitle})</span>
        )}
      </div>
      {children}
    </div>
  )
}

function Timeline({ past, present, future }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3">
      {/* Timeline arrow */}
      <div className="flex items-center justify-center mb-3">
        <span className="text-sm text-gray-500">过去</span>
        <div className="flex-1 mx-2 relative h-6">
          {/* Arrow line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2" />
          {/* Arrow head */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-6 border-transparent border-l-gray-300" />
          {/* Center mark (现在) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#2d5aa0] rounded-full" />
          <span className="absolute left-1/2 -translate-x-1/2 -top-1 text-xs text-[#2d5aa0]">现在</span>
        </div>
        <span className="text-sm text-gray-500">未来</span>
      </div>

      {/* Tense forms */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-gray-50 rounded p-2">
          <p className="font-mono text-sm text-[#c0392b] font-bold">{past.verb}</p>
          <p className="text-xs text-gray-500 mt-1">{past.cn}</p>
        </div>
        <div className="bg-[#2d5aa0]/10 rounded p-2 border border-[#2d5aa0]/30">
          <p className="font-mono text-sm text-[#2d5aa0] font-bold">{present.verb}</p>
          <p className="text-xs text-gray-500 mt-1">{present.cn}</p>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <p className="font-mono text-sm text-[#1e8449] font-bold">{future.verb}</p>
          <p className="text-xs text-gray-500 mt-1">{future.cn}</p>
        </div>
      </div>
    </div>
  )
}

Page16.displayName = 'Page16'
export default Page16
