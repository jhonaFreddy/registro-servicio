import { addRequest } from "./config";
import { getApiUrl } from "../utils/url.utils";
const URL = getApiUrl("roles");

/**
 * @typedef {Object} BaseRole
 * @property {string} name
 */
/**
 * @typedef {Object} Role
 * @property {string} id
 * @property {string} name
 * @property {Date} create_at
 * @property {Date} updated_at
 */

/**
 * Get all Roles.
 * @returns {{ action: Promise<Role[]>, cancel: function }}
 *  - `action` {Promise<Role[]>}
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
 * Find Role by ID.
 * @param {number} id
 * @returns {{ action: Promise<Role>, cancel: function }}
 *  - `action` {Promise<Role>}
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

