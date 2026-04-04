import { forwardRef } from 'react'

const Page12 = forwardRef((_, ref) => {
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
          <p className="text-base text-gray-500 mt-1">方式、时间、地点从句</p>
        </div>

        {/* viii. 方式状语从句 */}
        <Section num="viii" title="方式状语从句" en="Manner" color="#34495e">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="space-y-1.5 font-mono text-sm">
              <p>I learned English <span className="bg-[#34495e]/20 text-[#34495e] px-1 rounded">through</span> an online course.</p>
              <p>I contact my friends <span className="bg-[#34495e]/20 text-[#34495e] px-1 rounded">via</span> WeChat.</p>
              <p>I draw <span className="bg-[#34495e]/20 text-[#34495e] px-1 rounded">with</span> my pen.</p>
              <p>I found differences <span className="bg-[#34495e]/20 text-[#34495e] px-1 rounded">by</span> contrasting the two.</p>
            </div>
            <div className="mt-2 pt-2 border-t border-dashed border-gray-200">
              <p className="text-xs text-gray-400 mb-1">从句形式：</p>
              <div className="space-y-1 font-mono text-sm">
                <p>She looks at me <span className="bg-[#34495e] text-white px-1.5 py-0.5 rounded text-xs">as if</span> she knows me.</p>
                <p>He finished the work <span className="bg-[#34495e] text-white px-1.5 py-0.5 rounded text-xs">as</span> I told him to.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 时间/地点状语从句例句 */}
        <div className="mt-4 mb-2">
          <p className="text-base font-bold text-[#2d5aa0] mb-2">更多从句例句</p>
        </div>

        {/* i. 时间状语从句 */}
        <Section num="i" title="时间状语从句" en="Time Clause" color="#e74c3c">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-base">
              He called me <span className="bg-[#e74c3c] text-white px-1.5 py-0.5 rounded text-sm">when</span> I was sleeping.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              他打电话给我<span className="text-[#e74c3c] font-bold">当</span>我在睡觉的时候
            </p>
          </div>
        </Section>

        {/* ii. 地点状语从句 */}
        <Section num="ii" title="地点状语从句" en="Place Clause" color="#3498db">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-base">
              We met <span className="bg-[#3498db] text-white px-1.5 py-0.5 rounded text-sm">where</span> we used to go for a walk.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              我们在<span className="text-[#3498db] font-bold">我们曾经散步的地方</span>见面
            </p>
          </div>
        </Section>

        {/* 小贴士 */}
        <div className="mt-3 bg-[#fef9e7] border border-[#d4a017] rounded-lg p-3">
          <div className="flex items-start gap-2">
            <span className="text-[#d4a017]">💡</span>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-[#d4a017]">总结：</span>
              状语从句共8种（时间、地点、原因、条件、目的、结果、让步、方式），用于修饰动词或整个句子
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">12</div>
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

Page12.displayName = 'Page12'
export default Page12
