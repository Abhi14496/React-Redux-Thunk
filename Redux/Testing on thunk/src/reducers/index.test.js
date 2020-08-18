import reducer from './index';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
          userinfo: [],
          loading:false,
          error:''
        });
    });
    
});