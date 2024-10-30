import { addRequest } from "./config";
import { getApiUrl } from "../utils/url.utils";
const URL = getApiUrl("schools");

/**
 * @typedef {Object} BaseSchool
 * @property {string} name
 */
/**
 * @typedef {Object} School
 * @property {string} id
 * @property {string} name
 * @property {Date} create_at
 * @property {Date} updated_at
 */

/**
 * Get all Schools.
 * @returns {{ action: Promise<School[]>, cancel: function }}
 *  - `action` {Promise<School[]>}
 *  - `cancel` {function}
 */
export const get = () => {
  return addRequest(URL, "GET", (res) => {
    if (res.data) {
      if (res.data.length > 0) {
        return res.data.map((item) => {
          return {
            ...item,
            create_at: new Date(item.create_at),
            updated_at: new Date(item.updated_at),
          };
        });
      }
    }
    return [];
  });
};

/**
 * Find School by ID.
 * @param {number} id
 * @returns {{ action: Promise<School>, cancel: function }}
 *  - `action` {Promise<School>}
 *  - `cancel` {function}
 */
export const find = (id = 0) => {
  return addRequest(`${URL}/${id}`, "GET", (res) => {
    if (res.data) {
      return {
        ...res.data,
        create_at: new Date(res.data.create_at),
        updated_at: new Date(res.data.updated_at),
      };
    }
  });
};

/**
 * Create a new country.
 * @param {BaseSchool} data
 * @returns {{ action: Promise<bool>, cancel: function }}
 *  - `action` {Promise<bool>}
 *  - `cancel` {function}
 */
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
/**
 * Update a country, can update name and description only.
 * @param {number} id
 * @param {BaseSchool} data
 * @returns {{ action: Promise<bool>, cancel: function }}
 *  - `action` {Promise<bool>}
 *  - `cancel` {function}
 */
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
