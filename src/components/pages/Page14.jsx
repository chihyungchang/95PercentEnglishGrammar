import { forwardRef } from 'react'

const Page14 = forwardRef((_, ref) => {
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
            七（续）
          </span>
          <h2 className="font-serif text-xl font-black">三个特殊句式</h2>
          <p className="text-sm text-gray-500 mt-1">倒装句</p>
        </div>

        {/* 2) 倒装句 */}
        <Section num={2} title="倒装句" en="Inversion">
          {/* 句序说明 */}
          <div className="bg-[#e8f0fe] border border-[#2d5aa0]/30 rounded-lg p-3 mb-3">
            <div className="flex justify-center gap-6 text-sm">
              <div>
                <span className="text-gray-500">正常句序：</span>
                <span className="text-[#c0392b] font-bold">主</span>
                <span className="text-[#1e8449] font-bold ml-1">谓</span>
                <span className="text-[#2d5aa0] font-bold ml-1">(宾)</span>
              </div>
              <div>
                <span className="text-gray-500">倒装句序：</span>
                <span className="text-[#1e8449] font-bold">谓</span>
                <span className="text-[#c0392b] font-bold ml-1">主</span>
                <span className="text-[#2d5aa0] font-bold ml-1">(宾)</span>
              </div>
            </div>
            <p className="text-[10px] text-center text-gray-500 mt-1">→ 强调、加强语气的作用</p>
          </div>

          {/* 例子 */}
          <div className="space-y-2">
            <InversionExample
              normal="We can win only when we try harder."
              inverted="Only when we try harder can we win."
              highlight="Only"
            />
            <InversionExample
              normal="We can win only through hard work."
              inverted="Only through hard work can we win."
              highlight="Only"
            />
            <InversionExample
              normal="The bus comes."
              inverted="Here comes the bus."
              highlight="Here"
            />
            <div className="bg-[#fef9e7] border border-[#d4a017] rounded-lg p-3">
              <div className="space-y-1">
                <p className="text-xs text-gray-500">正常：<span className="font-mono">The Queen live long!</span></p>
                <p className="text-xs">
                  <span className="text-gray-500">倒装：</span>
                  <span className="font-mono">
                    <span className="bg-[#d4a017] text-white px-1.5 py-0.5 rounded text-[10px]">Long</span> live the Queen!
                  </span>
                </p>
              </div>
              <p className="text-[10px] text-[#d4a017] mt-2 text-right font-bold">← 标准表达，更常用！</p>
            </div>
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-xs text-gray-400">14</div>
      </div>
    </div>
  )
})

function Section({ num, title, en, children }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-6 h-6 bg-[#2d5aa0] text-white text-xs font-mono font-semibold rounded-full flex items-center justify-center">
          {num}
        </span>
        <span className="font-serif text-base font-bold">{title}</span>
        <span className="text-xs text-gray-400">{en}</span>
      </div>
      {children}
    </div>
  )
}

function InversionExample({ normal, inverted, highlight }) {
  const parts = inverted.split(highlight)
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2">
      <div className="space-y-1">
        <p className="text-xs">
          <span className="text-gray-500">正常：</span>
          <span className="font-mono">{normal}</span>
        </p>
        <p className="text-xs">
          <span className="text-gray-500">倒装：</span>
          <span className="font-mono">
            {parts[0]}
            <span className="bg-[#8e44ad] text-white px-1.5 py-0.5 rounded text-[10px]">{highlight}</span>
            {parts[1]}
          </span>
        </p>
      </div>
    </div>
  )
}

Page14.displayName = 'Page14'
export default Page14
