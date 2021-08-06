import { objectType } from 'nexus'

export const ChannelInterface = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ChannelInterface',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('ContactMostUsedChannelInterface', {
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
        return root.ContactMostUsedChannelInterface
      },
    })
    t.list.field('AccountMostUsedChannelInterface', {
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
        return root.AccountMostUsedChannelInterface
      },
    })
    t.list.field('AccountLastUsedChannelInterface', {
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
        return root.AccountLastUsedChannelInterface
      },
    })
    t.nullable.field('_count', {
      type: 'ChannelInterfaceCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
