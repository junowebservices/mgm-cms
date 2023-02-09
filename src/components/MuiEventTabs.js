import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledTabs = styled(Tabs)({
  //   "& .MuiTabs-indicator": {
  //     backgroundColor: "#f2c09e",
  //   },
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(0),
    border: "1px solid #e0630e",
    color: "#e0630e",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#e0630e",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#fff",
      backgroundColor: "#e0630e",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

export default function MuiEventTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <StyledTab label="Item One" {...a11yProps(0)} />
          <StyledTab label="Item Two" {...a11yProps(1)} />
          <StyledTab label="Item Three" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      <div className="border-4 border-mainOrange">
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    </Box>
  );
}

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import TabPanel from "@mui/lab/TabPanel";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const AntTabs = styled(Tabs)({
//   borderBottom: "1px solid #e8e8e8",
//   "& .MuiTabs-indicator": {
//     backgroundColor: "#1890ff",
//   },
// });

// const AntTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: "none",
//     minWidth: 0,
//     [theme.breakpoints.up("sm")]: {
//       minWidth: 0,
//     },
//     fontWeight: theme.typography.fontWeightRegular,
//     marginRight: theme.spacing(1),
//     color: "rgba(0, 0, 0, 0.85)",
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//     "&:hover": {
//       color: "#40a9ff",
//       opacity: 1,
//     },
//     "&.Mui-selected": {
//       color: "#1890ff",
//       fontWeight: theme.typography.fontWeightMedium,
//     },
//     "&.Mui-focusVisible": {
//       backgroundColor: "#d1eaff",
//     },
//   })
// );

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   "& .MuiTabs-indicator": {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//   },
//   "& .MuiTabs-indicatorSpan": {
//     display: "none",
//   },
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: "none",
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: "#e0630e",
//     border: 2,
//     borderColor: "#e0630e",
//     "&.Mui-selected": {
//       color: "#fff",
//       backgroundColor: "#e0630e",
//     },
//     "&.Mui-focusVisible": {
//       backgroundColor: "#000",
//     },
//   })
// );

// export default function MuiEventTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box>
//         <StyledTabs
//           value={value}
//           onChange={handleChange}
//           aria-label="styled tabs example"
//         >
//           <StyledTab label="Workflows" />
//           <StyledTab label="Datasets" />
//           <StyledTab label="Connections" />
//         </StyledTabs>
//         <Box sx={{ p: 3 }} />
//       </Box>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </Box>
//   );
// }
