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
          <div className="space-y-3 mt-3">
            {/* 一般过去 */}
            <TenseCard
              color="#c0392b"
              title="一般过去"
              en="Simple Past"
              verb="did"
              example="I went to school yesterday."
              translation="我昨天去了学校。"
              highlightPattern="went"
            />

            {/* 一般现在 */}
            <TenseCard
              color="#2d5aa0"
              title="一般现在"
              en="Simple Present"
              verb="do / does"
              example="I eat breakfast every day."
              translation="我每天吃早餐。"
              highlightPattern="eat"
            />

            {/* 一般将来 */}
            <TenseCard
              color="#1e8449"
              title="一般将来"
              en="Simple Future"
              verb="will do"
              example="I will go to Beijing tomorrow."
              translation="我明天会去北京。"
              highlightPattern="will go"
            />
          </div>
        </Section>

        {/* 2) 进行时态 */}
        <Section num={2} title="进行时态" en="Continuous Tense" subtitle="正在发生">
          {/* Three continuous tenses */}
          <div className="space-y-3">
            {/* 过去进行 */}
            <TenseCard
              color="#c0392b"
              title="过去进行"
              en="Past Continuous"
              verb="was/were + doing"
              example="I was reading a book when you called."
              translation="你打电话时我正在看书。"
              highlightPattern="was reading"
            />

            {/* 现在进行 */}
            <TenseCard
              color="#2d5aa0"
              title="现在进行"
              en="Present Continuous"
              verb="am/is/are + doing"
              example="She is working on the project now."
              translation="她现在正在做这个项目。"
              highlightPattern="is working"
            />

            {/* 将来进行 */}
            <TenseCard
              color="#1e8449"
              title="将来进行"
              en="Future Continuous"
              verb="will be + doing"
              example="I will be sleeping by the time you come back."
              translation="你回来的时候我会在睡觉。"
              highlightPattern="will be sleeping"
            />
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
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      {/* Timeline diagram */}
      <div className="relative h-12 mb-4">
        {/* Main timeline */}
        <div className="absolute top-8 left-4 right-4 h-0.5 bg-gray-300" />
        {/* Arrow heads */}
        <div className="absolute left-4 top-8 -translate-y-1/2 border-t-4 border-b-4 border-r-6 border-transparent border-r-gray-300" />
        <div className="absolute right-4 top-8 -translate-y-1/2 border-t-4 border-b-4 border-l-6 border-transparent border-l-gray-300" />

        {/* Labels */}
        <span className="absolute left-8 top-0 text-sm text-gray-500">过去</span>
        <span className="absolute left-1/2 -translate-x-1/2 top-0 text-sm text-[#2d5aa0] font-bold">现在</span>
        <span className="absolute right-8 top-0 text-sm text-gray-500">未来</span>

        {/* Center mark */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#2d5aa0] rounded-full" />
      </div>

      {/* Tense forms */}
      <div className="grid grid-cols-3 gap-3 text-center">
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

function TenseCard({ color, title, en, verb, example, translation, highlightPattern }) {
  // Parse example to highlight the verb phrase
  const regex = new RegExp(`(${highlightPattern})`, 'i')
  const parts = example.split(regex)

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
        <span className="ml-auto font-mono text-base" style={{ color }}>{verb}</span>
      </div>
      <p className="font-mono text-base">
        {parts.map((part, i) =>
          regex.test(part) ? (
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

Page16.displayName = 'Page16'
export default Page16
