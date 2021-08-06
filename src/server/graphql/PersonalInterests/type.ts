import { objectType } from 'nexus'

export const PersonalInterests = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'PersonalInterests',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('AccountPersonalInterests', {
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
        return root.AccountPersonalInterests
      },
    })
    t.nullable.field('_count', {
      type: 'PersonalInterestsCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
