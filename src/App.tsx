// React
import * as React from "react";

// Router
import { Routes, Route, useNavigate } from "react-router-dom";

// MUI
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import CheckIcon from "@mui/icons-material/Check";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import EditIcon from "@mui/icons-material/Edit";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridOnIcon from "@mui/icons-material/GridOn";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import BarChartIcon from "@mui/icons-material/BarChart";

// files
import "./App.css";
import Home from "./pages/Home";
import Buttons from "./pages/Buttons";
import ComboBoxs from "./pages/ComboBoxs";
import CheckBoxs from "./pages/Charts";
import RadioButtons from "./pages/RadioButtons";
import LookupEdits from "./pages/LookupEdits";
import ButtonEdits from "./pages/ButtonEdits";
import Lists from "./pages/Lists";
import Grids from "./pages/Grids";
import PivotGrids from "./pages/PivotGrids";
import Charts from "./pages/Charts";

const drawerWidth = 320;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigation = useNavigate();

  const itemList = [
    {
      icon: <HomeIcon />,
      text: "Home",
      onClick: () => navigation("/"),
    },
    {
      icon: <CheckIcon />,
      text: "Button Component Test",
      onClick: () => navigation("/buttons"),
    },
    {
      icon: <ArrowDropDownCircleIcon />,
      text: "ComboBox Component Test",
      onClick: () => navigation("/combo-boxs"),
    },
    {
      icon: <CheckBoxIcon />,
      text: "CheckBox Component Test",
      onClick: () => navigation("/check-boxs"),
    },
    {
      icon: <RadioButtonCheckedIcon />,
      text: "RadioButton Component Test",
      onClick: () => navigation("/radio-buttons"),
    },
    {
      icon: <EditIcon />,
      text: "LookUp-Edit Component Test",
      onClick: () => navigation("/lookup-edits"),
    },
    {
      icon: <EditIcon />,
      text: "Button-Edit Component Test",
      onClick: () => navigation("/button-edits"),
    },
    {
      icon: <FormatListBulletedIcon />,
      text: "List Component Test",
      onClick: () => navigation("/lists"),
    },
    {
      icon: <GridOnIcon />,
      text: "Grid Component Test",
      onClick: () => navigation("/grids"),
    },
    {
      icon: <PivotTableChartIcon />,
      text: "Pivot Grid Component Test",
      onClick: () => navigation("/pivot-grids"),
    },
    {
      icon: <BarChartIcon />,
      text: "Chart Component Test",
      onClick: () => navigation("/charts"),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {itemList.map((item, index) => {
            const { icon, text, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/buttons" element={<Buttons />}></Route>
          <Route path="/combo-boxs" element={<ComboBoxs />}></Route>
          <Route path="/check-boxs" element={<CheckBoxs />}></Route>
          <Route path="/radio-buttons" element={<RadioButtons />}></Route>
          <Route path="/lookup-edits" element={<LookupEdits />}></Route>
          <Route path="/button-edits" element={<ButtonEdits />}></Route>
          <Route path="/lists" element={<Lists />}></Route>
          <Route path="/grids" element={<Grids />}></Route>
          <Route path="/pivot-grids" element={<PivotGrids />}></Route>
          <Route path="/charts" element={<Charts />}></Route>
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
