// Xóa ký tự đầu tiền của path
export const normalizePath = (path: string)=> {
  return path.startsWith('/') ? path.slice(1) : path
}