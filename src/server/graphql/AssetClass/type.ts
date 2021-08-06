import { objectType } from 'nexus'

export const AssetClass = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AssetClass',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('SecuritiesAssetClass', {
      type: 'Securities',
      args: {
        where: 'SecuritiesWhereInput',
        orderBy: 'SecuritiesOrderByInput',
        cursor: 'SecuritiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SecuritiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.SecuritiesAssetClass
      },
    })
    t.list.field('FinancialHoldingAssetClass', {
      type: 'FinancialHolding',
      args: {
        where: 'FinancialHoldingWhereInput',
        orderBy: 'FinancialHoldingOrderByInput',
        cursor: 'FinancialHoldingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialHoldingScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialHoldingAssetClass
      },
    })
    t.nullable.field('_count', {
      type: 'AssetClassCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
