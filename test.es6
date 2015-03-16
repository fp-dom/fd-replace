import assert from 'assert';
import elem from 'fd-elem';
import append from 'fd-append';
import replace from './';

it('fd-replace', () => {
  let appendtoBody = append(document.body);
  let h1 = elem('h1','meow');
  let h2 = elem('h2', 'bow');
  appendtoBody(h1);
  replace(document.body,h2,h1);
  assert.equal(document.body.lastChild.textContent, 'bow');
});
