import * as Helper from '../DropDownHelper';
import { MOCK_DROPDOWN_LIST, MOCK_API_REPONSE } from '../../../Constants/testConstants'

describe('should test the DropDownHelper file', () => {
    test('Should test formatManagersData', () => {
        const getRandomColor = jest.fn()
            .mockReturnValueOnce('#97802D')
            .mockReturnValueOnce('#AE3093')
            .mockReturnValueOnce('#13ACFC')
        const result = Helper.formatManagersData(
            MOCK_API_REPONSE,
            getRandomColor
        );
        expect(result).toEqual(MOCK_DROPDOWN_LIST);
    });
});
