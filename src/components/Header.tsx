import { createTheme, ThemeProvider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useColorNavStore } from "@/store/useStore";

const pages = ["Introduce", "Work Experience", "Projects", "Skills", "Contact"];

function Header() {
  const isColorNav = useColorNavStore((state) => state.isColorNav);

  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isColorNav ? "#ffffff" : "#dddddd",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">포트폴리오</Typography>
          <Box className="nav-menu">
            {pages.map((page) => (
              <Button className="nav-menu-button" key={page}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header;
