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
import React, { useState, useEffect } from "react";
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
import DataTable from "examples/Tables/DataTable";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useContext } from "react";
import { AuthContext } from "context/Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";
import Editor from '../../examples/Custom Editor/index'

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate()
  {!isLogin && navigate('/authentication/sign-in')}
  const [dataBlog, setData] = useState([]);
  const [isShowed, setView] = useState(true);
  const [viewCreate, setCreate] = useState(false);

  useEffect(() => {
    dataFetch()
  }, [])

  const dataFetch = async () => {
    const data = await axios('https://a25muet3l2.execute-api.ap-southeast-1.amazonaws.com/default/adminwebtem_blog',{
      headers: {auth: localStorage.getItem('auth')}
    } )
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
        `https://a25muet3l2.execute-api.ap-southeast-1.amazonaws.com/default/adminwebtem_blog?id=${row.id}`,
        {
          headers: { auth: localStorage.getItem("auth") },
        }
      )
      .then((res) => console.log(res));
      dataFetch()
    }
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
                  Blog
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <Stack direction="row" alignItems="center" flexDirection="column" mb="20px">
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Judul :
                  </MDTypography>
                  <MDInput type="text" label="Nama" sx={{ width: "200px" }} />
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Unggah foto :
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
                  <MDTypography variant="h6" fontWeight="medium" margin="12px">
                    Deskripsi :
                  </MDTypography>
                  {/* <MDInput
                    label="Type here..."
                    multiline
                    rows={6}
                    sx={{
                      width: '500px',
                      maxWidth: '95%'
                    }}
                  /> */}
                  <Editor></Editor>
                  <MDButton variant="gradient" color="dark" sx={{ marginTop: "30px" }}>
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;Tambah Artikel Baru
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
                  { Header: "Judul", accessor: "judul", width: "10%" },
                  { Header: "Gambar", accessor: "gambar", width: "20%" },
                  { Header: "Deskripsi", accessor: "content", width: "30%" },
                  { Header: "Gambar", align: "center", accessor: (origRow, rowIndex) => {return (
                    <MDButton onClick={() => viewHandler(origRow)}>View</MDButton>
                  )} },
                  { Header: "action", align: "center", accessor: (origRow, rowIndex) => {return (
                    <MDButton onClick={() => deleteHandler(origRow)}>Delete</MDButton>
                  )} },
                ],
                rows: dataBlog,
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
