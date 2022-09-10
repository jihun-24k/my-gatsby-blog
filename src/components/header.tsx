/** @jsx jsx */
import { jsx, useColorMode, Flex } from "theme-ui"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"
import HeaderTitle from "./header-title"
import HeaderExternalLinks from "./header-external-links"

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{
      position: "sticky", top: 0, opacity: 0.7, backdropFilter: "blur(30px)", margin: "0px auto",
      pt: "30px", width: "100%", maxWidth: 1100,
    }}>
      <Flex sx={{ alignItems: `center`, gap: "16px", }}>
        <HeaderTitle />
        <Navigation nav={nav} />
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div
        sx={{
          // boxSizing: `border-box`,
          // display: `flex`,
          // variant: `dividers.bottom`,
          // alignItems: `center`,
          // justifyContent: `space-between`,
          // color: `secondary`,
          // a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `nowrap`,
        }}
      >
      </div>
    </header>
  )
}

export default Header
