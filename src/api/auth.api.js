import { addRequest } from "./config";
import { getApiUrl } from "../utils/url.utils";
const URL = getApiUrl("auth");

/**
 * @typedef {Object} Role
 * @property {number} id
 * @property {string} name
 */
/**
 * @typedef {Object} AuthData
 * @property {number} id
 * @property {string} email
 * @property {string} f_name
 * @property {string} s_name
 * @property {string} f_lastname
 * @property {string} s_lastname
 * @property {string} full_name
 * @property {Role} role
 * @property {string} token
 */

/**
 * @typedef {Object} ProfileData
 * @property {number} id
 * @property {string} email
 * @property {string} f_name
 * @property {string} s_name
 * @property {string} f_lastname
 * @property {string} s_lastname
 * @property {string} full_name
 * @property {Role} role
 */

/**
 * Login with email and password.
 * @param {string} email
 * @param {string} password
 * @returns {{ action: Promise<AuthData>, cancel: function }}
 *  - `action` {Promise<Role>}
 *  - `cancel` {function}
 */
export const login = (email, password) => {
  return addRequest(
    `${URL}/login`,
    "POST",
    (res) => {
      if (res.data) {
        return res.data;
      }
    },
    {
      email,
      password,
    }
  );
};

/**
 * Get profile from token.
 * @returns {{ action: Promise<ProfileData>, cancel: function }}
 *  - `action` {Promise<Role[]>}
 *  - `cancel` {function}
 */
export const profile = () => {
  return addRequest(`${URL}/profile`, "GET", (res) => {
    if (res.data) {
      return res.data;
    }
  });
};
