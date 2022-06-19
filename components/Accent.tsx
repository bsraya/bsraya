import { IconButton } from "@chakra-ui/react"
import { useCallback, useState } from "react"
// create an element that changes color whenever pressed
export default function AccentPicker(): JSX.Element {
  const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']
  const [accentColor, setAccentColor] = useState(colors[0])
  
  const handleClick = useCallback(() => {
    const index = colors.indexOf(accentColor)
    const nextIndex = index + 1 === colors.length ? 0 : index + 1
    setAccentColor(colors[nextIndex])
  } , [accentColor, colors])

  return (
    <>
      <IconButton
        aria-label="Accent color"
        isRound
        icon={
          <svg viewBox="0 0 24 24" width={20} height={20} fill={accentColor}>
            <circle cx="12" cy="12" r="10" />
          </svg>
        }
        onMouseDown={handleClick}
      />
    </>
  )
}