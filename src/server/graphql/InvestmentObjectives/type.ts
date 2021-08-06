import { objectType } from 'nexus'

export const InvestmentObjectives = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'InvestmentObjectives',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountInvestmentObjectives', {
      type: 'FinancialAccount',
      args: {
        where: 'FinancialAccountWhereInput',
        orderBy: 'FinancialAccountOrderByInput',
        cursor: 'FinancialAccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialAccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialAccountInvestmentObjectives
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
      type: 'InvestmentObjectivesCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
