import { forwardRef } from 'react'

const Page17 = forwardRef((_, ref) => {
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
            八（续）
          </span>
          <h2 className="font-serif text-xl font-black">时 态</h2>
          <p className="text-base text-gray-500 mt-1">完成时态</p>
        </div>

        {/* 3) 完成时态 */}
        <Section num={3} title="完成时态" en="Perfect Tense" subtitle="有结果">
          {/* Timeline diagram */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
            {/* Timeline with markers */}
            <div className="relative h-16 mb-4">
              {/* Main timeline */}
              <div className="absolute top-8 left-4 right-4 h-0.5 bg-gray-300" />
              {/* Arrow heads */}
              <div className="absolute left-4 top-8 -translate-y-1/2 border-t-4 border-b-4 border-r-6 border-transparent border-r-gray-300" />
              <div className="absolute right-4 top-8 -translate-y-1/2 border-t-4 border-b-4 border-l-6 border-transparent border-l-gray-300" />

              {/* Labels */}
              <span className="absolute left-8 top-1 text-sm text-gray-500">过去</span>
              <span className="absolute left-1/2 -translate-x-1/2 top-0 text-sm text-[#2d5aa0] font-bold">现在</span>
              <span className="absolute right-8 top-1 text-sm text-gray-500">未来</span>

              {/* Center mark */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#2d5aa0] rounded-full" />

              {/* Yesterday marker */}
              <div className="absolute left-1/4 top-8 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#c0392b] rounded-full" />
              <span className="absolute left-1/4 -translate-x-1/2 top-11 text-xs text-[#c0392b]">yesterday</span>

              {/* Tomorrow marker */}
              <div className="absolute left-3/4 top-8 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#1e8449] rounded-full" />
              <span className="absolute left-3/4 -translate-x-1/2 top-11 text-xs text-[#1e8449]">tomorrow</span>
            </div>
          </div>

          {/* Three perfect tenses */}
          <div className="space-y-3">
            {/* 过去完成 */}
            <TenseCard
              color="#c0392b"
              title="过去完成"
              en="Past Perfect"
              verb="had + done"
              example="I had finished it by yesterday."
              translation="昨天以前我就已经完成了任务。"
            />

            {/* 现在完成 */}
            <TenseCard
              color="#2d5aa0"
              title="现在完成"
              en="Present Perfect"
              verb="have/has + done"
              example="I have finished it since yesterday."
              translation="昨天以来我已经完成了任务。"
            />

            {/* 将来完成 */}
            <TenseCard
              color="#1e8449"
              title="将来完成"
              en="Future Perfect"
              verb="will have + done"
              example="I will have finished it by tomorrow."
              translation="明天以前我就已经能完成了。"
            />
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">17</div>
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

function TenseCard({ color, title, en, verb, example, translation }) {
  // Parse example to highlight the verb phrase
  const parts = example.split(/(had finished|have finished|will have finished)/i)

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="px-2 py-0.5 rounded text-white text-sm font-bold"
          style={{ backgroundColor: color }}
        >
          {title}
        </span>
        <span className="text-xs text-gray-400">{en}</span>
        <span className="ml-auto font-mono text-sm" style={{ color }}>{verb}</span>
      </div>
      <p className="font-mono text-sm">
        {parts.map((part, i) =>
          part.toLowerCase().includes('finished') ? (
            <span key={i} className="px-1 rounded text-white text-xs" style={{ backgroundColor: color }}>{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
      <p className="text-xs text-gray-500 mt-1">{translation}</p>
    </div>
  )
}

Page17.displayName = 'Page17'
export default Page17
