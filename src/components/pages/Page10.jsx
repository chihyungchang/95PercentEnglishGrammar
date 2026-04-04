import { forwardRef } from 'react'

const Page10 = forwardRef((_, ref) => {
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
          <p className="text-base text-gray-500 mt-1">副词与状语例句</p>
        </div>

        {/* 状语从句位置说明 */}
        <div className="bg-[#e8f0fe] border border-[#2d5aa0]/30 rounded-lg p-2 mb-3">
          <p className="text-sm text-center">
            <span className="font-bold text-[#2d5aa0]">状语从句</span>是简单句
            <span className="bg-white px-1 py-0.5 rounded mx-1 text-[#c0392b] font-mono text-xs">主</span>
            <span className="bg-white px-1 py-0.5 rounded mx-1 text-[#1e8449] font-mono text-xs">谓</span>
            <span className="bg-white px-1 py-0.5 rounded mx-1 text-[#2d5aa0] font-mono text-xs">宾</span>
            之外的
          </p>
        </div>

        {/* 1 副词例子 */}
        <Section num={1} title="副词例子" en="Adverb Examples">
          <div className="grid grid-cols-2 gap-1.5 text-sm">
            <div className="bg-white border border-gray-200 rounded p-2">
              <p className="text-xs text-gray-400 mb-1">i. 修饰动词（后）</p>
              <p className="font-mono">Yusuf smiles <span className="text-[#8e44ad] underline">happily</span>.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded p-2">
              <p className="text-xs text-gray-400 mb-1">ii. 修饰动词（前）</p>
              <p className="font-mono">Yusuf <span className="text-[#8e44ad] underline">quickly</span> understood.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded p-2">
              <p className="text-xs text-gray-400 mb-1">iii. 修饰形容词（很）</p>
              <p className="font-mono">She is <span className="text-[#8e44ad] underline">strikingly</span> beautiful.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded p-2">
              <p className="text-xs text-gray-400 mb-1">iv. 修饰形容词（蛮）</p>
              <p className="font-mono">He is <span className="text-[#8e44ad] underline">pretty</span> tall.</p>
            </div>
          </div>
        </Section>

        {/* 2 状语例子 */}
        <Section num={2} title="状语例子" en="Adverbial Examples">
          <div className="space-y-2">
            {/* i. 时间状语 */}
            <SubSection num="i" title="时间状语" en="Time" color="#e74c3c">
              <p className="font-mono text-sm">He came <span className="text-[#e74c3c] underline">yesterday</span>.</p>
              <p className="font-mono text-sm"><span className="text-[#e74c3c] underline">Yesterday</span> he came.</p>
              <p className="text-xs text-gray-400 mt-1">位置灵活</p>
            </SubSection>

            {/* ii. 地点状语 */}
            <SubSection num="ii" title="地点状语" en="Place" color="#3498db">
              <p className="font-mono text-sm">He celebrated his birthday <span className="text-[#3498db] underline">at school</span>.</p>
              <p className="font-mono text-sm"><span className="text-[#3498db] underline">At school</span> he celebrated his birthday.</p>
              <p className="text-xs text-gray-400 mt-1">位置灵活</p>
            </SubSection>

            {/* iii. 原因状语从句 */}
            <SubSection num="iii" title="原因状语从句" en="Causal" color="#e67e22">
              <p className="text-xs text-gray-500 mb-1">He likes spring...</p>
              <div className="space-y-0.5 font-mono text-sm">
                <p><span className="bg-[#e67e22]/20 text-[#e67e22] px-1 rounded">for</span> its beauty. <span className="text-gray-400">(介词)</span></p>
                <p><span className="bg-[#e67e22]/20 text-[#e67e22] px-1 rounded">for</span> it is beautiful. <span className="text-gray-400">(从句)</span></p>
                <p><span className="bg-[#e67e22]/20 text-[#e67e22] px-1 rounded">because</span> it is beautiful. <span className="text-[#e67e22]">★</span></p>
                <p><span className="bg-[#e67e22]/20 text-[#e67e22] px-1 rounded">as</span> it is beautiful.</p>
                <p><span className="bg-[#e67e22]/20 text-[#e67e22] px-1 rounded">since</span> it is beautiful.</p>
              </div>
              <p className="text-xs text-gray-400 mt-1">除了 since/for 可放句首外，其它都靠后</p>
            </SubSection>
          </div>
        </Section>
        

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">10</div>
      </div>
    </div>
  )
})

function Section({ num, title, en, children }) {
  return (
    <div className="mb-3">
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

function SubSection({ num, title, en, color, children }) {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-2 mb-1">
        <span
          className="w-6 h-6 text-white text-xs font-mono font-bold rounded-full flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          {num}
        </span>
        <span className="font-serif text-base font-bold">{title}</span>
        <span className="text-xs text-gray-400">{en}</span>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-2">
        {children}
      </div>
    </div>
  )
}

 

Page10.displayName = 'Page10'
export default Page10
