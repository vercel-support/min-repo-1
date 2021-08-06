import { objectType } from 'nexus'

export const RiskTolerance = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'RiskTolerance',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('AccountRiskTolerance', {
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
        return root.AccountRiskTolerance
      },
    })
    t.nullable.field('_count', {
      type: 'RiskToleranceCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
