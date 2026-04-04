import { forwardRef } from 'react'

const Page9 = forwardRef((_, ref) => {
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
            六
          </span>
          <h2 className="font-serif text-xl font-black">状语从句</h2>
          <p className="text-base text-gray-500 mt-1">Adverbial Clause</p>
        </div>

        {/* 什么是状语 */}
        <Section num={1} title="什么是状语？" en="What is Adverbial?">
          <div className="space-y-2">
            {/* 副词 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <span className="bg-[#8e44ad] text-white text-xs px-1.5 py-0.5 rounded">①</span>
                <div className="flex-1">
                  <p className="text-base font-bold text-[#8e44ad]">副词</p>
                  <div className="mt-2 space-y-1.5">
                    <p className="text-sm text-gray-600">
                      <span className="text-gray-400">修饰动词：</span>
                      walk <span className="text-[#8e44ad] font-medium underline">slowly</span>
                      <span className="text-gray-400 ml-2">慢慢地走</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="text-gray-400">修饰形容词：</span>
                      <span className="text-[#8e44ad] font-medium underline">slightly</span> higher
                      <span className="text-gray-400 ml-2">稍微高一点</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 状语从句 */}
            <div className="bg-[#f5eef8] border border-[#8e44ad]/30 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <span className="bg-[#8e44ad] text-white text-xs px-1.5 py-0.5 rounded">②</span>
                <div className="flex-1">
                  <p className="text-base">
                    起<span className="font-bold text-[#8e44ad]">副词作用</span>的句子 →
                    <span className="font-bold text-[#8e44ad] ml-1">状语从句</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 按作用分类 */}
        <Section num={2} title="状语从句分类" en="Types by Function">
          <div className="grid grid-cols-1 gap-1.5 text-sm">
            <TypeRow
              letter="A"
              type="时间状语"
              question="何时？"
              examples="when...; while...; after..."
              color="#e74c3c"
            />
            <TypeRow
              letter="B"
              type="地点状语"
              question="在哪？"
              examples="where...; wherever..."
              color="#3498db"
            />
            <TypeRow
              letter="C"
              type="原因状语"
              question="为啥？"
              examples="because...; since..."
              color="#e67e22"
            />
            <TypeRow
              letter="D"
              type="条件状语"
              question="什么情况下？"
              examples="if...; unless...; only if..."
              color="#27ae60"
            />
            <TypeRow
              letter="E"
              type="目的状语"
              question="为了什么？"
              examples="so that...; in order to..."
              color="#9b59b6"
            />
            <TypeRow
              letter="F"
              type="结果状语"
              question="导致了啥？"
              examples="so...that...; such...that..."
              color="#1abc9c"
            />
            <TypeRow
              letter="G"
              type="让步状语"
              question="转折前奏"
              examples="although...; even though..."
              color="#f39c12"
            />
            <TypeRow
              letter="H"
              type="方式状语"
              question="怎么做的？"
              examples="by...; through...; as if..."
              color="#34495e"
            />
          </div>
        </Section>

        {/* 小贴士 */}
        <div className="mt-3 bg-[#fef9e7] border border-[#d4a017] rounded-lg p-3">
          <div className="flex items-start gap-2">
            <span className="text-[#d4a017]">💡</span>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-[#d4a017]">记忆技巧：</span>
              状语回答 "何时、何地、为何、如何" 等问题，修饰动词、形容词或整个句子
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">9</div>
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

function TypeRow({ letter, type, question, examples, color }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded px-2 py-1.5">
      <span
        className="w-5 h-5 text-white text-xs font-bold rounded flex items-center justify-center shrink-0"
        style={{ backgroundColor: color }}
      >
        {letter}
      </span>
      <span className="font-bold w-16 shrink-0" style={{ color }}>{type}</span>
      <span className="text-gray-500 w-20 shrink-0">{question}</span>
      <span className="text-gray-400 font-mono text-xs truncate">{examples}</span>
    </div>
  )
}

Page9.displayName = 'Page9'
export default Page9
