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
import React, { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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

// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
                  Input Klien
                </MDTypography>
              </MDBox>
              <MDBox pt={3} mx={2}>
                <Stack direction="row" alignItems="" flexDirection="column" mb="20px">
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Unggah logo perusahaan :
                  </MDTypography>
                  <MDButton
                    variant="contained"
                    component="label"
                    color="dark"
                    sx={{ width: '150px' }}
                    startIcon={<PhotoCamera />}
                  >
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </MDButton>
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Project manager :
                  </MDTypography>
                  <MDInput type="text" label="Nama" sx={{ width: "200px" }} />
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Project date :
                  </MDTypography>
                  <MDInput type="date" sx={{ width: "200px" }} />
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Project type :
                  </MDTypography>

                  <FormControl sx={{ m: 1, mx:0, my:0, minWidth: 160, height: "40px", width: '200px' }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Pilih Kategori</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Pilih Kategori"
                      sx={{ height: "42px" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Training">ERP</MenuItem>
                      <MenuItem value="Vacation">Application</MenuItem>
                      <MenuItem value="Fellowship">Travel</MenuItem>
                      <MenuItem value="Lain-lain">Lain-lain</MenuItem>
                    </Select>
                  </FormControl>
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Deskripsi :
                  </MDTypography>
                  <MDInput
                    label="Type here..."
                    multiline
                    rows={6}
                    sx={{
                      width: 500,
                      maxWidth: '100%'
                    }}
                  />
                  <MDButton variant="gradient" color="dark" sx={{ marginTop: "30px", width: '200px', alignItems: 'center'}}>
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;Tambah Galeri Baru
                  </MDButton>
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

export default Tables;
