import { addRequest } from "./config";
import { getApiUrl } from "../utils/url.utils";

/**
 * @typedef {Object} BaseCategory
 * @property {string} name - The category's name.
 * @property {string} description - The category's description.
 */
/**
 * @typedef {Object} Category
 * @property {string} id - ID.
 * @property {string} name - The category's name.
 * @property {string} description - The category's description.
 * @property {Date} create_at - The date when the category was created.
 * @property {Date} updated_at - The date when the category was created.
 */

/**
 * Get all Categories.
 * @returns {{ action: Promise<Category[]>, cancel: function }} An object with:
 *  - `action` {Promise<Category[]>} - A promise that resolves with an array of `Category` objects.
 *  - `cancel` {function} - A function to cancel the request.
 */
export const get = () => {
  return addRequest(getApiUrl("categories"), "GET", (res) => {
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
 * Find Category by ID.
 * @param {number} id - The ID of the category to get.
 * @returns {{ action: Promise<Category>, cancel: function }} An object with:
 *  - `action` {Promise<Category>} - A promise that resolves with an `Category` object.
 *  - `cancel` {function} - A function to cancel the request.
 */
export const find = (id = 0) => {
  return addRequest(getApiUrl(`categories/${id}`), "GET", (res) => {
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
 * Create a new category.
 * @param {BaseCategory} data - The data to create the category.
 * @returns {{ action: Promise<bool>, cancel: function }} An object with:
 *  - `action` {Promise<bool>} - A promise that resolves with a boolean value.
 *  - `cancel` {function} - A function to cancel the request.
 */
export const create = (data) => {
  return addRequest(
    getApiUrl(`categories`),
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
 * Update a category, can update name and description only.
 * @param {number} id - The ID of the category to update.
 * @param {BaseCategory} data - The data to create the category.
 * @returns {{ action: Promise<bool>, cancel: function }} An object with:
 *  - `action` {Promise<bool>} - A promise that resolves with a boolean value.
 *  - `cancel` {function} - A function to cancel the request.
 */
export const update = (id, data) => {
  return addRequest(
    getApiUrl(`categories/${id}`),
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
