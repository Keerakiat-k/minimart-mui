import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});

export const getAllProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการดึงสินค้า:", error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการดึงหมวดหมู่:", error);
    throw error;
  }
};