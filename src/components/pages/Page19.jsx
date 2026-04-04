import { forwardRef } from 'react'

const Page19 = forwardRef((_, ref) => {
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
            九
          </span>
          <h2 className="font-serif text-xl font-black">语 态</h2>
          <p className="text-base text-gray-500 mt-1">Voice</p>
        </div>

        {/* 主动语态 */}
        <Section num={1} title="主动语态" en="Active Voice">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-center gap-1 font-mono text-lg mb-3">
              <span className="bg-[#c0392b] text-white px-2 py-1 rounded">I</span>
              <span className="bg-[#1e8449] text-white px-2 py-1 rounded">finished</span>
              <span className="bg-[#2d5aa0] text-white px-2 py-1 rounded">my task</span>
              <span>.</span>
            </div>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <span><span className="text-[#c0392b]">我</span> (主)</span>
              <span><span className="text-[#1e8449]">完成了</span> (谓)</span>
              <span><span className="text-[#2d5aa0]">我的任务</span> (宾)</span>
            </div>
            <div className="text-center mt-3">
              <span className="inline-block bg-[#1e8449]/20 text-[#1e8449] px-3 py-1 rounded-full text-base font-bold">
                主动
              </span>
            </div>
          </div>
        </Section>

        {/* 被动语态 */}
        <Section num={2} title="被动语态" en="Passive Voice">
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
            <div className="flex items-center justify-center gap-1 font-mono text-lg mb-3">
              <span className="bg-[#c0392b] text-white px-2 py-1 rounded">My task</span>
              <span className="bg-[#8e44ad] text-white px-2 py-1 rounded">is</span>
              <span className="bg-[#d4a017] text-white px-2 py-1 rounded">finished</span>
              <span>.</span>
            </div>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <span><span className="text-[#c0392b]">我的任务</span> (主)</span>
              <span><span className="text-[#8e44ad]">(被)</span> (系)</span>
              <span><span className="text-[#d4a017]">完成了</span> (表)</span>
            </div>
            <div className="text-center mt-3">
              <span className="inline-block bg-[#8e44ad]/20 text-[#8e44ad] px-3 py-1 rounded-full text-base font-bold">
                被动
              </span>
            </div>
          </div>

          {/* 被动语态公式 */}
          <div className="bg-[#fef9e7] border border-[#d4a017] rounded-lg p-4">
            <p className="text-sm font-bold text-[#d4a017] mb-3 text-center">被动语态公式：</p>
            <div className="flex items-center justify-center gap-2 font-mono text-lg mb-3">
              <span className="bg-[#8e44ad] text-white px-3 py-1.5 rounded">Be 动词</span>
              <span className="text-gray-400">+</span>
              <span className="bg-[#d4a017] text-white px-3 py-1.5 rounded">动词过去分词 (done)</span>
            </div>
            <div className="bg-white rounded p-3 mt-3">
              <p className="text-sm text-center text-gray-600 mb-2">注意：过去分词 ≠ 过去式</p>
              <div className="flex justify-center gap-8 font-mono text-base">
                <div className="text-center">
                  <span className="bg-[#d4a017]/20 text-[#d4a017] px-2 py-0.5 rounded">done</span>
                  <p className="text-xs text-gray-400 mt-1">过去分词</p>
                </div>
                <span className="text-2xl text-gray-300">≠</span>
                <div className="text-center">
                  <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded">did</span>
                  <p className="text-xs text-gray-400 mt-1">过去式</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">19</div>
      </div>
    </div>
  )
})

function Section({ num, title, en, children }) {
  return (
    <div className="mb-4">
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

Page19.displayName = 'Page19'
export default Page19
