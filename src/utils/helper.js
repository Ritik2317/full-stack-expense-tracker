import moment from "moment";

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


export function addThousandSeparator(num) {
  if (typeof num !== 'number' && typeof num !== 'string') return '';

  const [integerPart, decimalPart] = num.toString().split('.');

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

export const prepareExpenseBarChartData = (data) => {
  const safeData = Array.isArray(data) ? data : [];
  const chartData = safeData.map((item) => ({
    category: item?.category,
    amount: item?.amount,
  }));
  return chartData;
};

export const prepareIncomeChartData = (data = [])=>{
  const sortedData = [...data].sort((a,b)=> new Date(a.date) - new Date(b.date))
  
  const chartData = sortedData.map((item)=>({
    month: moment(item?.date).format("Do MM"),
    amount: item?.amount,
    source:item?.sources,
  }))
  return chartData;
}

export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MM"),
    amount: item?.amount,
    category: item?.category,
  }));

  return chartData;
};
