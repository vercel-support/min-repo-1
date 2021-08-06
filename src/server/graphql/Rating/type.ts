import { objectType } from 'nexus'

export const Rating = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Rating',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('AccountRating', {
      type: 'Account',
      args: {
        where: 'AccountWhereInput',
        orderBy: 'AccountOrderByInput',
        cursor: 'AccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AccountRating
      },
    })
    t.nullable.field('_count', {
      type: 'RatingCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
