/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import Box from "@mui/material/Box";

import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import Input from '@mui/material/Input';
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useContext } from "react";
import { AuthContext } from "context/Auth";
import { useNavigate } from "react-router-dom";

// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Banner() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate()
  {!isLogin && navigate('/authentication/sign-in')}
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Banner
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <Stack direction="row" alignItems="center" flexDirection="column" mb="20px">
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Unggah Banner :
                  </MDTypography>
                  <MDButton
                    variant="contained"
                    component="label"
                    color="dark"
                    startIcon={<PhotoCamera />}
                  >
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </MDButton>
                  {/* <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Deskripsi :
                  </MDTypography>

                  <MDInput
                    label="Type here..."
                    multiline
                    rows={5}
                    sx={{
                      width: '400px',
                      maxWidth: '95%'
                    }}
                  /> */}

                  <MDButton variant="gradient" color="dark" sx={{ marginTop: "35px" }}>
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;Tambah Banner
                  </MDButton>
                  <MDTypography variant="caption" sx={{ marginTop: "10px" }}>*Rekomendasi rasio gambar banner 16:8</MDTypography>
                </Stack>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Banner;
