interface ScrollIndicatorProps {
  scrollY: number
}

export default function ScrollIndicator({ scrollY }: ScrollIndicatorProps) {
  const progress = Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <div className="w-1 h-12 bg-border rounded-full overflow-hidden">
        <div className="w-full bg-primary transition-all duration-300" style={{ height: `${progress}%` }} />
      </div>
      <span className="text-xs text-muted-foreground">{Math.round(progress)}%</span>
    </div>
  )
}
