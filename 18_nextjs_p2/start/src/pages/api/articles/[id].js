import axios from "axios";

const JSON_SERVER_URL = `${process.env.JSON_SERVER_URL}/articles`;

export default async function handler(req, res) {
  const { method, query } = req;

  try {
    console.log(JSON_SERVER_URL);
    if (method === "GET") {
      const result = await axios
        .get(`${JSON_SERVER_URL}/${query.id}`)
        .then((res) => res.data);
      console.log(result);
      return res.status(200).json(result);
    }
  } catch {}

  return res.status(500).json({
    error: {
      status: 500,
      code: "BAD_REQUEST",
      message: "invalid request method",
    },
  });
}
