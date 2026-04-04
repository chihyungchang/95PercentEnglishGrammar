import { forwardRef } from 'react'

const Page7 = forwardRef((_, ref) => {
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
            五
          </span>
          <h2 className="font-serif text-xl font-black">定语从句</h2>
          <p className="text-base text-gray-500 mt-1">Attributive Clause</p>
        </div>

        {/* 什么是定语 */}
        <Section num={1} title="什么是定语？" en="What is Attributive?">
          <div className="bg-[#fef9e7] border border-[#d4a017] rounded-lg p-4">
            <p className="text-base text-gray-700 mb-3">
              <span className="font-bold text-[#d4a017]">定语</span> = 修饰限定名词
            </p>
            <p className="text-sm text-gray-600 mb-2">汉语中「的」前面的内容：</p>
            <div className="bg-white rounded px-3 py-2 text-center">
              <span className="text-[#c0392b] font-bold text-lg">红红</span>
              <span className="text-gray-400 mx-1">的</span>
              <span className="text-[#2d5aa0] font-bold text-lg">花</span>
              <div className="flex justify-center gap-8 text-xs text-gray-500 mt-1">
                <span>↑ 定语</span>
                <span>↑ 名词</span>
              </div>
            </div>
          </div>
        </Section>

        {/* 定语的类型 */}
        <Section num={2} title="定语的类型" en="Types">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#e8f0fe] border border-[#2d5aa0] rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 bg-[#2d5aa0] text-white text-xs font-mono rounded-full flex items-center justify-center">1</span>
                <span className="font-semibold text-[#2d5aa0]">形容词</span>
              </div>
              <p className="text-sm text-gray-500">短一些</p>
              <p className="text-sm text-gray-600 mt-1">放在名词<span className="font-bold">前面</span></p>
            </div>
            <div className="bg-[#f5eef8] border border-[#8e44ad] rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 bg-[#8e44ad] text-white text-xs font-mono rounded-full flex items-center justify-center">2</span>
                <span className="font-semibold text-[#8e44ad]">短语或从句</span>
              </div>
              <p className="text-sm text-gray-500">长一些</p>
              <p className="text-sm text-gray-600 mt-1">放在名词<span className="font-bold">后面</span></p>
            </div>
          </div>
        </Section>

        {/* 定语的位置 */}
        <Section num={3} title="定语的位置" en="Position">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-center gap-2 text-base">
              <span className="bg-[#e8f0fe] text-[#2d5aa0] px-2 py-1 rounded text-sm">定①</span>
              <span className="text-[#c0392b] font-bold">主</span>
              <span className="bg-[#f5eef8] text-[#8e44ad] px-2 py-1 rounded text-sm">定②</span>
              <span className="text-gray-400 mx-2">+</span>
              <span className="text-[#1e8449] font-bold">谓</span>
              <span className="text-gray-400 mx-2">+</span>
              <span className="bg-[#e8f0fe] text-[#2d5aa0] px-2 py-1 rounded text-sm">定①</span>
              <span className="text-[#2d5aa0] font-bold">宾</span>
              <span className="bg-[#f5eef8] text-[#8e44ad] px-2 py-1 rounded text-sm">定②</span>
            </div>
            <div className="flex justify-center gap-6 text-xs text-gray-400 mt-2">
              <span>(名)</span>
              <span>(动)</span>
              <span>(名)</span>
            </div>
          </div>
        </Section>

        {/* 例句 */}
        <div className="mt-4">
          <h3 className="font-serif text-lg font-bold mb-3">例句</h3>

          {/* 定① 例子 */}
          <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#2d5aa0] text-white text-xs px-2 py-0.5 rounded">定①</span>
              <span className="text-sm text-gray-500">形容词作定语</span>
            </div>
            <p className="font-mono text-base mb-2">
              A <span className="text-[#2d5aa0] underline">beautiful</span> <span className="text-[#c0392b]">girl</span> <span className="text-[#1e8449]">shared</span> a <span className="text-[#2d5aa0] underline">fascinating</span> <span className="text-[#2d5aa0]">story</span>.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-[#e8f0fe] px-1.5 py-0.5 rounded">beautiful = 定①(形)</span>
              <span className="bg-[#fdeaea] px-1.5 py-0.5 rounded">girl = 主(名)</span>
              <span className="bg-[#eafaf1] px-1.5 py-0.5 rounded">shared = 谓(动)</span>
              <span className="bg-[#e8f0fe] px-1.5 py-0.5 rounded">fascinating = 定①(形)</span>
              <span className="bg-[#e8f0fe] px-1.5 py-0.5 rounded">story = 宾(名)</span>
            </div>
          </div>

          {/* 定② 例子 */}
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#8e44ad] text-white text-xs px-2 py-0.5 rounded">定②</span>
              <span className="text-sm text-gray-500">介宾短语作定语</span>
            </div>
            <p className="font-mono text-base mb-2">
              A <span className="text-[#c0392b]">girl</span> <span className="text-[#8e44ad] underline">from Mars</span> <span className="text-[#1e8449]">shared</span> a <span className="text-[#2d5aa0]">story</span> <span className="text-[#8e44ad] underline">about her people</span>.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-[#fdeaea] px-1.5 py-0.5 rounded">girl = 主(名)</span>
              <span className="bg-[#f5eef8] px-1.5 py-0.5 rounded">from Mars = 定②(介宾)</span>
              <span className="bg-[#eafaf1] px-1.5 py-0.5 rounded">shared = 谓(动)</span>
              <span className="bg-[#e8f0fe] px-1.5 py-0.5 rounded">story = 宾(名)</span>
              <span className="bg-[#f5eef8] px-1.5 py-0.5 rounded">about her people = 定②(介宾)</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">7</div>
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

Page7.displayName = 'Page7'
export default Page7
