import { extendTheme } from '@chakra-ui/react'
import "@fontsource/viga"
import "@fontsource/righteous"

const theme = extendTheme({
    fonts: {
        heading: 'Righteous',
        body: 'viga'
    },
})



export default theme