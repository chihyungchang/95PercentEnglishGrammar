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
          {/* Timeline diagram with duration arcs */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
            {/* SVG for curved duration lines */}
            <svg className="w-full h-20" viewBox="0 0 400 80" preserveAspectRatio="xMidYMid meet">
              {/* Duration arc: 过去完成进行 (far left to yesterday) */}
              <path
                d="M 40 55 Q 80 25 120 55"
                fill="none"
                stroke="#8e44ad"
                strokeWidth="2"
                markerEnd="url(#arrowPurple)"
              />
              {/* Duration arc: 现在完成进行 (yesterday to now) */}
              <path
                d="M 120 55 Q 160 25 200 55"
                fill="none"
                stroke="#2d5aa0"
                strokeWidth="2"
                markerEnd="url(#arrowBlue)"
              />
              {/* Duration arc: 将来完成进行 (now to tomorrow) */}
              <path
                d="M 200 55 Q 240 25 280 55"
                fill="none"
                stroke="#1e8449"
                strokeWidth="2"
                markerEnd="url(#arrowGreen)"
              />

              {/* Arrow markers */}
              <defs>
                <marker id="arrowPurple" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#8e44ad" />
                </marker>
                <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#2d5aa0" />
                </marker>
                <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#1e8449" />
                </marker>
              </defs>

              {/* Main timeline */}
              <line x1="20" y1="55" x2="380" y2="55" stroke="#d1d5db" strokeWidth="2" />
              {/* Left arrow */}
              <polygon points="20,55 28,51 28,59" fill="#d1d5db" />
              {/* Right arrow */}
              <polygon points="380,55 372,51 372,59" fill="#d1d5db" />

              {/* Labels */}
              <text x="50" y="72" fontSize="11" fill="#6b7280">过去</text>
              <text x="200" y="15" fontSize="12" fill="#2d5aa0" fontWeight="bold" textAnchor="middle">现在</text>
              <text x="340" y="72" fontSize="11" fill="#6b7280">未来</text>

              {/* Center mark (现在) */}
              <circle cx="200" cy="55" r="6" fill="#2d5aa0" />

              {/* Yesterday marker */}
              <circle cx="120" cy="55" r="4" fill="#8e44ad" />
              <text x="120" y="72" fontSize="10" fill="#8e44ad" textAnchor="middle">yesterday</text>

              {/* Tomorrow marker */}
              <circle cx="280" cy="55" r="4" fill="#1e8449" />
              <text x="280" y="72" fontSize="10" fill="#1e8449" textAnchor="middle">tomorrow</text>
            </svg>
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
          className="px-2 py-0.5 rounded text-white text-sm font-bold"
          style={{ backgroundColor: color }}
        >
          {title}
        </span>
        <span className="text-sm text-gray-400">{en}</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="font-mono text-base" style={{ color }}>{verb}</span>
      </div>
      <p className="font-mono text-base">
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="px-1 rounded text-white text-sm" style={{ backgroundColor: color }}>{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
      <p className="text-sm text-gray-500 mt-1">{translation}</p>
    </div>
  )
}

Page18.displayName = 'Page18'
export default Page18
