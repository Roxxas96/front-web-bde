import { Container, Typography } from "@mui/material";

import {
  json,
  LoaderFunction,
  useCatch,
  useLoaderData,
  useOutletContext,
} from "remix";

import {
  generateAlert,
  generateExpectedError,
  generateUnexpectedError,
} from "~/utils/error";

import { requireAuth } from "~/services/authentication";
import { getManyGoodies } from "~/services/goodies";
import GoodiesGrid from "~/components/goodies/grids/goodiesGrid";
import { Goodies } from "~/models/Goodies";
import { ContextData } from "~/root";

type LoaderData = {
  goodiesResponse?: { error?: string; goodies?: Goodies[]; success?: string };
};

async function loadGoodies(token: string) {
  const { code, ...goodiesResponse } = await getManyGoodies(token, 100, 0);

  return json({ goodiesResponse } as LoaderData, code);
}

//Function that handle GET resuests
export const loader: LoaderFunction = async ({ request }) => {
  const token = await requireAuth(request, "/goodies");

  return await loadGoodies(token);
};

export default function Shop() {
  const loaderData = useLoaderData<LoaderData>();

  const { API_URL } = useOutletContext<ContextData>();

  return (
    <Container component="main" style={{ marginTop: "50px" }}>
      <Typography style={{ textAlign: "center" }} variant="h2">
        Shop
      </Typography>
      {generateAlert("error", loaderData.goodiesResponse?.error)}
      {loaderData.goodiesResponse?.goodies && (
        <GoodiesGrid
          API_URL={API_URL}
          goodies={loaderData.goodiesResponse.goodies}
        />
      )}
    </Container>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return generateExpectedError(caught);
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return generateUnexpectedError(error);
}
