import { objectType } from 'nexus'

export const InvestmentExperience = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'InvestmentExperience',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
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
      type: 'InvestmentExperienceCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
