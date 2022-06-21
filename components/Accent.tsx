import { IconButton, Icon } from "@chakra-ui/react"
import { Color } from "../utils/color"

// create an element that changes color whenever pressed
export default function AccentPicker(): JSX.Element {
  return (
    <IconButton
      aria-label="Accent color"
      isRound
      icon={
        <Icon viewBox='0 0 200 200' color='accent.3'>
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
      }
    />
  )
}