import { Alert, Button } from "@mui/material";
import { Challenge, DeleteChallengeFormData } from "~/models/Challenge";
import { generateAlert } from "~/utils/error";

export default function DeleteChallengeForm({
  challenge,
  formData,
}: {
  challenge: Challenge;
  formData?: DeleteChallengeFormData;
}) {
  return (
    <div>
      {generateAlert("error", formData?.error)}
      {generateAlert("success", formData?.success)}
      <form method="post">
        <input type="hidden" name="method" value="delete-challenge" />
        <input
          type="hidden"
          name="challengeId"
          value={challenge?.id}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Delete
        </Button>
      </form>
    </div>
  );
}
