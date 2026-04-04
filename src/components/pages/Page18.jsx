import { forwardRef } from 'react'

const Page18 = forwardRef((_, ref) => {
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
          <p className="text-base text-gray-500 mt-1">完成进行时态</p>
        </div>

        {/* 4) 完成进行时态 */}
        <Section num={4} title="完成进行时态" en="Perfect Continuous" subtitle="持续性；一直在做">
          {/* Timeline diagram */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
            {/* Timeline with duration lines */}
            <div className="relative h-20 mb-2">
              {/* Main timeline */}
              <div className="absolute top-10 left-4 right-4 h-0.5 bg-gray-300" />
              {/* Arrow heads */}
              <div className="absolute left-4 top-10 -translate-y-1/2 border-t-4 border-b-4 border-r-6 border-transparent border-r-gray-300" />
              <div className="absolute right-4 top-10 -translate-y-1/2 border-t-4 border-b-4 border-l-6 border-transparent border-l-gray-300" />

              {/* Labels */}
              <span className="absolute left-8 top-2 text-sm text-gray-500">过去</span>
              <span className="absolute left-1/2 -translate-x-1/2 top-1 text-sm text-[#2d5aa0] font-bold">现在</span>
              <span className="absolute right-8 top-2 text-sm text-gray-500">未来</span>

              {/* Center mark */}
              <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#2d5aa0] rounded-full" />

              {/* Yesterday marker */}
              <div className="absolute left-1/4 top-10 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#c0392b] rounded-full" />
              <span className="absolute left-1/4 -translate-x-1/2 top-14 text-xs text-[#c0392b]">yesterday</span>

              {/* Tomorrow marker */}
              <div className="absolute left-3/4 top-10 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#1e8449] rounded-full" />
              <span className="absolute left-3/4 -translate-x-1/2 top-14 text-xs text-[#1e8449]">tomorrow</span>

              {/* Duration lines showing continuous action */}
              <div className="absolute left-[15%] top-6 right-[52%] h-1 bg-[#8e44ad]/40 rounded" />
              <div className="absolute left-[25%] top-7 right-[52%] h-1 bg-[#2d5aa0]/40 rounded" />
              <div className="absolute left-[48%] top-6 right-[28%] h-1 bg-[#1e8449]/40 rounded" />
            </div>
          </div>

          {/* Three perfect continuous tenses */}
          <div className="space-y-3">
            {/* 过去完成进行 */}
            <TenseCard
              color="#8e44ad"
              title="过去完成进行"
              en="Past Perfect Continuous"
              verb="had been + doing"
              example="I had been working on it before yesterday."
              translation="昨天之前，我一直在处理这个事。"
              highlight="had been working"
            />

            {/* 现在完成进行 */}
            <TenseCard
              color="#2d5aa0"
              title="现在完成进行"
              en="Present Perfect Continuous"
              verb="have/has been + doing"
              example="I have been working on it since yesterday."
              translation="自从昨天以来到现在，我一直在处理这个事。"
              highlight="have been working"
            />

            {/* 将来完成进行 */}
            <TenseCard
              color="#1e8449"
              title="将来完成进行"
              en="Future Perfect Continuous"
              verb="will have been + doing"
              example="I will have been working on it before tomorrow."
              translation="明天之前，我会一直去处理这个事。"
              highlight="will have been working"
            />
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">18</div>
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

function TenseCard({ color, title, en, verb, example, translation, highlight }) {
  const parts = example.split(new RegExp(`(${highlight})`, 'i'))

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="px-2 py-0.5 rounded text-white text-xs font-bold"
          style={{ backgroundColor: color }}
        >
          {title}
        </span>
        <span className="text-xs text-gray-400">{en}</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="font-mono text-sm" style={{ color }}>{verb}</span>
      </div>
      <p className="font-mono text-sm">
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
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

Page18.displayName = 'Page18'
export default Page18
