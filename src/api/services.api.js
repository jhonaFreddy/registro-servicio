import { addRequest } from "./config";
import { getApiUrl } from "../utils/url.utils";
const URL = getApiUrl("services");

/**
 * @typedef {Object} BaseService
 * @property {number} amount_reported
 * @property {string} description
 * @property {string} category_id
 * @property {string} level
 * @property {string} evidence
 */

/**
 * @typedef {Object} ReviewServie
 * @property {number} amount_approved
 * @property {string} comment
 */

/**
 * @typedef {Object} StudentService
 * @property {number} id
 * @property {string} email
 * @property {string} registration_code
 * @property {string} name
 * @property {string} controller
 * @property {string} recruiter
 */

/**
 * @typedef {Object} Service
 * @property {number} amount_reported
 * @property {number} amount_approved
 * @property {string} evidence
 * @property {string} description
 * @property {string} comment
 * @property {number} status
 * @property {number} user_id
 * @property {number} reviewer_id
 * @property {number} category_id
 * @property {number} level
 * @property {Date} created_at
 * @property {Date} updated_at
 * @property {string} evidence
 * @property {StudentService} student
 */

/**
 * Get all Users.
 * @param {string} schema
 * @returns {{ action: Promise<Service[]>, cancel: function }}
 *  - `action` {Promise<User[]>}
 *  - `cancel` {function}
 */
export const get = (schema) => {
  return addRequest(
    URL,
    "GET",
    (res) => {
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
    },
    {
      params: {
        schema,
      },
    }
  );
};

/**
 * Find User by ID.
 * @param {number} id
 * @returns {{ action: Promise<Service>, cancel: function }}
 *  - `action` {Promise<User>}
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
 * Get Evidence by ID.
 * @param {string} fileId 
 * @returns {{ action: Promise<Service>, cancel: function }}
 *  - `action` {Promise<User>}
 *  - `cancel` {function}
 */
export const getEvidence = (fileId  = '') => {
  return addRequest(`${URL}/evidence/${fileId }`, "GET", (res) => {
    return res.data;
  });
};

/**
 * Create a new service.
 * @param {BaseService} data
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
 * update a service, can update amount_reported, description, category_id and evidence only, evidence is a pdf file, if the evidence is passed, it will be , if not, it will not be updated, the same for the other fields.
 * @param {number} id
 * @param {BaseService} data
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

/**

 * @param {number} id
 * @param {BaseService} data
 * @returns {{ action: Promise<bool>, cancel: function }}
 *  - `action` {Promise<bool>}
 *  - `cancel` {function}
 */
export const review = (id, data) => {
  return addRequest(
    `${URL}/${id}`,
    "PATH",
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
