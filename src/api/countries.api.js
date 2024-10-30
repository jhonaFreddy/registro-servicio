import { addRequest } from "./config";
import { getApiUrl } from "../utils/url.utils";
const URL = getApiUrl("country");

/**
 * @typedef {Object} BaseCountry
 * @property {string} name - The country's name.
 */
/**
 * @typedef {Object} Country
 * @property {string} id - ID.
 * @property {string} name - The country's name.
 * @property {Date} create_at - The date when the country was created.
 * @property {Date} updated_at - The date when the country was created.
 */

/**
 * Get all Countries.
 * @returns {{ action: Promise<Country[]>, cancel: function }} An object with:
 *  - `action` {Promise<Country[]>} - A promise that resolves with an array of `Country` objects.
 *  - `cancel` {function} - A function to cancel the request.
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
 * Find Country by ID.
 * @param {number} id - The ID of the country to get.
 * @returns {{ action: Promise<Country>, cancel: function }} An object with:
 *  - `action` {Promise<Country>} - A promise that resolves with an `Country` object.
 *  - `cancel` {function} - A function to cancel the request.
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
 * @param {BaseCountry} data - The data to create the country.
 * @returns {{ action: Promise<bool>, cancel: function }} An object with:
 *  - `action` {Promise<bool>} - A promise that resolves with a boolean value.
 *  - `cancel` {function} - A function to cancel the request.
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
 * @param {number} id - The ID of the country to update.
 * @param {BaseCountry} data - The data to create the country.
 * @returns {{ action: Promise<bool>, cancel: function }} An object with:
 *  - `action` {Promise<bool>} - A promise that resolves with a boolean value.
 *  - `cancel` {function} - A function to cancel the request.
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
