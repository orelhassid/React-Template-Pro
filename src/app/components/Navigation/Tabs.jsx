import React from "react";
import PropTypes from "prop-types";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";
import useDevice from "../../hooks/useDevice";
import { useParams } from "react-router";

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
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs({ tabs }) {
  const { isMobile } = useDevice();
  const { tab: tabName } = useParams();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    tabs.forEach((tab, index) => tab.slug === tabName && setValue(index));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square elevation={0}>
      <Tabs
        value={value}
        variant={isMobile ? "fullWidth" : "standard"}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        {tabs.map(({ label, panel }, index) => (
          <Tab key={label} label={label} {...a11yProps(index)} />
        ))}
      </Tabs>
      {tabs.map(({ label, panel }, index) => (
        <TabPanel key={label} value={value} index={index}>
          {panel}
        </TabPanel>
      ))}
    </Paper>
  );
}

SimpleTabs.defaultProps = {
  tabs: [
    {
      label: "Item One",
      value: "one",
    },
  ],
};
