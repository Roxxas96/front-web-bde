import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Paper,
  TableContainer,
  Avatar,
} from "@mui/material";
import { User } from "~/models/User";
import { Link } from "remix";

export default function UserList({ users }: { users: User[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Avatar</TableCell>
            <TableCell align="center">Pseudo</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Surname</TableCell>
            <TableCell align="center">Total earned</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/users/${user.id}`}>
                  <Avatar
                    variant="rounded"
                    alt={user.name}
                    src=""
                    sx={{ width: 128, height: 128 }}
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  />
                </Link>
              </TableCell>
              <TableCell align="center">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/users/${user.id}`}
                >
                  <b>{user.pseudo}</b>
                </Link>
              </TableCell>
              <TableCell align="center">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/users/${user.id}`}
                >
                  <b>{user.name}</b>
                </Link>
              </TableCell>
              <TableCell align="center">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/users/${user.id}`}
                >
                  <b>{user.surname}</b>
                </Link>
              </TableCell>
              <TableCell align="center">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/users/${user.id}`}
                >
                  <b>{user.totalEarnedPoints}</b>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
