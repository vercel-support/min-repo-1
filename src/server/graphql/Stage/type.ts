import { objectType } from 'nexus'

export const Stage = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Stage',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountStage', {
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
        return root.FinancialAccountStage
      },
    })
    t.nullable.field('_count', {
      type: 'StageCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
