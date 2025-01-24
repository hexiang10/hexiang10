export const filters = {
  // 格式化时间
  getformatTime(currentDate) {
    // 获取年、月、日、时、分、秒
    let year = currentDate.getFullYear()
    let month = ('0' + (currentDate.getMonth() + 1)).slice(-2) // 月份需加1，且不足两位补0
    let day = ('0' + currentDate.getDate()).slice(-2) // 不足两位补0
    let hours = ('0' + currentDate.getHours()).slice(-2) // 不足两位补0
    let minutes = ('0' + currentDate.getMinutes()).slice(-2) // 不足两位补0
    let seconds = ('0' + currentDate.getSeconds()).slice(-2) // 不足两位补0
    // 格式化时间字符串（可自定义返回格式）
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  },
}
