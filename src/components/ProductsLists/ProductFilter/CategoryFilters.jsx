import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { productListCategoryMenuApi } from "services/filters.service";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CategoryFilters({ setCurrentLocation }) {
  const [subcategory, setSubcategory] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(event)
    console.log(newValue)
    setValue(newValue);
  };
  useEffect(() => {
    productListCategoryMenuApi(searchParams.toString().split("=")[1]).then(
      (response) => {
        if(response.data.length) setSubcategory(response.data.child_category);
      }
    ).catch(() => {
      setSubcategory([]);
    });
    console.log(location.search.replace('?categories=', ''))
    setValue(location.search.replace('?categories=', ''))
  }, [searchParams.toString()]);
  const outerTheme = createTheme({
    palette: {
      primary: {
        main: '#252525',
      },
    },
  });
  if (subcategory.length > 0) return (
    <ThemeProvider theme={outerTheme}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        textColor="primary"
        selectionFollowsFocus={true}
        allowScrollButtonsMobile={true}
      >
        {
          subcategory.map((item, i) => (
            <Tab
              value={item.slug}
              key={i}
              component={Link}
              to={`/products?categories=${item.slug}`}
              label={item.name === "LAPTOP" ? "All Laptops" : item.name}
            />
          ))
        }
      </Tabs>
    </ThemeProvider>
  )
}

export default CategoryFilters;
