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
          <span className="inline-block bg-[#1a1a2e] text-[#fdfcf8] px-3 py-1 rounded text-xs tracking-widest mb-1.5">
            六（续）
          </span>
          <h2 className="font-serif text-xl font-black">状语从句详解</h2>
          <p className="text-sm text-gray-500 mt-1">副词与状语位置</p>
        </div>

        {/* 状语从句位置说明 */}
        <div className="bg-[#e8f0fe] border border-[#2d5aa0]/30 rounded-lg p-3 mb-4">
          <p className="text-sm text-center">
            <span className="font-bold text-[#2d5aa0]">状语从句</span>是简单句
            <span className="bg-white px-1.5 py-0.5 rounded mx-1 text-[#c0392b] font-mono text-xs">主</span>
            <span className="bg-white px-1.5 py-0.5 rounded mx-1 text-[#1e8449] font-mono text-xs">谓</span>
            <span className="bg-white px-1.5 py-0.5 rounded mx-1 text-[#2d5aa0] font-mono text-xs">宾</span>
            之外的补充成分
          </p>
        </div>

        {/* 例子1: 副词修饰动词 */}
        <Section num={1} title="副词修饰动词" en="Adverb + Verb">
          <div className="space-y-1.5 text-xs">
            <ExampleRow
              en="Yusuf smiles happily."
              highlight="happily"
              position="后"
              note="副词在动词之后"
            />
            <ExampleRow
              en="Yusuf quickly understood."
              highlight="quickly"
              position="前"
              note="副词在动词之前"
            />
          </div>
        </Section>

        {/* 例子2: 副词修饰形容词 */}
        <Section num={2} title="副词修饰形容词" en="Adverb + Adjective">
          <div className="space-y-1.5 text-xs">
            <ExampleRow
              en="She is strikingly beautiful."
              highlight="strikingly"
              position="程度"
              note="表示程度：很"
            />
            <ExampleRow
              en="He is pretty tall."
              highlight="pretty"
              position="程度"
              note="表示程度：蛮"
            />
          </div>
        </Section>

        {/* 例子3: 时间/地点状语位置灵活 */}
        <Section num={3} title="状语位置灵活" en="Flexible Position">
          <div className="space-y-2">
            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <p className="text-[10px] text-gray-400 mb-1">时间状语</p>
              <p className="font-mono text-xs">
                He came <span className="text-[#e74c3c] underline">yesterday</span>.
              </p>
              <p className="font-mono text-xs">
                <span className="text-[#e74c3c] underline">Yesterday</span> he came.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <p className="text-[10px] text-gray-400 mb-1">地点状语</p>
              <p className="font-mono text-xs">
                He celebrated his birthday <span className="text-[#3498db] underline">at school</span>.
              </p>
              <p className="font-mono text-xs">
                <span className="text-[#3498db] underline">At school</span> he celebrated his birthday.
              </p>
            </div>
          </div>
        </Section>

        {/* 例子4: 原因状语从句 */}
        <Section num={4} title="原因状语从句" en="Causal Clause">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="text-xs text-gray-600 mb-2">He likes spring...</p>
            <div className="space-y-1 font-mono text-xs">
              <p>
                <span className="bg-[#e67e22] text-white px-1.5 py-0.5 rounded text-[10px]">for</span>
                <span className="ml-2">its beauty.</span>
                <span className="text-gray-400 ml-2">(介词短语)</span>
              </p>
              <p>
                <span className="bg-[#e67e22] text-white px-1.5 py-0.5 rounded text-[10px]">for</span>
                <span className="ml-2">it is beautiful.</span>
                <span className="text-gray-400 ml-2">(从句)</span>
              </p>
              <p>
                <span className="bg-[#e67e22] text-white px-1.5 py-0.5 rounded text-[10px]">because</span>
                <span className="ml-2">it is beautiful.</span>
                <span className="text-[#e67e22] ml-2">★ 最常用</span>
              </p>
              <p>
                <span className="bg-[#e67e22] text-white px-1.5 py-0.5 rounded text-[10px]">as</span>
                <span className="ml-2">it is beautiful.</span>
              </p>
              <p>
                <span className="bg-[#e67e22] text-white px-1.5 py-0.5 rounded text-[10px]">since</span>
                <span className="ml-2">it is beautiful.</span>
              </p>
            </div>
            <div className="mt-2 pt-2 border-t border-dashed border-gray-200">
              <p className="text-[10px] text-gray-500">
                <span className="text-[#e67e22] font-bold">提示：</span>
                除了 since 和 for 可以放句首外，其它的原因从句都靠后
              </p>
            </div>
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-xs text-gray-400">10</div>
      </div>
    </div>
  )
})

function Section({ num, title, en, children }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-5 h-5 bg-[#2d5aa0] text-white text-[10px] font-mono font-semibold rounded-full flex items-center justify-center">
          {num}
        </span>
        <span className="font-serif text-sm font-bold">{title}</span>
        <span className="text-[10px] text-gray-400">{en}</span>
      </div>
      {children}
    </div>
  )
}

function ExampleRow({ en, highlight, position, note }) {
  const parts = en.split(highlight)
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded px-2 py-1.5">
      <span className="font-mono flex-1">
        {parts[0]}
        <span className="text-[#8e44ad] underline font-medium">{highlight}</span>
        {parts[1]}
      </span>
      <span className="bg-[#8e44ad]/10 text-[#8e44ad] text-[10px] px-1.5 py-0.5 rounded">{position}</span>
      <span className="text-gray-400 text-[10px] w-24">{note}</span>
    </div>
  )
}

Page10.displayName = 'Page10'
export default Page10
