export function getDiferenceYear(year) {
  return new Date().getFullYear() - year;
}

export function brandOperation(brand) {
  let increment;
  switch (brand) {
    case "european":
      increment = 1.3;
      break;
    case "american":
      increment = 1.15;
      break;
    case "asian":
      increment = 1.05;
      break;
    default:
      break;
  }

  return increment;
}

export function getPlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

export function firstMayus(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
