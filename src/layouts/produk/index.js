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

// import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

function Notifications() {
  // const [successSB, setSuccessSB] = useState(false);
  // const [infoSB, setInfoSB] = useState(false);
  // const [warningSB, setWarningSB] = useState(false);
  // const [errorSB, setErrorSB] = useState(false);

  // const closeSuccessSB = () => setSuccessSB(false);

  // const closeInfoSB = () => setInfoSB(false);

  // const closeWarningSB = () => setWarningSB(false);

  // const closeErrorSB = () => setErrorSB(false);

  // const renderSuccessSB = (
  //   <MDSnackbar
  //     color="success"
  //     icon="check"
  //     title="Material Dashboard"
  //     content="Hello, world! This is a notification message"
  //     dateTime="11 mins ago"
  //     open={successSB}
  //     onClose={closeSuccessSB}
  //     close={closeSuccessSB}
  //     bgWhite
  //   />
  // );

  // const renderInfoSB = (
  //   <MDSnackbar
  //     icon="notifications"
  //     title="Material Dashboard"
  //     content="Hello, world! This is a notification message"
  //     dateTime="11 mins ago"
  //     open={infoSB}
  //     onClose={closeInfoSB}
  //     close={closeInfoSB}
  //   />
  // );

  // const renderWarningSB = (
  //   <MDSnackbar
  //     color="warning"
  //     icon="star"
  //     title="Material Dashboard"
  //     content="Hello, world! This is a notification message"
  //     dateTime="11 mins ago"
  //     open={warningSB}
  //     onClose={closeWarningSB}
  //     close={closeWarningSB}
  //     bgWhite
  //   />
  // );

  // const renderErrorSB = (
  //   <MDSnackbar
  //     color="error"
  //     icon="warning"
  //     title="Material Dashboard"
  //     content="Hello, world! This is a notification message"
  //     dateTime="11 mins ago"
  //     open={errorSB}
  //     onClose={closeErrorSB}
  //     close={closeErrorSB}
  //     bgWhite
  //   />
  // );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3} sx={{ display: "grid", justifyItems: "center" }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} marginTop="12px" marginBottom="12px">
                <MDTypography variant="h5" marginBottom="15px">
                  Judul Produk
                </MDTypography>
                <MDInput type="text" label="Judul" sx={{ width: "240px" }} />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} marginTop="12px" marginBottom="12px">
                <MDTypography variant="h5" marginBottom="15px">
                  Link Alamat Produk
                </MDTypography>
                <MDInput type="url" label="URL" sx={{ width: "240px" }} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
        <MDButton variant="gradient" color="dark" sx={{ marginTop: "25px", width: "45%" }}>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;Tambah Layanan Baru
        </MDButton>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Notifications;
