import { objectType } from 'nexus'

export const FinancialAccountType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'FinancialAccountType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountType', {
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
        return root.FinancialAccountType
      },
    })
    t.nullable.field('_count', {
      type: 'FinancialAccountTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
