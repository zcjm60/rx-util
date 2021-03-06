import { wait } from './wait'
import { debounce } from './debounce'
test('test debounce', async () => {
  let num = 0
  const fn = debounce(100, () => num++)
  fn()
  fn()
  fn()
  await wait(200)
  expect(num).toBe(1)
  fn()
  await wait(200)
  expect(num).toBe(2)
})
