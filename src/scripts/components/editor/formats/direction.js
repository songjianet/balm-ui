import { useEditor } from '../quill';

function useDirection() {
  const { Quill } = useEditor();
  const DirectionStyle = Quill.import('attributors/style/direction');

  Quill.register(DirectionStyle, true);
}

export default useDirection;
