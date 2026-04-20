export function getAlias(fullName: string) {
  return fullName
    .split(" ")
    .map((words) => {
      return words[0];
    })
    .join("");
}
