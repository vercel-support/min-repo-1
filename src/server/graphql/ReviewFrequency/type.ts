import { objectType } from 'nexus'

export const ReviewFrequency = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ReviewFrequency',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('AccountReviewFrequency', {
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
        return root.AccountReviewFrequency
      },
    })
    t.nullable.field('_count', {
      type: 'ReviewFrequencyCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
