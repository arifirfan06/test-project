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
import React, { useEffect, useState } from "react";
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
import { useContext } from "react";
import { AuthContext } from "context/Auth";
import { useNavigate } from "react-router-dom";
import DataTable from "examples/Tables/DataTable";

// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";
import axios from "axios";
// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const [age, setAge] = useState("");
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate()
  {!isLogin && navigate('/authentication/sign-in')}

  useEffect( () => {
     dataFetch()
  }, [])

  const [dataKlien, setData] = useState([]);
  const [isShowed, setView] = useState(true);
  const [viewCreate, setCreate] = useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dataFetch = async () => {
    const data = await axios('https://a25muet3l2.execute-api.ap-southeast-1.amazonaws.com/default/adminwebtem_project', 
    {headers: {auth : localStorage.getItem('auth')}})
    // console.log(data)
    setData(data.data.data)
  }
  const dataRefetch = () => {
    setView(c => !c)
    dataFetch()
  }
  const deleteHandler = async (row) => {
    console.log(row);
    await axios
      .delete(
        `https://a25muet3l2.execute-api.ap-southeast-1.amazonaws.com/default/adminwebtem_project?id=${row.id}`,
        {
          headers: { auth: localStorage.getItem("auth") },
        }
      )
      .then((res) => console.log(res));
      dataFetch()
    }
  // console.log(dataKlien)
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {viewCreate && <MDBox pt={6} pb={3}>
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
                    sx={{ width: "150px" }}
                    startIcon={<PhotoCamera />}
                  >
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </MDButton>
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Project manager :
                  </MDTypography>
                  <MDInput type="text" label="Nama" sx={{ width: "200px" }} size="small"/>
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Project date :
                  </MDTypography>
                  <MDInput type="date" sx={{ width: "200px" }} size="small"/>
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Project type :
                  </MDTypography>
                  <MDInput type="text" label="Project Type" sx={{ width: "200px" }} size="small"/>
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Deskripsi :
                  </MDTypography>
                  <MDInput
                    label="Type here..."
                    multiline
                    rows={6}
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    size="small"
                  />
                  <MDButton
                    variant="gradient"
                    color="dark"
                    sx={{ marginTop: "30px", width: "200px", alignItems: "center" }}
                  >
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;Tambah Klien Baru
                  </MDButton>
                </Stack>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>}
      <MDBox sx={{textAlign: 'center'}}>
      <MDButton
          variant="gradient"
          color="dark"
          sx={{ marginTop: "15px", width: "45%"}}
          onClick={() => setCreate(c => !c)}
        >
          <Icon>{viewCreate ? "back" : "add"}</Icon> 
          {viewCreate ? "Back" : "Create"}
        </MDButton>
      </MDBox>
      <MDBox sx={{textAlign: 'center'}}>
        <MDButton
          variant="gradient"
          color="dark"
          sx={{ marginTop: "15px", width: "45%"}}
          onClick={dataRefetch}
        >
          <Icon>refresh</Icon> 
          {isShowed ? "Hide Data" : "Show Data"}
        </MDButton>
          <Grid mt={6} xs={12} item sx={{maxWidth: '100vw', textAlign: 'center'}}>
          {isShowed && (
            <DataTable
              maxWidth={'100vw'}
              table={{
                columns: [
                  { Header: "Id", accessor: "id", width: "5%" },
                  { Header: "Logo Klien", accessor: "logo_klien", width: "20%" },
                  { Header: "Nama Project Manager", accessor: "nama_project_manager", width: "15%" },
                  { Header: "Project Date", accessor: "project_date", width: "10%" },
                  { Header: "Project Type", accessor: "project_type", width: "10%" },
                  { Header: "Content Project", accessor: "content_project", width: "30%" },
                  { Header: "Gambar", align: "center", accessor: (origRow, rowIndex) => {return (
                    <MDButton onClick={() => viewHandler(origRow)}>View</MDButton>
                  )} },
                  { Header: "action", align: "center", accessor: (origRow, rowIndex) => {return (
                    <MDButton onClick={() => deleteHandler(origRow)}>Delete</MDButton>
                  )} },
                ],
                rows: dataKlien,
              }}
            />
          )}
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
