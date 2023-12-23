import { createBoard } from '@wixc3/react-board';
import { Form1 } from '../../../components/form-1/form-1';

export default createBoard({
    name: 'Form1',
    Board: () => <Form1 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 872,
        windowHeight: 832,
        canvasHeight: 696
    }
});
