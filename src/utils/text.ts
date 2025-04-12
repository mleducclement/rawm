export const extractEnglishDescription = (description: string) => {
  const matches = description.match(/\n(Español)\n/)

  if (matches && matches.index !== undefined) {
    return description.slice(0, matches.index).trim();
  }

  const simpleIndex = description.indexOf("\nEspañol\n");

  if (simpleIndex !== -1) {
    return description.slice(0, simpleIndex).trim();
  }

  return description;
}