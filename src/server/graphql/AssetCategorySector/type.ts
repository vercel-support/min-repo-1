import { objectType } from 'nexus'

export const AssetCategorySector = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AssetCategorySector',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('SecuritiesAssetCategorySector', {
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
        return root.SecuritiesAssetCategorySector
      },
    })
    t.list.field('FinancialHoldingAssetCategorySector', {
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
        return root.FinancialHoldingAssetCategorySector
      },
    })
    t.nullable.field('_count', {
      type: 'AssetCategorySectorCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
