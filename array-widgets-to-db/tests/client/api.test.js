import nock from 'nock'

import * as api from '../../client/api'

test('deleteWidget', () => {
  var scope = nock('http://localhost:3000')
    .delete('/widgets/1')
    .reply(204)

  api.deleteWidget({id: 1}, (err) => {
    expect(err).toBeFalsy()
    scope.done()
  })
})
