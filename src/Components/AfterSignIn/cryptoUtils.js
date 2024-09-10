// cryptoUtils.js
import CryptoJS from "crypto-js";

const secretKey =
  "e0f875fe902b98a2bc7565a93f67a846b744c53158036fa3ce85fa3682debea5";

// Encrypt data
export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

// Decrypt data
export const decryptData = (cipherText) => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (error) {
    console.error("Decryption failed", error);
    return null;
  }
};

// Set encrypted item in localStorage
export const setEncryptedItem = (key, value) => {
  const encryptedData = encryptData(value);
  localStorage.setItem(key, encryptedData);
};

// Get decrypted item from localStorage
export const getDecryptedItem = (key) => {
  const encryptedData = localStorage.getItem(key);
  if (!encryptedData) return null;
  return decryptData(encryptedData);
};
