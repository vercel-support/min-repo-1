import { objectType } from 'nexus'

export const ModelPortfolio = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ModelPortfolio',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('FinancialAccountModelPortfolio', {
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
        return root.FinancialAccountModelPortfolio
      },
    })
    t.nullable.field('_count', {
      type: 'ModelPortfolioCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
