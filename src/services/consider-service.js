
class ConsiderService {

  calculatePercents = (totalCounts, currentValue) => {
    if (currentValue === 0)
      return 0;
    return Math.floor(currentValue / (totalCounts / 100));
  }
}

export default ConsiderService;