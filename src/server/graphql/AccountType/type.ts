import { objectType } from 'nexus'

export const AccountType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AccountType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('AccountType', {
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
        return root.AccountType
      },
    })
    t.nullable.field('_count', {
      type: 'AccountTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
