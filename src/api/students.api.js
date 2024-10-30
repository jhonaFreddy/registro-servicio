import { addRequest } from "./config";
import { getApiUrl } from "../utils/url.utils";
const URL = getApiUrl("students");

export const get = () => {
  return addRequest(URL, "GET", (res) => {
    if (res.data) {
      return res.data;
      // if (res.data.length > 0) {
      //   return res.data.map((item) => {
      //     return {
      //       ...item,
      //       create_at: new Date(item.create_at),
      //       updated_at: new Date(item.updated_at),
      //     };
      //   });
      // }
    }
    return [];
  });
};

export const find = (id = 0) => {
  return addRequest(`${URL}/${id}`, "GET", (res) => {
    if (res.data) {
      return res.data;
      // return {
      //   ...res.data,
      //   create_at: new Date(res.data.create_at),
      //   updated_at: new Date(res.data.updated_at),
      // };
    }
  });
};

export const create = (data) => {
  return addRequest(
    URL,
    "POST",
    (res) => {
      if (res.status === 201) {
        return res.data.message.includes("successfully");
      } else {
        return false;
      }
    },
    {
      data,
    }
  );
};

export const update = (id, data) => {
  return addRequest(
    `${URL}/${id}`,
    "PUT",
    (res) => {
      if (res.status === 200) {
        return res.data.message.includes("successfully");
      } else {
        return false;
      }
    },
    {
      data,
    }
  );
};
