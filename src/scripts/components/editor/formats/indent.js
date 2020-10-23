const defaultIndent = [1, 2, 3, 4, 5, 6, 7, 8].map((value) => `${value}em`);

function useIndent(Quill) {
  const Parchment = Quill.import('parchment');

  let config = {
    scope: Parchment.Scope.BLOCK,
    whitelist: defaultIndent
  };

  class IdentAttributor extends Parchment.Attributor.Style {
    add(node, value) {
      console.log('add', node, value);
      if (value === '+1' || value === '-1') {
        let indent = this.value(node.replace('px', '')) || 0;
        value = value === '+1' ? indent + 1 : indent - 1;
      }

      if (value === 0) {
        this.remove(node);
        return true;
      } else {
        return super.add(node, `${value}em`);
      }
    }

    value(node) {
      return parseInt(super.value(node)) || undefined; // Don't return NaN
    }
  }

  const IndentStyle = new IdentAttributor('indent', 'margin-left', config);

  Quill.register(IndentStyle, true);
}

export default useIndent;
