import { forwardRef } from 'react'

const Page5 = forwardRef((_, ref) => {
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
        {/* Title - 延续第四章 */}
        <div className="text-center mb-4 pb-2 border-b-2 border-[#1a1a2e]">
          <span className="inline-block bg-[#1a1a2e] text-[#fdfcf8] px-3 py-1 rounded text-xs tracking-widest mb-1.5">
            四（续）
          </span>
          <h2 className="font-serif text-xl font-black">从句的「降级」原理</h2>
          <p className="text-sm text-gray-500 mt-1">从句如何变成句子成分</p>
        </div>

        {/* 从句结构分析 */}
        <div className="bg-[#fef9e7] border border-[#d4a017] rounded-lg p-4 mb-4">
          <h3 className="font-serif text-sm font-bold text-[#d4a017] mb-3">例：名词性从句结构</h3>
          <div className="bg-white rounded-lg p-3 mb-3">
            <div className="flex items-center justify-center gap-4 font-mono text-lg">
              <span className="text-[#8e44ad]">that</span>
              <span className="text-[#c0392b]">he</span>
              <span className="text-[#1e8449]">likes</span>
              <span className="text-[#2d5aa0]">football</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-[10px] text-gray-500 mt-1">
              <span>引导词</span>
              <span>名</span>
              <span>动</span>
              <span>名</span>
            </div>
            <div className="flex justify-center mt-2">
              <div className="bg-[#e8f0fe] border border-[#2d5aa0] rounded-full px-4 py-1 text-sm">
                <span className="text-[#c0392b] font-bold">主</span>
                <span className="text-[#1e8449] font-bold">谓</span>
                <span className="text-[#2d5aa0] font-bold">宾</span>
                <span className="text-gray-500 ml-2">→ 句子</span>
              </div>
            </div>
          </div>

          {/* 降级流程 */}
          <div className="flex items-center justify-center gap-2 text-sm flex-wrap">
            <span className="bg-white border border-gray-200 rounded px-2 py-1">句子</span>
            <span className="text-[#d4a017] font-bold">→ 降级 →</span>
            <span className="bg-[#fdeaea] border border-[#c0392b] rounded px-2 py-1 text-[#c0392b] font-semibold">名词</span>
            <span className="text-gray-400">→</span>
            <span className="text-gray-600">可以做句子成分</span>
          </div>
        </div>

        {/* 重要提示 */}
        <div className="bg-gray-100 border-l-4 border-[#2d5aa0] rounded-r-lg p-3 mb-4">
          <p className="font-semibold text-[#2d5aa0] text-xs mb-1">为什么需要「降级」？</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            英文里一个句子<span className="font-bold text-[#c0392b]">只能有一个谓语动词</span>。
            六种句型都只有一个动词做谓语。从句本身是完整句子，不能直接做成分，需要「降级」成名词后才能使用。
          </p>
        </div>

        {/* 主语从句详解 */}
        <Section num={1} title="主语从句" en="Subject Clause">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-sm mb-2 text-center">
              <span className="underline decoration-[#c0392b] decoration-2 underline-offset-4 bg-[#fdeaea] px-1">That he likes football</span>
              <span className="text-[#1e8449] font-bold"> surprised </span>
              <span className="text-[#2d5aa0]">us</span>.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] mt-3 pt-2 border-t border-dashed border-gray-200">
              <div>
                <span className="text-[#c0392b] font-semibold">名词</span>
                <p className="text-gray-400">(主语)</p>
              </div>
              <div>
                <span className="text-[#1e8449] font-semibold">及物动词</span>
                <p className="text-gray-400">(谓语)</p>
              </div>
              <div>
                <span className="text-[#2d5aa0] font-semibold">名词</span>
                <p className="text-gray-400">(宾语)</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">他喜欢足球这件事让我们惊讶</p>
          </div>
        </Section>

        {/* 宾语从句详解 */}
        <Section num={2} title="宾语从句" en="Object Clause">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-sm mb-2 text-center">
              <span className="text-[#c0392b]">He</span>
              <span className="text-[#1e8449] font-bold"> said </span>
              <span className="underline decoration-[#2d5aa0] decoration-2 underline-offset-4 bg-[#e8f0fe] px-1">that he likes football</span>.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] mt-3 pt-2 border-t border-dashed border-gray-200">
              <div>
                <span className="text-[#c0392b] font-semibold">名词</span>
                <p className="text-gray-400">(主语)</p>
              </div>
              <div>
                <span className="text-[#1e8449] font-semibold">及物动词</span>
                <p className="text-gray-400">(谓语)</p>
              </div>
              <div>
                <span className="text-[#2d5aa0] font-semibold">名词</span>
                <p className="text-gray-400">(宾语)</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">他说他喜欢足球</p>
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-xs text-gray-400">5</div>
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

Page5.displayName = 'Page5'
export default Page5
