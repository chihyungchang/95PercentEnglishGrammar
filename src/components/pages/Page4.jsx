import { forwardRef } from 'react'

const Page4 = forwardRef((_, ref) => {
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
        <div className="text-center mb-5 pb-3 border-b-2 border-[#1a1a2e]">
          <span className="inline-block bg-[#1a1a2e] text-[#fdfcf8] px-3 py-1 rounded text-sm tracking-widest mb-1.5">
            四
          </span>
          <h2 className="font-serif text-xl font-black">从句详解</h2>
          <p className="text-base text-gray-500 mt-1">引导词 + 主谓宾（或其五个兄弟）</p>
        </div>

        {/* 名词性从句 */}
        <Section num={1} title="名词性从句" en="Noun Clause">
          <div className="bg-gray-50/90 border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-3">
              <ClauseType num={1} name="主语从句" desc="从句作主语" />
              <ClauseType num={2} name="宾语从句" desc="从句作宾语" />
              <ClauseType num={3} name="表语从句" desc="从句作表语" />
              <ClauseType num={4} name="同位语从句" desc="从句作同位语" />
            </div>
            <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
              <p className="text-sm text-center text-gray-500">
                <span className="bg-[#fef9e7] px-2 py-1 rounded text-[#d4a017]">
                  一模一样的句子，只不过位置不同，所以名称不同
                </span>
              </p>
            </div>
          </div>
        </Section>

        {/* 名词性从句的位置 */}
        <div className="mt-5">
          <h3 className="font-serif text-lg font-bold mb-3">名词性从句的位置</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-100 border-b border-gray-200">
              <div className="p-3 text-center border-r border-gray-200">
                <span className="text-[#c0392b] font-bold">主</span>
                <p className="text-xs text-gray-500 mt-0.5">名词</p>
              </div>
              <div className="p-3 text-center border-r border-gray-200">
                <span className="text-[#1e8449] font-bold">谓</span>
                <p className="text-xs text-gray-500 mt-0.5">及物动词</p>
              </div>
              <div className="p-3 text-center">
                <span className="text-[#2d5aa0] font-bold">宾</span>
                <p className="text-xs text-gray-500 mt-0.5">名词</p>
              </div>
            </div>
            {/* Body */}
            <div className="grid grid-cols-3">
              <div className="p-3 border-r border-gray-200">
                <div className="bg-[#fdeaea] border border-[#c0392b] rounded p-2 text-center">
                  <p className="text-sm font-semibold text-[#c0392b]">名词性从句</p>
                  <p className="text-xs text-gray-500 mt-1">↓</p>
                  <p className="text-sm font-bold text-[#c0392b]">主语从句</p>
                </div>
              </div>
              <div className="p-3 border-r border-gray-200 flex items-center justify-center">
                <span className="text-gray-300 text-2xl">→</span>
              </div>
              <div className="p-3">
                <div className="bg-[#e8f0fe] border border-[#2d5aa0] rounded p-2 text-center">
                  <p className="text-sm font-semibold text-[#2d5aa0]">名词性从句</p>
                  <p className="text-xs text-gray-500 mt-1">↓</p>
                  <p className="text-sm font-bold text-[#2d5aa0]">宾语从句</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 例句 */}
        <div className="mt-5">
          <h3 className="font-serif text-lg font-bold mb-3">从句例句</h3>
          <div className="space-y-2">
            <ExampleSentence
              label="主语从句"
              color="#c0392b"
              en={<><span className="underline decoration-[#c0392b] decoration-2">What he said</span> is true.</>}
              zh="他说的话是真的"
            />
            <ExampleSentence
              label="宾语从句"
              color="#2d5aa0"
              en={<>I know <span className="underline decoration-[#2d5aa0] decoration-2">that he is honest</span>.</>}
              zh="我知道他是诚实的"
            />
            <ExampleSentence
              label="表语从句"
              color="#d4a017"
              en={<>The problem is <span className="underline decoration-[#d4a017] decoration-2">whether we can finish it</span>.</>}
              zh="问题是我们能否完成"
            />
          </div>
        </div>

        <div className="absolute bottom-4 right-6 font-mono text-sm text-gray-400">4</div>
      </div>
    </div>
  )
})

// Helper components
function Section({ num, title, en, children }) {
  return (
    <div className="mb-5">
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

function ClauseType({ num, name, desc }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded p-2">
      <span className="w-5 h-5 bg-[#1e8449] text-white text-xs font-mono rounded-full flex items-center justify-center flex-shrink-0">
        {num}
      </span>
      <div>
        <p className="text-base font-semibold">{name}</p>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </div>
  )
}

function ExampleSentence({ label, color, en, zh }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-start gap-3">
      <span
        className="text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0"
        style={{ backgroundColor: color + '20', color: color }}
      >
        {label}
      </span>
      <div>
        <p className="font-mono text-base">{en}</p>
        <p className="text-sm text-gray-500 mt-0.5">{zh}</p>
      </div>
    </div>
  )
}

Page4.displayName = 'Page4'
export default Page4
