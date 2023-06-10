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
import DataTable from "examples/Tables/DataTable";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "context/Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { maxWidth, width } from "@mui/system";
// import { DataGrid } from '@mui/x-data-grid';
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

  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  {
    !isLogin && navigate("/authentication/sign-in");
  }
  const [isShowed, setView] = useState(true);
  const [dataProduk, setData] = useState([]);
  const [viewCreate, setCreate] = useState(false);

  useEffect( async () => {
    const data = await axios(
      "https://a25muet3l2.execute-api.ap-southeast-1.amazonaws.com/default/adminwebtem_produk",
      {
        headers: { auth: localStorage.getItem("auth") },
      }
    );
    console.log(data)
    setData(data.data.data)
  }, []);

  const dataFetch = async () => {
    setView((current) => !current);
    await axios
      .get(
        "https://a25muet3l2.execute-api.ap-southeast-1.amazonaws.com/default/adminwebtem_produk",
        {
          headers: { auth: localStorage.getItem("auth") },
        }
      )
      .then((res) => setData(res.data.data));
  };
  // console.log(dataProduk);
  // const viewHandler = () => {
  //   dataFetch();
  // };
  const inputJudul = useRef();
  const inputLink = useRef();
  const dataPost = async () => {
    await fetch(
      "https://a25muet3l2.execute-api.ap-southeast-1.amazonaws.com/default/adminwebtem_produk",
      {
        method: "POST",
        headers: {
          auth: localStorage.getItem("auth"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          judul_produk: inputJudul.current.value,
          link_produk: inputLink.current.value,
        }),
      }
    );
    // dataReFetch()
  };
  const deleteHandler = async (row) => {
    console.log(row);
    await axios
      .delete(
        `https://a25muet3l2.execute-api.ap-southeast-1.amazonaws.com/default/adminwebtem_produk?id=${row.id}`,
        {
          headers: { auth: localStorage.getItem("auth") },
        }
      )
      .then((res) => console.log(res));
    // await fetch(`https://7vv6wlcft7.execute-api.ap-southeast-1.amazonaws.com/default/adminwebtem_produk?id=${row.id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     auth: 'admin',
    //   },
    // })
    // dataReFetch();
  };
  const dataReFetch = async () => {
    setView((current) => !current);
    await axios
      .get(
        "https://a25muet3l2.execute-api.ap-southeast-1.amazonaws.com/default/adminwebtem_produk",
        {
          headers: { auth: localStorage.getItem("auth") },
        }
      )
      .then((res) => setData(res.data.data));
    setView((current) => !current);
  };
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3} padding={0} sx={{ display: "grid", justifyItems: "center" }}>
        {viewCreate && (
          <>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} lg={8}>
                <Card>
                  <MDBox p={2} marginTop="12px" marginBottom="12px">
                    <MDTypography variant="h5" marginBottom="15px">
                      Judul Produk
                    </MDTypography>
                    <MDInput
                      type="text"
                      label="Judul"
                      sx={{ width: "240px" }}
                      inputRef={inputJudul}
                    />
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={8}>
                <Card>
                  <MDBox p={2} marginTop="12px" marginBottom="12px">
                    <MDTypography variant="h5" marginBottom="15px">
                      Link Alamat Produk
                    </MDTypography>
                    <MDInput type="url" label="URL dengan http:// atau https://" sx={{ width: "240px" }} inputRef={inputLink} />
                  </MDBox>
                </Card>
              </Grid>
            </Grid>
            <MDButton
              variant="gradient"
              color="dark"
              sx={{ marginTop: "25px", width: "45%" }}
              onClick={dataPost}
            >
              <Icon sx={{ fontWeight: "bold" }}>add</Icon>
              &nbsp;Tambah Produk Baru
            </MDButton>
          </>
        )}
        <MDButton
          variant="gradient"
          color="dark"
          sx={{ marginTop: "15px", width: "45%" }}
          onClick={() => setCreate((c) => !c)}
        >
          <Icon>{viewCreate ? "back" : "add"}</Icon>
          {viewCreate ? "Back" : "Create"}
        </MDButton>
        <MDButton
          variant="gradient"
          color="dark"
          sx={{ marginTop: "25px", width: "45%" }}
          onClick={dataFetch}
        >
          <Icon sx={{ fontWeight: "bold" }}>view</Icon>
          {isShowed ? "Hide Data" : "Show Data"}
        </MDButton>
        <Grid mt={6} xs={12} item sx={{ maxWidth: "100vw", textAlign: 'center' }}>
          {isShowed && (
            <DataTable
              maxWidth={"100vw"}
              table={{
                columns: [
                  // { Header: "Id", accessor: "id", width: "25%" },
                  { Header: "Judul Produk", accessor: "judul_produk", width: "30%" },
                  { Header: "Link Produk", accessor: "link_produk" },
                  {
                    Header: "Link Produk",
                    align: "center",
                    accessor: (origRow, rowIndex) => {
                      return <MDButton onClick={() => {window.open(origRow.link_produk)}}>View</MDButton>;
                    },
                  },
                  {
                    Header: "action",
                    align: "center",
                    accessor: (origRow, rowIndex) => {
                      return <MDButton onClick={() => deleteHandler(origRow)}>Delete</MDButton>;
                    },
                  },
                ],
                rows: dataProduk,
              }}
            />
          )}
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Notifications;
