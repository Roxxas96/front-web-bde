import { Alert, Button } from "@mui/material";
import { DeleteGoodiesFormData, Goodies } from "~/models/Goodies";
import { generateAlert } from "~/utils/error";

export default function DeleteGoodiesForm({
  goodies,
  formData,
}: {
  goodies: Goodies;
  formData?: DeleteGoodiesFormData;
}) {
  return (
    <div>
      {generateAlert("error", formData?.error)}
      {generateAlert("success", formData?.success)}
      <form method="post">
        <input type="hidden" name="method" value="delete-goodies" />
        <input type="hidden" name="goodiesId" value={goodies?.id} />
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
