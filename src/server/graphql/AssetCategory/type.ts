import { objectType } from 'nexus'

export const AssetCategory = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AssetCategory',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('SecuritiesAssetCategory', {
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
        return root.SecuritiesAssetCategory
      },
    })
    t.list.field('FinancialHoldingAssetCategory', {
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
        return root.FinancialHoldingAssetCategory
      },
    })
    t.nullable.field('_count', {
      type: 'AssetCategoryCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
