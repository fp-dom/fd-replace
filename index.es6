import {curry3} from 'fj-curry';

let _replace = (parentNode , newChild, oldChild) => {
  parentNode.replaceChild(newChild, oldChild);
}
export default curry3(_replace);