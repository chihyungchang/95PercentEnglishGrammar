import { forwardRef } from 'react'

const Page2 = forwardRef((_, ref) => {
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
            二
          </span>
          <h2 className="font-serif text-xl font-black">简单句的基本句型</h2>
          <p className="text-sm text-gray-500 mt-1">主谓宾和它的兄弟们</p>
        </div>

        {/* 主谓宾 */}
        <Section num={1} title="主谓宾" en="S + V + O">
          <PatternBox
            formula={<><S>主语</S><Plus /><V>谓语</V><Plus /><O>宾语</O></>}
            example={<><S>I</S> <V>play</V> <O>games</O>.</>}
          />
        </Section>

        {/* 主谓 */}
        <Section num={2} title="主谓" en="S + V">
          <PatternBox
            formula={<><S>主语</S><Plus /><V>谓语</V></>}
            example={<><S>Spring</S> <V>comes</V>.</>}
            note="此动作无承受者，没有宾语"
          />
        </Section>

        {/* 主系表 */}
        <Section num={3} title="主系表" en="S + Link.V + P">
          <PatternBox
            formula={<><S>主语</S><Plus /><Link>系动词</Link><Plus /><Pred>表语</Pred></>}
            example={<><S>She</S> <Link>is</Link> <Pred>beautiful</Pred>.</>}
          />
          <div className="bg-[#fef9e7] border border-[#d4a017] rounded-lg p-3 mt-2">
            <p className="text-xs font-semibold text-[#d4a017] mb-2">表语可以是：</p>
            <div className="flex flex-wrap gap-2">
              {[['名词', 'noun'], ['形容词', 'adj.'], ['不定式', 'to do'], ['介宾', 'prep.+n.']].map(([zh, en]) => (
                <span key={zh} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">
                  {zh} <span className="font-mono text-gray-400">{en}</span>
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* 动词分类与系动词 */}
        <div className="mt-5">
          <h3 className="font-serif text-base font-bold mb-3">动词分类与系动词</h3>
          <div className="flex gap-4">
            {/* Venn Diagram */}
            <div className="relative w-[150px] h-[150px] flex-shrink-0">
              {/* Main circle */}
              <div className="absolute w-[140px] h-[140px] top-0 left-[10px] border-2 border-[#1e8449] rounded-full bg-[#1e8449]/5">
                <span className="absolute top-2 right-8 text-[11px] font-semibold text-[#1e8449]">V 动词</span>
              </div>
              {/* Trans */}
              <div className="absolute w-12 h-12 top-9 left-4 border-2 border-[#2d5aa0] rounded-full bg-[#e8f0fe] flex items-center justify-center">
                <span className="text-[11px] font-semibold text-[#2d5aa0] text-center leading-tight">及物<br/>动词</span>
              </div>
              {/* Intrans */}
              <div className="absolute w-12 h-12 top-9 right-4 border-2 border-[#c0392b] rounded-full bg-[#fdeaea] flex items-center justify-center">
                <span className="text-[11px] font-semibold text-[#c0392b] text-center leading-tight">不及物<br/>动词</span>
              </div>
              {/* Linking */}
              <div className="absolute w-14 h-8 bottom-6 left-1/2 -translate-x-1/2 border-2 border-[#8e44ad] rounded-full bg-[#f5eef8] flex items-center justify-center">
                <span className="text-[11px] font-semibold text-[#8e44ad]">系动词</span>
              </div>
            </div>

            {/* Linking verbs grid */}
            <div className="grid grid-cols-2 gap-2 flex-1">
              <LinkingCard num={1} title="Be 动词" verbs="am, is, are, was, were" />
              <LinkingCard num={2} title="感观动词" verbs="look, sound, smell, taste, feel" />
              <LinkingCard num={3} title="变化动词" verbs="become, turn, go, get, grow" />
              <LinkingCard num={4} title="静止动词" verbs="stay, remain, keep" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-6 font-mono text-xs text-gray-400">2</div>
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

function PatternBox({ formula, example, note }) {
  return (
    <div className="bg-gray-50/90 border border-gray-200 rounded-lg p-3">
      <div className="flex items-center justify-center gap-2 text-lg font-semibold">
        {formula}
      </div>
      <div className="text-center mt-2 pt-2 border-t border-dashed border-gray-200">
        <span className="font-mono text-sm">{example}</span>
      </div>
      {note && <p className="text-xs text-gray-500 text-center mt-1.5 italic">{note}</p>}
    </div>
  )
}

function LinkingCard({ num, title, verbs }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2.5">
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="w-4 h-4 bg-[#8e44ad] text-white text-[9px] font-mono rounded-full flex items-center justify-center">
          {num}
        </span>
        <span className="font-semibold text-sm">{title}</span>
      </div>
      <p className="font-mono text-[13px] text-[#8e44ad]">{verbs}</p>
    </div>
  )
}

// Text style components
const S = ({ children }) => <span className="text-[#c0392b] font-bold">{children}</span>
const V = ({ children }) => <span className="text-[#1e8449] font-bold">{children}</span>
const O = ({ children }) => <span className="text-[#2d5aa0] font-bold">{children}</span>
const Link = ({ children }) => <span className="text-[#8e44ad] font-bold">{children}</span>
const Pred = ({ children }) => <span className="text-[#d4a017] font-bold">{children}</span>
const Plus = () => <span className="text-gray-400 font-mono text-sm mx-1">+</span>

Page2.displayName = 'Page2'
export default Page2
