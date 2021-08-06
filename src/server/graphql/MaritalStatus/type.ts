import { objectType } from 'nexus'

export const MaritalStatus = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'MaritalStatus',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('ContactMaritalStatus', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactMaritalStatus
      },
    })
    t.list.field('AccountMaritalStatus', {
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
        return root.AccountMaritalStatus
      },
    })
    t.nullable.field('_count', {
      type: 'MaritalStatusCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
