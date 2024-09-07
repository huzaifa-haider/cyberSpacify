import * as XLSX from 'xlsx';

export const readExcel = async (filePath) => {
  const response = await fetch(filePath);
  const data = await response.arrayBuffer();
  const workbook = XLSX.read(data, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  return jsonData;
};
