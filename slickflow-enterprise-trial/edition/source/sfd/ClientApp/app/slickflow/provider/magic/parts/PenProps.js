import { TextFieldEntry, isTextFieldEntryEdited } from '@bpmn-io/properties-panel';
import { useService } from 'bpmn-js-properties-panel';

export default function(element) {

  return [
    {
      id: 'pen',
      element,
      component: Pen,
      isEdited: isTextFieldEntryEdited
    }
  ];
}

function Pen(props) {
  const { element, id } = props;

  const modeling = useService('modeling');
  const translate = useService('translate');
  const debounce = useService('debounceInput');

  const getValue = () => {
    return element.businessObject.pen || '';
  }

  const setValue = value => {
    return modeling.updateProperties(element, {
      pen: value
    });
  }

  return <TextFieldEntry
    id={ id }
    element={ element }
    description={ translate('Apply a black magic pen') }
    label={ translate('PenTitle') }
    getValue={ getValue }
    setValue={ setValue }
    debounce={ debounce }
  />
}
