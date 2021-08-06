import { objectType } from 'nexus'

export const TaxStatus = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'TaxStatus',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountTaxStatus', {
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
        return root.FinancialAccountTaxStatus
      },
    })
    t.nullable.field('_count', {
      type: 'TaxStatusCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
