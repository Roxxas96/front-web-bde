import { Avatar, Typography } from "@mui/material";
import { User } from "~/models/User";

export default function UserDisplay({
  user,
  API_URL,
}: {
  user: User;
  API_URL?: string;
}) {
  return (
    <div>
      <Typography variant="h3" style={{ marginTop: "10px" }}>
        {user.pseudo}
      </Typography>
      <Avatar
        src={`${API_URL || "http://localhost:4000/"}user/avatar/${
          user.avatarId
        }`}
        alt={user.pseudo}
        sx={{ width: "75%", height: "75%" }}
        style={{ margin: "auto" }}
      />
      <Typography variant="h5" style={{ marginTop: "10px" }}>
        <b>Name : {user.name}</b>
      </Typography>
      <Typography variant="h5" style={{ marginTop: "10px" }}>
        <b>Surname : {user.surname}</b>
      </Typography>
    </div>
  );
}
