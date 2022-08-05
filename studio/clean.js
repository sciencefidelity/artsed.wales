// https://www.sanity.io/schemas/delete-unused-assets-2ef651b5
// removes orphaned documents
// `sanity exec clean.js --with-user-token`
import client from 'part:@sanity/base/client'

const query = `
  *[ _type in ["sanity.imageAsset", "sanity.fileAsset"] ]
  {_id, "refs": count(*[ references(^._id) ])}
  [ refs == 0 ]
  ._id
`

client
  .fetch(query)
  .then(ids => {
    if (!ids.length) {
      console.log('No assets to delete')
      return true
    }

    console.log(`Deleting ${ids.length} assets`)
    return ids
      .reduce((trx, id) => trx.delete(id), client.transaction())
      .commit()
      .then(() => console.log('Done!'))
  })
  .catch(err => {
    if (err.message.includes('Insufficient permissions')) {
      console.error(err.message)
      console.error('Did you forget to pass `--with-user-token`?')
    } else {
      console.error(err.stack)
    }
  })
