const addVotes = (voteId) => {
  return {
    type: "ADD_VOTES",
    payload: voteId,
  };
};
export default {
  addVotes,
};
