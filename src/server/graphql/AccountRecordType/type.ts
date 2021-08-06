import { objectType } from 'nexus'

export const AccountRecordType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AccountRecordType',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('description')
    t.list.field('AccountRecordType', {
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
        return root.AccountRecordType
      },
    })
    t.nullable.field('_count', {
      type: 'AccountRecordTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
