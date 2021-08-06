import { objectType } from 'nexus'

export const LifeEvent = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'LifeEvent',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('ContactLifeEvent', {
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
        return root.ContactLifeEvent
      },
    })
    t.list.field('AccountLifeEvent', {
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
        return root.AccountLifeEvent
      },
    })
    t.nullable.field('_count', {
      type: 'LifeEventCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
