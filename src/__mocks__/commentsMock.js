const fetchComments = async () => {
  const result = Promise.resolve(
    new Array(10).fill({
      comment: 'Awesome meal',
      creation_date: '2021-10-13',
      username: 'Peter',
    }),
  );
  return result;
};

export default fetchComments;
