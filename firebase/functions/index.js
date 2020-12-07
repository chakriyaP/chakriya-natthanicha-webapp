const functions = require("firebase-functions");
const cors = require("cors");
const app = require("express")().use(cors());
const { db, bucket } = require("./util/admin");

// API
exports.api = functions.region("asia-east2").https.onRequest(app);

app.get("/sugarcaneBurningArea/:region", (req, res) => {
  if (!req.params.region) return res.status(404).json({ err: "invalid path" });
  const region = req.params.region;

  const doc = db.doc(`/sugarcane_burning_area/${region}`);
  doc
    .get()
    .then((data) => {
      return data.data();
    })
    .then((response) => {
      // const debug = {region , response}
      return res.json([response]);
      // console.log(debug);
    })
    .catch((err) => res.status(500).json({ err }));
});

