export const ms = (timeString: string) => {
  if (timeString === "") {
    throw new Error("timeString cannot be an empty string");
  }

  if (timeString.endsWith("ms")) {
    const value = parseInt(timeString.slice(0, -2), 10);
    if (isNaN(value)) {
      throw new Error("Invalid number format for milliseconds");
    }
    return value;
  }

  const regex = /^(\d+)([smhdw])$/;
  const match = timeString.match(regex);

  if (!match) {
    throw new Error("Invalid time string, use format like '500ms', '30s', '2m', '5h', '7d' or '1w'");
  }

  const value = parseInt(match[1], 10);
  const unit = match[2];

  const multipliers: { [key: string]: number } = {
    ms: 1,
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    w: 7 * 24 * 60 * 60 * 1000
  };

  return value * multipliers[unit];
};
