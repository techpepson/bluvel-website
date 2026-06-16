import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypewriterTextProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypewriterText({
  words,
  className,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1800,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    const currentWord = words[currentWordIndex]

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        const typingTimeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(typingTimeout)
      } else {
        setIsPaused(true)
      }
    } else {
      if (currentText.length > 0) {
        const deletingTimeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(deletingTimeout)
      } else {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={cn("", className)}>
      {currentText}
      <span className="inline-block w-0.5 h-[0.9em] bg-primary ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
    </span>
  )
}
