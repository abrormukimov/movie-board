import fetchComments from '../__mocks__/commentsMock';

test('Should count the total number of comments', async () => {
  const comments = await fetchComments();
  const count = comments.length;
  expect(count).toEqual(10);
});
