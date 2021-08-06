import { objectType } from 'nexus'

export const TimeHorizon = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'TimeHorizon',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountTimeHorizon', {
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
        return root.FinancialAccountTimeHorizon
      },
    })
    t.list.field('AccountTimeHorizon', {
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
        return root.AccountTimeHorizon
      },
    })
    t.nullable.field('_count', {
      type: 'TimeHorizonCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
