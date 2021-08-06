import { objectType } from 'nexus'

export const FinancialGoalStatus = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'FinancialGoalStatus',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialGoalType', {
      type: 'FinancialGoal',
      args: {
        where: 'FinancialGoalWhereInput',
        orderBy: 'FinancialGoalOrderByInput',
        cursor: 'FinancialGoalWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialGoalScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialGoalType
      },
    })
    t.nullable.field('_count', {
      type: 'FinancialGoalStatusCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
