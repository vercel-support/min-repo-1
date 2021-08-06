import { objectType } from 'nexus'

export const Status = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Status',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountStatus', {
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
        return root.FinancialAccountStatus
      },
    })
    t.nullable.field('_count', {
      type: 'StatusCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
