import fs from "fs";
import axios from "axios";

const action = async () => {
  let responses;
  try {
    responses = await axios("https://maksha.xyz/manifest.json");
  } catch (e) {
    console.log(e);
  }

  console.log({ data: responses.data });

  const oldData = await fs.readFileSync("./data/index.json", "utf8").toString();

  let oldDataJson = [];

  if (oldData.length > 0) {
    oldDataJson = JSON.parse(oldData);
  }

  oldDataJson.push(responses.data);

  await fs.writeFileSync(
    "./data/index.json",
    JSON.stringify(oldDataJson),
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("The file was saved!");
    }
  );
};

// action();
console.log("hello world!");

const doGetMeetings = async () => {
  const oldData = await fs
    .readFileSync("./public/data/meetingInfo/index.json", "utf8")
    .toString();

  let oldDataJson = [];

  if (oldData.length > 0) {
    oldDataJson = JSON.parse(oldData);
  }

  console.log(oldDataJson);
  let data = [];
  try {
    const responses = await axios.get(
      "https://script.google.com/macros/s/AKfycbzBUOv1R6l475CBt_7Edz7uKiT2koMbPytDtnhvO_mO4UXqOr6eGej2v22DTFkNOfKX/exec"
    );
    // console.log(responses.data);
    data = responses.data;
  } catch (err) {
    console.log(err);
  }

  let meetingInfo = [];
  let meetingPicture = [];
  const parseData = data.map((x) => JSON.parse(x));

  parseData.forEach((item) => {
    if (item.image) {
      const path = "./public/data/meetingPicture/";
      const imageName =
        item.clubName.replace(/\s+/g, "_") + "_" + item.id + ".jpeg";
      const imagePath = path + imageName;

      const imageBase64String = item.image.replace(
        /^data:image\/png;base64,/,
        ""
      );

      fs.writeFileSync(imagePath, imageBase64String, "base64", function (err) {
        console.log(err);
      });
      item.image = imageName;
    }
    oldDataJson.push(item);
  });

  await fs.writeFileSync(
    "./public/data/meetingInfo/index.json",
    JSON.stringify(oldDataJson),
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("The file was saved!");
    }
  );

  // console.log(Object.keys(data));
  // //console.log(JSON.parse(data[0]));
  // console.log();
};

doGetMeetings();
