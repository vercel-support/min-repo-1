import { objectType } from 'nexus'

export const AccountStatus = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AccountStatus',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('AccountStatus', {
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
        return root.AccountStatus
      },
    })
    t.nullable.field('_count', {
      type: 'AccountStatusCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
