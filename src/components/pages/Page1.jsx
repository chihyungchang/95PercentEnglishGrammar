import { forwardRef } from 'react'

const Page1 = forwardRef((_, ref) => {
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
        <div className="text-center mb-5 pb-3 border-b-2 border-[#1a1a2e]">
          <span className="inline-block bg-[#1a1a2e] text-[#fdfcf8] px-3 py-1 rounded text-sm tracking-widest mb-1.5">
            一
          </span>
          <h2 className="font-serif text-xl font-black">英文句子结构分类</h2>
          <p className="text-base text-gray-500 mt-1">所有英文句子能够被分成三类</p>
        </div>

        {/* 简单句 */}
        <Section num={1} title="简单句" en="Simple Sentence">
          <div className="bg-gray-50/90 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 text-lg font-medium">
              <span className="text-[#c0392b] font-bold">主语</span>
              <span className="text-gray-400 font-mono text-base">+</span>
              <span className="text-[#1e8449] font-bold">谓语</span>
              <span className="text-gray-400 font-mono text-base">+</span>
              <span className="text-[#2d5aa0] font-bold">宾语</span>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              <span className="bg-gray-100 px-2 py-1 rounded">最基本的句子单位</span>
            </p>
          </div>
        </Section>

        {/* 并列句 */}
        <Section num={2} title="并列句" en="Compound Sentence">
          <div className="bg-gray-50/90 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 flex-wrap text-base">
              <SVOGroup />
              <span className="text-gray-400 font-mono">+</span>
              <span className="bg-[#fef9e7] border border-[#d4a017] rounded px-2 py-1 text-[#d4a017] font-mono text-sm">
                并列词
              </span>
              <span className="text-gray-400 font-mono">+</span>
              <SVOGroup />
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-sm">
              <span className="text-gray-400">常见：</span>
              {['and', 'or', 'but', 'so', 'yet'].map(w => (
                <span key={w} className="bg-white border border-gray-200 px-2 py-1 rounded font-mono text-gray-600">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* 复合句 */}
        <Section num={3} title="复合句" en="Complex Sentence">
          <div className="bg-gray-50/90 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 flex-wrap text-base">
              <SVOGroup color="red" label="主句" />
              <span className="text-gray-400 font-mono">+</span>
              <span className="bg-[#eafaf1] border border-[#1e8449] rounded px-2 py-1 text-[#1e8449] font-mono text-sm">
                引导词
              </span>
              <span className="text-gray-400 font-mono">+</span>
              <SVOGroup color="green" label="从句" />
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-sm">
              <span className="text-gray-400">常见：</span>
              {['which', 'when', 'where', 'that'].map(w => (
                <span key={w} className="bg-white border border-gray-200 px-2 py-1 rounded font-mono text-gray-600">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Reference cards */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <h3 className="font-serif text-base font-bold mb-2 pb-1.5 border-b border-gray-200">主谓宾释义</h3>
            <RefItem label="主语" color="#c0392b" en="Subject" desc="动作发出者" example="我" />
            <RefItem label="谓语" color="#1e8449" en="Verb" desc="动作" example="踢" />
            <RefItem label="宾语" color="#2d5aa0" en="Object" desc="动作承受者" example="球" />
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <h3 className="font-serif text-base font-bold mb-2 pb-1.5 border-b border-gray-200">从句类型</h3>
            <ClauseItem num={1} name="名词性从句" aka="名词作用" />
            <ClauseItem num={2} name="定语从句" aka="形容词作用" />
            <ClauseItem num={3} name="状语从句" aka="副词作用" />
          </div>
        </div>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">1</div>
      </div>
    </div>
  )
})

function Section({ num, title, en, children }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-6 h-6 bg-[#2d5aa0] text-white text-sm font-mono font-semibold rounded-full flex items-center justify-center">
          {num}
        </span>
        <span className="font-serif text-lg font-bold">{title}</span>
        <span className="text-sm text-gray-400">{en}</span>
      </div>
      {children}
    </div>
  )
}

function SVOGroup({ color = 'accent', label }) {
  const styles = {
    accent: { border: 'border-[#2d5aa0]', bg: 'bg-[#e8f0fe]' },
    red: { border: 'border-[#c0392b]', bg: 'bg-[#fdeaea]', labelBg: 'bg-[#fdeaea] text-[#c0392b]' },
    green: { border: 'border-[#1e8449]', bg: 'bg-[#eafaf1]', labelBg: 'bg-[#eafaf1] text-[#1e8449]' }
  }
  const s = styles[color]

  return (
    <div className="text-center">
      <div className={`inline-flex items-center gap-1 border-2 ${s.border} ${s.bg} rounded-full px-3 py-1 text-base`}>
        <span className="text-[#c0392b] font-bold">主</span>
        <span className="text-[#1e8449] font-bold">谓</span>
        <span className="text-[#2d5aa0] font-bold">宾</span>
      </div>
      {label && (
        <div className="text-xs mt-1">
          <span className={`${s.labelBg} px-1.5 py-0.5 rounded`}>{label}</span>
        </div>
      )}
    </div>
  )
}

function RefItem({ label, color, en, desc, example }) {
  return (
    <div className="flex items-center gap-2 py-1 text-sm border-t border-dashed border-gray-100 first:border-0">
      <span className="font-bold min-w-[28px]" style={{ color }}>{label}</span>
      <span className="font-mono text-xs text-gray-400">{en}</span>
      <span className="text-gray-500">→ {desc}</span>
      <span className="font-semibold ml-auto">{example}</span>
    </div>
  )
}

function ClauseItem({ num, name, aka }) {
  return (
    <div className="flex items-center gap-2 py-1 text-sm border-t border-dashed border-gray-100 first:border-0">
      <span className="w-4 h-4 bg-[#1e8449] text-white text-xs font-mono rounded-full flex items-center justify-center">
        {num}
      </span>
      <span className="font-semibold">{name}</span>
      <span className="text-xs text-gray-400 ml-auto">{aka}</span>
    </div>
  )
}

Page1.displayName = 'Page1'
export default Page1
