import { forwardRef } from 'react'

const Page11 = forwardRef((_, ref) => {
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
            六（续）
          </span>
          <h2 className="font-serif text-xl font-black">状语从句详解</h2>
          <p className="text-base text-gray-500 mt-1">条件、目的、结果、让步</p>
        </div>

        {/* iv. 条件状语从句 */}
        <Section num="iv" title="条件状语从句" en="Conditional" color="#27ae60">
          <div className="space-y-1.5">
            <ClauseExample
              keyword="If"
              keywordCn="如果"
              sentence="you win, there will be a reward."
              color="#27ae60"
            />
            <ClauseExample
              keyword="As long as"
              keywordCn="只要"
              sentence="you win, there will be a reward."
              color="#27ae60"
            />
          </div>
        </Section>

        {/* v. 目的状语从句 */}
        <Section num="v" title="目的状语从句" en="Purpose" color="#9b59b6">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="text-sm text-gray-500 mb-2">I don't spend extra...</p>
            <div className="space-y-1.5 font-mono text-sm">
              <p>
                <span className="bg-[#9b59b6] text-white px-1.5 py-0.5 rounded text-xs">for</span>
                <span className="ml-2">my well-being.</span>
                <span className="text-gray-400 ml-2">(介词短语)</span>
              </p>
              <p>
                <span className="bg-[#9b59b6] text-white px-1.5 py-0.5 rounded text-xs">to</span>
                <span className="ml-2">save money.</span>
                <span className="text-gray-400 ml-2">(不定式)</span>
              </p>
              <p>
                <span className="bg-[#9b59b6] text-white px-1.5 py-0.5 rounded text-xs">in order to</span>
                <span className="ml-2">save money.</span>
                <span className="text-gray-400 ml-2">(不定式)</span>
              </p>
              <p>
                <span className="bg-[#9b59b6] text-white px-1.5 py-0.5 rounded text-xs">so that</span>
                <span className="ml-2">I can save money.</span>
                <span className="text-[#9b59b6] ml-2">★ 从句</span>
              </p>
            </div>
          </div>
        </Section>

        {/* vi. 结果状语从句 */}
        <Section num="vi" title="结果状语从句" en="Result" color="#1abc9c">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-base text-center">
              He tried <span className="bg-[#1abc9c] text-white px-1.5 py-0.5 rounded text-sm">so</span> hard{' '}
              <span className="bg-[#1abc9c] text-white px-1.5 py-0.5 rounded text-sm">that</span> he finally succeeded.
            </p>
            <p className="text-sm text-gray-500 mt-2 text-center">
              他努力到<span className="text-[#1abc9c] font-bold">以至于</span>最终成功了
            </p>
            <div className="mt-2 pt-2 border-t border-dashed border-gray-200">
              <p className="text-xs text-gray-400 text-center">
                固定搭配：so + adj./adv. + that... 或 such + n. + that...
              </p>
            </div>
          </div>
        </Section>

        {/* vii. 让步状语从句 */}
        <Section num="vii" title="让步状语从句" en="Concessive" color="#f39c12">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-base leading-relaxed">
              <span className="bg-[#f39c12] text-white px-1.5 py-0.5 rounded text-sm">Although</span>{' '}
              you have a point there, I don't agree with your proposal.
            </p>
            <p className="text-sm text-gray-500 mt-2 text-center">
              <span className="text-[#f39c12] font-bold">虽然</span>你说的有道理，但我不同意你的提议
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-[#fef9e7] text-[#f39c12] px-2 py-0.5 rounded">although 虽然</span>
              <span className="bg-[#fef9e7] text-[#f39c12] px-2 py-0.5 rounded">though 尽管</span>
              <span className="bg-[#fef9e7] text-[#f39c12] px-2 py-0.5 rounded">even though 即使</span>
            </div>
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">11</div>
      </div>
    </div>
  )
})

function Section({ num, title, en, color, children }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="w-6 h-6 text-white text-xs font-mono font-bold rounded-full flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          {num}
        </span>
        <span className="font-serif text-base font-bold">{title}</span>
        <span className="text-xs text-gray-400">{en}</span>
      </div>
      {children}
    </div>
  )
}

function ClauseExample({ keyword, keywordCn, sentence, color }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded px-3 py-2">
      <span
        className="text-white text-xs px-2 py-0.5 rounded font-medium shrink-0"
        style={{ backgroundColor: color }}
      >
        {keyword}
      </span>
      <span className="font-mono text-sm flex-1">{sentence}</span>
      <span className="text-gray-400 text-xs shrink-0">({keywordCn})</span>
    </div>
  )
}

Page11.displayName = 'Page11'
export default Page11
