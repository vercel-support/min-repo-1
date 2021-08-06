import { objectType } from 'nexus'

export const CommunicationPreferences = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CommunicationPreferences',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('ContactCommunicationPreferences', {
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
        return root.ContactCommunicationPreferences
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
      type: 'CommunicationPreferencesCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
