import { useRef, useState, useCallback, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import CoverPage from './components/pages/CoverPage'
import TableOfContents from './components/pages/TableOfContents'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'
import Page4 from './components/pages/Page4'
import Page5 from './components/pages/Page5'
import Page6 from './components/pages/Page6'
import Page7 from './components/pages/Page7'
import Page8 from './components/pages/Page8'
import Page9 from './components/pages/Page9'
import Page10 from './components/pages/Page10'
import Page11 from './components/pages/Page11'
import Page12 from './components/pages/Page12'
import Page13 from './components/pages/Page13'
import Page14 from './components/pages/Page14'
import Page15 from './components/pages/Page15'
import Page16 from './components/pages/Page16'
import Page17 from './components/pages/Page17'
import Page18 from './components/pages/Page18'
import BackCover from './components/pages/BackCover'

function App() {
  const bookRef = useRef()
  const [pageInfo, setPageInfo] = useState('封面')
  const totalPages = 21

  const onFlip = useCallback((e) => {
    const page = e.data
    if (page === 0) {
      setPageInfo('封面')
    } else if (page === 1) {
      setPageInfo('目录')
    } else if (page === totalPages - 1) {
      setPageInfo('封底')
    } else {
      setPageInfo(`第 ${page - 1} 页`)
    }
  }, [])

  const goToPrev = () => {
    bookRef.current?.pageFlip()?.flipPrev()
  }

  const goToNext = () => {
    bookRef.current?.pageFlip()?.flipNext()
  }

  const goToPage = useCallback((pageNum) => {
    bookRef.current?.pageFlip()?.flip(pageNum)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <div className="flex items-center justify-center gap-3 mb-6">
        <h1 className="text-white font-serif text-3xl font-bold drop-shadow-lg">
          95% 英语语法笔记
        </h1>
        <a
          href="https://github.com/chihyungchang/95PercentEnglishGrammar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors"
          title="GitHub"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>

      <HTMLFlipBook
        ref={bookRef}
        width={700}
        height={950}
        size="fixed"
        minWidth={650}
        maxWidth={700}
        minHeight={950}
        maxHeight={950}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onFlip}
        flippingTime={600}
        usePortrait={false}
        startPage={0}
        drawShadow={true}
        maxShadowOpacity={0.3}
      >
        {/* 第1张纸：封面(正面) + 目录(背面) */}
        <CoverPage />
        <TableOfContents onPageClick={goToPage} />
        {/* 第2张纸：第1页(正面) + 第2页(背面) */}
        <Page1 />
        <Page2 />
        {/* 第3张纸：第3页(正面) + 第4页(背面) */}
        <Page3 />
        <Page4 />
        {/* 第4张纸：第5页(正面) + 第6页(背面) */}
        <Page5 />
        <Page6 />
        {/* 第5张纸：第7页(正面) + 第8页(背面) */}
        <Page7 />
        <Page8 />
        {/* 第6张纸：第9页(正面) + 第10页(背面) */}
        <Page9 />
        <Page10 />
        {/* 第7张纸：第11页(正面) + 第12页(背面) */}
        <Page11 />
        <Page12 />
        {/* 第8张纸：第13页(正面) + 第14页(背面) */}
        <Page13 />
        <Page14 />
        {/* 第9张纸：第15页(正面) + 第16页(背面) */}
        <Page15 />
        <Page16 />
        {/* 第10张纸：第17页(正面) + 第18页(背面) */}
        <Page17 />
        <Page18 />
        {/* 封底 */}
        <BackCover />
      </HTMLFlipBook>

      <div className="flex justify-center gap-4 mt-6 items-center">
        <button
          onClick={goToPrev}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/95 rounded-full font-sans text-sm font-medium text-ink shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          上一页
        </button>
        <span className="text-white/80 font-mono text-sm min-w-[80px] text-center">
          {pageInfo}
        </span>
        <button
          onClick={goToNext}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/95 rounded-full font-sans text-sm font-medium text-ink shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all"
        >
          下一页
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <div className="text-center text-white/60 text-xs mt-4">
        按 <span className="bg-white/15 px-2 py-0.5 rounded font-mono">←</span>{' '}
        <span className="bg-white/15 px-2 py-0.5 rounded font-mono">→</span> 翻页，或直接拖动页角
      </div>
    </>
  )
}

export default App
