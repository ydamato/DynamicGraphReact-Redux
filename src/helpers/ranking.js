export const getMaxRank = (state = []) => {
  let max = null;

  state.forEach((ranking) => {
    var rank = ranking.rank;
    if(!max || rank > max) {
      max = rank;
    }
  });

  return max;
};

export const calculateRankRatio = (rank, max) => parseFloat(1 - (rank / max), 10);