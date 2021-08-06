import { objectType } from 'nexus'

export const Frequency = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Frequency',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountStatementFrequency', {
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
        return root.FinancialAccountStatementFrequency
      },
    })
    t.list.field('FinancialAccountRebalanceFrequency', {
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
        return root.FinancialAccountRebalanceFrequency
      },
    })
    t.nullable.field('_count', {
      type: 'FrequencyCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
