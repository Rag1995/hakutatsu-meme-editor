export const downloadFile = (dataURL: string, filename: string) => {
  const link = document.createElement('a')
  link.download = filename // 設置下載的文件名
  link.href = dataURL // 設置下載的內容
  link.click() // 觸發下載
}
