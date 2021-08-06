import { objectType } from 'nexus'

export const ClosureReason = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ClosureReason',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountClosureReason', {
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
        return root.FinancialAccountClosureReason
      },
    })
    t.nullable.field('_count', {
      type: 'ClosureReasonCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
