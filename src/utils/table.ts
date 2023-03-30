/**
 * @description 处理 prop 为多级嵌套的情况(列如: prop:user.name)
 * @param {Object} row 当前行数据
 * @param {String} prop 当前 prop
 * @return any
 * */
export function handleRowAccordingToProp(
  row: { [key: string]: any },
  prop: string
) {
  if (!prop.includes('.'))
    return typeof row[prop] === 'number' ? row[prop] : row[prop] || '-'
  prop
    .split('.')
    .forEach(
      (item) =>
        (row = typeof row[item] === 'number' ? row[item] : row[item] || '-')
    )
  return row
}
