const receiptsColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d', '#145541', '#113d27'];
const payablesColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f', '#a20b0e', '#aa2422', '#e4d5d5'];

export const receiptsCategories = [
  { type: 'Air Ticket', amount: 0, color: receiptsColors[0] },
  { type: 'Train Ticket', amount: 0, color: receiptsColors[1] },
  { type: 'Bus Ticket', amount: 0, color: receiptsColors[2] },
  { type: 'Hotel Booking', amount: 0, color: receiptsColors[3] },
  { type: 'Tour Package', amount: 0, color: receiptsColors[4] },
  { type: 'Currency', amount: 0, color: receiptsColors[5] },
  { type: 'Transport', amount: 0, color: receiptsColors[6] },
  { type: 'Passport', amount: 0, color: receiptsColors[7] },
  { type: 'Visa', amount: 0, color: receiptsColors[8] },
  { type: 'Profit', amount: 0, color: receiptsColors[9] },
  { type: 'Others', amount: 0, color: receiptsColors[10] },
];

export const payablesCategories = [
  { type: 'Air Ticket', amount: 0, color: payablesColors[0] },
  { type: 'Train Ticket', amount: 0, color: payablesColors[1] },
  { type: 'Bus Ticket', amount: 0, color: payablesColors[2] },
  { type: 'Hotel Booking', amount: 0, color: payablesColors[3] },
  { type: 'Tour Package', amount: 0, color: payablesColors[4] },
  { type: 'Currency', amount: 0, color: payablesColors[5] },
  { type: 'Transport', amount: 0, color: payablesColors[6] },
  { type: 'Passport', amount: 0, color: payablesColors[7] },
  { type: 'Visa', amount: 0, color: payablesColors[8] },
  { type: 'Rentals', amount: 0, color: payablesColors[9] },
  { type: 'Salary', amount: 0, color: payablesColors[10] },
  { type: 'Bank Payment', amount: 0, color: payablesColors[11] },
  { type: 'Give Away', amount: 0, color: payablesColors[12] },
  { type: 'Others', amount: 0, color: payablesColors[13] },
];

export const resetCategories = () => {
  receiptsCategories.forEach((c) => c.amount = 0);
  payablesCategories.forEach((c) => c.amount = 0);
};