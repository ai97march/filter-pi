import React from "react";
import {
  Button,
  Card,
  CardContent,
  colors,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const MaterialTypeMaster = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8} padding={1}>
          <Card elevation={5}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={1}
              padding={1}
            >
              <Grid item xs={12} padding={2}>
                <Typography variant="h5" textAlign="center">
                  Material Type Master
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6">Material Type Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Material Name"
                  // value={elem.value ? elem.value : ""}
                  defaultValue="Material Name"
                  // onChange={onTextChange}
                  // onBlur={() => onCellValueChange(col)}
                  type="text"
                  // disabled={disabled}
                  // required={required}
                />
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6">Material Type Code</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Material Type Code"
                  // value={elem.value ? elem.value : ""}
                  defaultValue="Material Type Code"
                  // onChange={onTextChange}
                  // onBlur={() => onCellValueChange(col)}
                  type="text"
                  // disabled={disabled}
                  // required={required}
                />
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6">GRN Level Entry</Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="10"
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6">Consumption Level Entry</Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="10"
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6">Unit of Measurement</Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="10"
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6">
                  Std. Quantity Availablity at GRN
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="10"
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                item
                xs={12}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  paddingTop: "1rem",
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<SaveAsIcon />}
                  // onClick={(e) =>
                  //   handleButtonClick(
                  //     e,
                  //     elem,
                  //     gridDataTest,
                  //     setGridDataTest,
                  //     pollObj,
                  //     setPollObj
                  //   )
                  // }
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} spacing={0.5}>
          <Card elevation={5}>
            <DataTable
              value={customers}
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column
                field="name"
                header="Name"
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="country.name"
                header="Country"
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="company"
                header="Company"
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="representative.name"
                header="Representative"
                style={{ width: "25%" }}
              ></Column>
            </DataTable>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const customers = [
  {
    id: 1000,
    name: "James Butt",
    country: {
      name: "Algeria",
      code: "dz",
    },
    company: "Benton, John B Jr",
    date: "2015-09-13",
    status: "unqualified",
    verified: true,
    activity: 17,
    representative: {
      name: "Ioni Bowcher",
      image: "ionibowcher.png",
    },
    balance: 70663,
  },
  {
    id: 1001,
    name: "Josephine Darakjy",
    country: {
      name: "Egypt",
      code: "eg",
    },
    company: "Chanay, Jeffrey A Esq",
    date: "2019-02-09",
    status: "proposal",
    verified: true,
    activity: 0,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png",
    },
    balance: 82429,
  },
  {
    id: 1002,
    name: "Art Venere",
    country: {
      name: "Panama",
      code: "pa",
    },
    company: "Chemel, James L Cpa",
    date: "2017-05-13",
    status: "qualified",
    verified: false,
    activity: 63,
    representative: {
      name: "Asiya Javayant",
      image: "asiyajavayant.png",
    },
    balance: 28334,
  },
  {
    id: 1010,
    name: "Minna Amigon",
    country: {
      name: "Romania",
      code: "ro",
    },
    company: "Dorl, James J Esq",
    date: "2018-11-07",
    status: "qualified",
    verified: false,
    activity: 38,
    representative: {
      name: "Anna Fali",
      image: "annafali.png",
    },
    balance: 71169,
  },
];

export default MaterialTypeMaster;
