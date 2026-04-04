import { forwardRef } from 'react'

const Page6 = forwardRef((_, ref) => {
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
          <span className="inline-block bg-[#1a1a2e] text-[#fdfcf8] px-3 py-1 rounded text-sm tracking-widest mb-1.5">
            四（续）
          </span>
          <h2 className="font-serif text-xl font-black">表语从句与同位语从句</h2>
          <p className="text-base text-gray-500 mt-1">名词性从句的另外两种形式</p>
        </div>

        {/* 表语从句 */}
        <Section num={3} title="表语从句" en="Predicative Clause">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-base mb-2 text-center">
              <span className="text-[#c0392b]">The fact</span>
              <span className="text-[#8e44ad] font-bold"> is </span>
              <span className="underline decoration-[#d4a017] decoration-2 underline-offset-4 bg-[#fef9e7] px-1">that he likes football</span>.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center text-xs mt-3 pt-2 border-t border-dashed border-gray-200">
              <div>
                <span className="text-[#c0392b] font-semibold">名词</span>
                <p className="text-gray-400">(主语)</p>
              </div>
              <div>
                <span className="text-[#8e44ad] font-semibold">Be动词</span>
                <p className="text-gray-400">(系语)</p>
              </div>
              <div>
                <span className="text-[#d4a017] font-semibold">名词</span>
                <p className="text-gray-400">(表语)</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">事实是他喜欢足球</p>
          </div>
        </Section>

        {/* 同位语从句 */}
        <Section num={4} title="同位语从句" en="Appositive Clause">
          {/* 什么是同位语 */}
          <div className="bg-[#f5eef8] border border-[#8e44ad] rounded-lg p-3 mb-3">
            <p className="text-sm font-semibold text-[#8e44ad] mb-2">首先，什么是同位语？</p>
            <p className="text-sm text-gray-600 mb-2 leading-relaxed">
              同位语起<span className="font-bold">解释说明</span>作用，和其所解释的名词<span className="font-bold">相等</span>；
              同位语是 <span className="bg-white px-1.5 py-0.5 rounded border border-gray-200 font-semibold">[名词]</span>
            </p>
            <div className="space-y-2">
              <div className="bg-white rounded p-2">
                <p className="font-mono text-sm">
                  <span className="text-[#c0392b]">Yusuf</span>, <span className="text-[#8e44ad] underline">a Uyghur man</span>, <span className="text-[#1e8449]">loves</span> <span className="text-[#2d5aa0]">spring</span>.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  <span className="text-[#c0392b]">主</span>，<span className="text-[#8e44ad]">同位语</span>，<span className="text-[#1e8449]">谓</span><span className="text-[#2d5aa0]">宾</span>
                  <span className="text-gray-400 ml-2">← 解释说明</span>
                </p>
              </div>
              <div className="bg-white rounded p-2">
                <p className="font-mono text-sm">
                  <span className="text-[#c0392b]">Yusuf</span> <span className="text-[#1e8449]">loves</span> <span className="text-[#2d5aa0]">spring</span>, <span className="text-[#8e44ad] underline">one of the four seasons</span>.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  <span className="text-[#c0392b]">主</span><span className="text-[#1e8449]">谓</span><span className="text-[#2d5aa0]">宾</span>，<span className="text-[#8e44ad]">同位语</span>
                  <span className="text-gray-400 ml-2">← 解释说明</span>
                </p>
              </div>
            </div>
          </div>

          {/* 同位语从句位置 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
            <p className="text-sm font-semibold mb-2">同位语从句位置：</p>
            <div className="flex gap-3 text-sm">
              <span className="bg-white border border-gray-200 px-2 py-1 rounded">
                主<span className="text-[#8e44ad] font-semibold">(同从)</span>谓宾
              </span>
              <span className="bg-white border border-gray-200 px-2 py-1 rounded">
                主谓宾<span className="text-[#8e44ad] font-semibold">(同从)</span>
              </span>
            </div>
          </div>

          {/* 同位语从句例句 */}
          <div className="space-y-2">
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="font-mono text-base mb-1">
                <span className="text-[#c0392b]">The fact</span> <span className="underline decoration-[#8e44ad] decoration-2 underline-offset-4 bg-[#f5eef8] px-0.5">that he likes football</span> <span className="text-[#1e8449]">surprised</span> <span className="text-[#2d5aa0]">us</span>.
              </p>
              <p className="text-xs text-gray-500">
                <span className="text-[#c0392b]">名词(主)</span> + <span className="text-[#8e44ad]">同位语从句</span> + <span className="text-[#1e8449]">动词(谓)</span> + <span className="text-[#2d5aa0]">名词(宾)</span>
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="font-mono text-base mb-1">
                <span className="text-[#c0392b]">He</span> <span className="text-[#1e8449]">states</span> <span className="text-[#2d5aa0]">the fact</span> <span className="underline decoration-[#8e44ad] decoration-2 underline-offset-4 bg-[#f5eef8] px-0.5">that he likes football</span>.
              </p>
              <p className="text-xs text-gray-500">
                <span className="text-[#c0392b]">名词(主)</span> + <span className="text-[#1e8449]">动词(谓)</span> + <span className="text-[#2d5aa0]">名词(宾)</span> + <span className="text-[#8e44ad]">同位语从句</span>
              </p>
            </div>
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">6</div>
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

Page6.displayName = 'Page6'
export default Page6
