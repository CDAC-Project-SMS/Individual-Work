import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "../../assets/Style";
import { useState } from "react";
import { createStudObj, getStudents } from "../../services/student";

const tableColumns = [
  {
    id: "roll_no",
    label: "Roll no",
    align: "center",
  },
  {
    id: "name",
    label: "Name",
    align: "center",
  },
  {
    id: "mob_no",
    label: "Mobile no",
    align: "center",
  },
  {
    id: "email",
    label: "Email Id",
    align: "center",
  },
];

function Students() {
  const [studentList, setStudentList] = useState([createStudObj()]);

  const loadStudList = () => {
    getStudents().then((result) => {
      console.log(result);
      setStudentList(result);
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Typography
          variant="h1"
          sx={{
            width: "60%",
            textAlign: "center",
            fontSize: "2.5rem",
            color: styles.colors.secondary_dark,
          }}
        >
          Students list
        </Typography>
        <Button
          variant="filled"
          sx={{
            backgroundColor: styles.colors.primary_dark,
            color: styles.colors.primary,
            maxWidth: "20%",
            height: "10%",
          }}
        >
          Add student
        </Button>
        <Button
          variant="outlined"
          sx={{ maxWidth: "20%", height: "10%" }}
          onClick={loadStudList}
        >
          Get Student List
        </Button>
      </Box>
      <Box sx={{ marginTop: "1rem" }}>
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: styles.colors.primary_medium }}
        >
          <Table sx={{ width: "100%" }}>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: styles.colors.secondary_dark,
                }}
              >
                {tableColumns.map((column) => {
                  return (
                    <TableCell
                      align={column.align}
                      key={column.id}
                      sx={{
                        color: styles.colors.primary,
                        fontWeight: "600",
                        fontSize: "1.3rem",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {studentList.map((stud) => {
                return (
                  <TableRow sx={{ backgroundColor: styles.colors.primary }}>
                    <TableCell align="center">{stud.roll_no}</TableCell>
                    <TableCell align="center">{`${
                      stud.first_name +
                      " " +
                      stud.middle_name +
                      " " +
                      stud.last_name
                    }`}</TableCell>
                    <TableCell align="center">{stud.mob_no}</TableCell>
                    <TableCell align="center">{stud.email}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Students;
