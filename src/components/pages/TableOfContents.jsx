import { forwardRef } from 'react'

const TableOfContents = forwardRef(({ onPageClick }, ref) => {
  const chapters = [
    { page: 2, num: '一', title: '英文句子结构分类', desc: '简单句、并列句、复合句' },
    { page: 3, num: '二', title: '简单句的基本句型', desc: '主谓宾、主谓、主系表' },
    { page: 4, num: '三', title: '简单句的更多句型', desc: '主谓宾宾、主谓宾补、There be' },
    { page: 5, num: '四', title: '从句详解', desc: '名词性从句概述' },
    { page: 6, num: '', title: '├ 从句的降级原理', desc: '主语从句、宾语从句' },
    { page: 7, num: '', title: '└ 表语从句与同位语从句', desc: '同位语概念详解' },
    { page: 8, num: '五', title: '定语从句', desc: '定语概念、类型、位置' },
    { page: 9, num: '', title: '└ 定语从句详解', desc: '不定式短语、定语从句、综合例句' },
    { page: 10, num: '六', title: '状语从句', desc: '状语概念、八种分类' },
    { page: 11, num: '', title: '├ 状语从句详解', desc: '副词位置、原因状语从句' },
    { page: 12, num: '', title: '├ 更多状语从句', desc: '条件、目的、结果、让步' },
    { page: 13, num: '', title: '└ 方式状语从句', desc: '方式、时间/地点从句例句' },
    { page: 14, num: '七', title: '三个特殊句式', desc: '强调句' },
    { page: 15, num: '', title: '├ 倒装句', desc: '句序倒置、强调语气' },
    { page: 16, num: '', title: '└ 虚拟语气', desc: '假设不可能发生的事' },
  ]

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
        <div className="text-center mb-6 pb-3 border-b-2 border-[#1a1a2e]">
          <h2 className="font-serif text-2xl font-black text-[#1a1a2e]">目 录</h2>
          <p className="text-sm text-gray-500 mt-1">Table of Contents</p>
        </div>

        {/* Chapter list */}
        <div className="space-y-2">
          {chapters.map((chapter, index) => (
            <button
              key={index}
              onClick={() => onPageClick?.(chapter.page)}
              className="w-full text-left group"
            >
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-[#2d5aa0] hover:bg-[#e8f0fe]/30 transition-all cursor-pointer">
                {chapter.num ? (
                  <span className="w-8 h-8 bg-[#2d5aa0] text-white text-sm font-serif font-bold rounded-full flex items-center justify-center flex-shrink-0">
                    {chapter.num}
                  </span>
                ) : (
                  <span className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-gray-300">

                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-serif font-bold text-[#1a1a2e] group-hover:text-[#2d5aa0] transition-colors">
                    {chapter.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{chapter.desc}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono">P.{chapter.page - 1}</span>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#2d5aa0] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Tip */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            点击章节标题可直接跳转
          </p>
        </div>

        <div className="absolute bottom-4 right-6 font-mono text-xs text-gray-400">目录</div>
      </div>
    </div>
  )
})

TableOfContents.displayName = 'TableOfContents'
export default TableOfContents
