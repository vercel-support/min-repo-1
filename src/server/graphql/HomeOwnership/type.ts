import { objectType } from 'nexus'

export const HomeOwnership = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'HomeOwnership',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('ContactHomeOwnership', {
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
        return root.ContactHomeOwnership
      },
    })
    t.list.field('Account', {
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
        return root.Account
      },
    })
    t.nullable.field('_count', {
      type: 'HomeOwnershipCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
