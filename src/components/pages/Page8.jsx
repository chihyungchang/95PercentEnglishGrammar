import { forwardRef } from 'react'

const Page8 = forwardRef((_, ref) => {
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
            五（续）
          </span>
          <h2 className="font-serif text-xl font-black">定语从句详解</h2>
          <p className="text-base text-gray-500 mt-1">更多定②的例子</p>
        </div>

        {/* 例子2: 不定式短语作定语 */}
        <Section num={4} title="不定式短语作定语" en="Infinitive as Attributive">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-base mb-2 text-center">
              A <span className="text-[#c0392b]">task</span> <span className="text-[#8e44ad] underline">to tackle</span> <span className="text-[#1e8449]">is</span> the <span className="text-[#2d5aa0] underline">potential</span> <span className="text-[#d4a017]">crisis</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs mt-2">
              <span className="bg-[#fdeaea] px-1.5 py-0.5 rounded">task = 主(名)</span>
              <span className="bg-[#f5eef8] px-1.5 py-0.5 rounded">to tackle = 定②(不定式)</span>
              <span className="bg-[#eafaf1] px-1.5 py-0.5 rounded">is = 系语</span>
              <span className="bg-[#e8f0fe] px-1.5 py-0.5 rounded">potential = 定①(形)</span>
              <span className="bg-[#fef9e7] px-1.5 py-0.5 rounded">crisis = 表语(名)</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">一个要解决的任务是潜在的危机</p>
          </div>
        </Section>

        {/* 例子3: 定语从句 */}
        <Section num={5} title="定语从句" en="Relative Clause">
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <p className="font-mono text-base mb-2 text-center leading-relaxed">
              A <span className="text-[#c0392b]">girl</span> <span className="text-[#8e44ad] underline">who likes spring</span> <span className="text-[#1e8449]">shared</span> a <span className="text-[#2d5aa0]">story</span> <span className="text-[#8e44ad] underline">which moved us</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs mt-2">
              <span className="bg-[#fdeaea] px-1.5 py-0.5 rounded">girl = 主(名)</span>
              <span className="bg-[#f5eef8] px-1.5 py-0.5 rounded">who likes spring = 定②(定语从句)</span>
              <span className="bg-[#eafaf1] px-1.5 py-0.5 rounded">shared = 谓(动)</span>
              <span className="bg-[#e8f0fe] px-1.5 py-0.5 rounded">story = 宾(名)</span>
              <span className="bg-[#f5eef8] px-1.5 py-0.5 rounded">which moved us = 定②(定语从句)</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">一个喜欢春天的女孩分享了一个打动我们的故事</p>
          </div>
        </Section>

        {/* 终极综合版 */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#d4a017] text-white text-sm px-2 py-1 rounded">终极综合版</span>
          </div>
          <div className="bg-[#fef9e7] border border-[#d4a017] rounded-lg p-3">
            <p className="font-mono text-sm leading-loose text-center">
              A <span className="text-[#2d5aa0]">beautiful</span> <span className="text-[#c0392b] font-bold">girl</span> <span className="text-[#8e44ad]">from Mars</span> <span className="text-[#8e44ad]">who likes spring</span> <span className="text-[#1e8449] font-bold">shared</span> a <span className="text-[#2d5aa0]">fascinating</span> <span className="text-[#2d5aa0] font-bold">story</span> <span className="text-[#8e44ad]">about her people</span> <span className="text-[#8e44ad]">which moved us</span>.
            </p>

            <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
              <div className="space-y-1">
                <p><span className="bg-[#e8f0fe] px-1 rounded">beautiful</span> = 定①(形)</p>
                <p><span className="bg-[#fdeaea] px-1 rounded font-bold">girl</span> = 主(名)</p>
                <p><span className="bg-[#f5eef8] px-1 rounded">from Mars</span> = 定②(介宾)</p>
                <p><span className="bg-[#f5eef8] px-1 rounded">who likes spring</span> = 定②(从句)</p>
              </div>
              <div className="space-y-1">
                <p><span className="bg-[#eafaf1] px-1 rounded font-bold">shared</span> = 谓(动)</p>
                <p><span className="bg-[#e8f0fe] px-1 rounded">fascinating</span> = 定①(形)</p>
                <p><span className="bg-[#e8f0fe] px-1 rounded font-bold">story</span> = 宾(名)</p>
                <p><span className="bg-[#f5eef8] px-1 rounded">about her people</span> = 定②(介宾)</p>
                <p><span className="bg-[#f5eef8] px-1 rounded">which moved us</span> = 定②(从句)</p>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-dashed border-[#d4a017]">
              <p className="text-sm text-gray-600 text-center">
                <span className="text-[#c0392b]">一个</span>
                <span className="text-[#2d5aa0]">美丽的</span>、
                <span className="text-[#8e44ad]">来自火星的</span>、
                <span className="text-[#8e44ad]">喜欢春天的</span>
                <span className="text-[#c0392b] font-bold">女孩</span>
                <span className="text-[#1e8449] font-bold">分享了</span>
                <span className="text-[#2d5aa0]">一个</span>
                <span className="text-[#2d5aa0]">迷人的</span>、
                <span className="text-[#8e44ad]">关于她的人民的</span>、
                <span className="text-[#8e44ad]">打动了我们的</span>
                <span className="text-[#2d5aa0] font-bold">故事</span>
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">8</div>
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

Page8.displayName = 'Page8'
export default Page8
