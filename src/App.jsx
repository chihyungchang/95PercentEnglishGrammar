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
import BackCover from './components/pages/BackCover'

function App() {
  const bookRef = useRef()
  const [pageInfo, setPageInfo] = useState('封面')
  const totalPages = 10

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
      <h1 className="text-white font-serif text-3xl font-bold mb-6 drop-shadow-lg">
        95% 英语语法笔记
      </h1>

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
        {/* 第5张纸：第7页(正面) + 封底(背面) */}
        <Page7 />
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
