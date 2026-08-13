export const money = (n: number) =>
  `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

export const moneyK = (n: number) => `$${(n / 1000).toFixed(1)}k`;
