
class ConsiderService {

  calculatePercents = (totalCounts, currentValue) => {
    if (currentValue === 0)
      return 0;
    // return (totalCounts / 100) * currentValue;
    return Math.floor(currentValue / (totalCounts / 100));
  }
}

export default ConsiderService;