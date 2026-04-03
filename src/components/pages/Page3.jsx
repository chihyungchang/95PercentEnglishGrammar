import { forwardRef } from 'react'

const Page3 = forwardRef((_, ref) => {
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
          <span className="inline-block bg-[#1a1a2e] text-[#fdfcf8] px-3 py-1 rounded text-xs tracking-widest mb-1.5">
            三
          </span>
          <h2 className="font-serif text-xl font-black">简单句的更多句型</h2>
          <p className="text-sm text-gray-500 mt-1">主谓宾的其他兄弟们</p>
        </div>

        {/* 主谓宾宾 */}
        <Section num={4} title="主谓宾宾" en="S + V + O + O">
          <div className="bg-gray-50/90 border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold">
              <S>主语</S><Plus /><V>谓语</V><Plus /><O>宾语</O><Plus /><O>宾语</O>
            </div>
            <div className="flex justify-center gap-8 mt-2 text-xs text-gray-500">
              <span className="bg-[#e8f0fe] px-2 py-0.5 rounded">[对象]</span>
              <span className="bg-[#e8f0fe] px-2 py-0.5 rounded">[内容]</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <ExampleCard
              en={<><S>I</S> <V>give</V> <O>you</O> <O>money</O>.</>}
              zh="我给你钱"
              notes={['给', '给谁?', '给啥?']}
            />
            <ExampleCard
              en={<><S>I</S> <V>tell</V> <O>you</O> <O>a story</O>.</>}
              zh="我给你讲故事"
              notes={['讲', '给谁讲?', '讲什么?']}
            />
          </div>
        </Section>

        {/* 主谓宾补 */}
        <Section num={5} title="主谓宾补" en="S + V + O + C">
          <div className="bg-gray-50/90 border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold">
              <S>主语</S><Plus /><V>谓语</V><Plus /><O>宾语</O><Plus /><C>补语</C>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              <span className="bg-gray-100 px-2 py-1 rounded">结构完整，但意思不完整 → 补充说明意思</span>
            </p>
          </div>
          <div className="bg-[#f5eef8] border border-[#8e44ad] rounded-lg p-3 mt-2">
            <p className="text-xs font-semibold text-[#8e44ad] mb-2">补语可以是：</p>
            <div className="flex gap-3">
              <span className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">
                ① 形容词 <span className="font-mono text-gray-400">adj.</span>
              </span>
              <span className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">
                ② 不定式 <span className="font-mono text-gray-400">to do</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <ExampleCard
              en={<>The music <V>makes</V> <O>me</O> <C>sad</C>.</>}
              zh="音乐使我难过"
              highlight="sad"
              highlightType="adj"
            />
            <ExampleCard
              en={<><S>He</S> <V>tells</V> <O>me</O> <C>to go</C>.</>}
              zh="他叫我走"
              highlight="to go"
              highlightType="todo"
            />
          </div>
        </Section>

        {/* There be 句型 */}
        <Section num={6} title="There be 句型" en="表达「存在」">
          <div className="bg-gray-50/90 border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-center gap-2 text-base font-semibold">
              <span className="text-[#8e44ad] font-bold">There</span>
              <span className="text-[#1e8449] font-bold">be</span>
              <Plus />
              <span className="text-[#2d5aa0] font-bold">名词</span>
              <span className="text-gray-400 text-sm">(+介宾)</span>
            </div>
            <div className="flex justify-center gap-4 mt-2 text-[10px] text-gray-500">
              <span>↓ 存在的东西</span>
              <span>↓ 东西存在的地方</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="font-mono text-sm mb-1">
                <span className="text-[#8e44ad]">There</span> <span className="text-[#1e8449]">is</span> <span className="text-[#2d5aa0]">a dog</span>.
              </p>
              <p className="text-xs text-gray-500">有条狗</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="font-mono text-sm mb-1">
                <span className="text-[#8e44ad]">There</span> <span className="text-[#1e8449]">is</span> <span className="text-[#2d5aa0]">a dog</span> <span className="text-[#d4a017]">under the tree</span>.
              </p>
              <p className="text-xs text-gray-500">那棵树下有条狗</p>
            </div>
          </div>
        </Section>

        <div className="absolute bottom-4 right-6 font-mono text-xs text-gray-400">3</div>
      </div>
    </div>
  )
})

// Helper components
function Section({ num, title, en, children }) {
  return (
    <div className="mb-5">
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

function ExampleCard({ en, zh, notes, highlight, highlightType }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3">
      <p className="font-mono text-sm mb-1">{en}</p>
      <p className="text-xs text-gray-500">{zh}</p>
      {notes && (
        <div className="flex gap-2 mt-2 text-[10px] text-gray-400">
          {notes.map((n, i) => <span key={i}>{n}</span>)}
        </div>
      )}
    </div>
  )
}

// Text style components
const S = ({ children }) => <span className="text-[#c0392b] font-bold">{children}</span>
const V = ({ children }) => <span className="text-[#1e8449] font-bold">{children}</span>
const O = ({ children }) => <span className="text-[#2d5aa0] font-bold">{children}</span>
const C = ({ children }) => <span className="text-[#8e44ad] font-bold">{children}</span>
const Plus = () => <span className="text-gray-400 font-mono text-sm mx-1">+</span>

Page3.displayName = 'Page3'
export default Page3
