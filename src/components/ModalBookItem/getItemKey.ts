export const getItemKey = (item: string) => {
  return item
    .toLowerCase()
    .split(' ')
    .map((item: string, index: number) =>
      index ? item[0].toUpperCase() + item.slice(1) : item
    )
    .join('');
};
