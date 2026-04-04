import { forwardRef } from 'react'

const Page15 = forwardRef((_, ref) => {
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
            七（续）
          </span>
          <h2 className="font-serif text-xl font-black">三个特殊句式</h2>
          <p className="text-base text-gray-500 mt-1">虚拟语气</p>
        </div>

        {/* 3) 虚拟语气 */}
        <Section num={3} title="虚拟语气" en="Subjunctive Mood">
          {/* 条件状语 vs 虚拟语气 */}
          <div className="space-y-3">
            {/* 可能发生 */}
            <div className="bg-[#eafaf1] border border-[#1e8449]/30 rounded-lg p-3">
              <p className="text-sm font-bold text-[#1e8449] mb-2">假设一件有可能发生的事 → 条件状语</p>
              <p className="font-mono text-sm">
                <span className="text-[#1e8449]">If</span> it <span className="underline">rains</span>, the event <span className="underline">will</span> be canceled.
              </p>
              <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
                <span>现在时</span>
                <span>→</span>
                <span>将来时</span>
              </div>
            </div>

            {/* 不可能发生 */}
            <div className="bg-[#fdeaea] border border-[#c0392b]/30 rounded-lg p-3">
              <p className="text-sm font-bold text-[#c0392b] mb-2">假设一件不可能发生的事 → 虚拟语气</p>

              {/* 现在不可能 */}
              <div className="bg-white rounded p-2 mb-2">
                <p className="text-sm text-gray-500 mb-1">现在不可能：</p>
                <p className="font-mono text-sm">
                  If I <span className="bg-[#c0392b] text-white px-1 rounded text-xs">were</span> a boy, I <span className="bg-[#c0392b] text-white px-1 rounded text-xs">would</span> be a soldier.
                </p>
                <p className="text-xs text-gray-400 text-right mt-1">过去时</p>
              </div>

              {/* 过去不可能 */}
              <div className="bg-white rounded p-2">
                <p className="text-sm text-gray-500 mb-1">过去不可能（和既成事实相反）：</p>
                <p className="font-mono text-sm mb-1">
                  If I <span className="bg-[#8e44ad] text-white px-1 rounded text-xs">had studied</span> English, it <span className="bg-[#8e44ad] text-white px-1 rounded text-xs">would have been</span> easier now.
                </p>
                <p className="text-sm text-gray-400 mb-2">说明过去很蠢，现在并不 easy</p>
                <p className="font-mono text-sm">
                  If I <span className="bg-[#8e44ad] text-white px-1 rounded text-xs">hadn't had</span> that extra cake, I <span className="bg-[#8e44ad] text-white px-1 rounded text-xs">wouldn't have been</span> feeling guilty.
                </p>
                <p className="text-sm text-gray-400">说明吃了，现在很有负罪感</p>
                <div className="flex justify-center gap-4 mt-2 text-xs text-[#8e44ad]">
                  <span>过去完成</span>
                  <span>→</span>
                  <span>过去时+完成时</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">15</div>
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

Page15.displayName = 'Page15'
export default Page15
